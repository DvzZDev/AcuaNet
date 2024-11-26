"use client"
import { ReactTyped } from "react-typed"
import { useState } from "react"
import { Link } from "next-view-transitions"

export default function SerchWeather() {
  const [type, setType] = useState("")
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [empty, setEmpty] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value)
    setData([])
  }

  const onSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (type === "") {
      setEmpty(true)
      return
    } else {
      setEmpty(false)
    }
    setLoading(true)
    const url = `https://nominatim.openstreetmap.org/search.php?q=${type}&format=jsonv2&countrycodes=ES`

    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error("Error en la respuesta de la API")
      }
      const data = await res.json()
      setVisible(true)
      setData(data)
    } catch (error) {
      console.error("Error al buscar coordenadas:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form
        onSubmit={onSearch}
        className="border-1 relative z-10 mt-3 flex max-h-16 w-[15rem] items-center justify-center rounded-2xl border-solid border-green-100/40 bg-green-100/20 p-1 text-sm transition-all focus-within:border-green-200 sm:w-[20rem] sm:text-base md:mt-8 md:w-[20rem] md:text-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-1 top-1/2 -translate-y-1/2 transform stroke-green-100"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" />
        </svg>
        <ReactTyped
          strings={["Consultar clima..."]}
          typeSpeed={70}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            className="ml-8 w-full bg-transparent text-[16px] text-green-100 placeholder-green-100 placeholder-opacity-60 focus:outline-none sm:text-[18px]"
            type="text"
            value={type}
            onChange={handleChange}
          />
        </ReactTyped>
        <button
          aria-label="Buscar"
          className="group text-slate-400 transition-all"
          type="submit"
        >
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 150"
              width="30px"
              height="30px"
            >
              <path
                fill="none"
                stroke="#0092FF"
                strokeDasharray="300 385"
                strokeLinecap="round"
                strokeWidth="10"
                d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  calcMode="spline"
                  dur="2s"
                  keySplines="0 0 1 1"
                  repeatCount="indefinite"
                  values="685;-685"
                />
              </path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="lightgreen"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          )}
        </button>
      </form>
      {empty && (
        <h1 className={`animate-fade-in pl-1 text-base text-red-500 transition-all ${empty ? "animate-fade flex" : "hidden"}`}>
          introduzca un lugar
        </h1>
      )}
      <div className="relative z-50">
        {data.length > 0 && type && (
          <ul className="absolute mt-5 flex w-full animate-fade-in-down flex-col gap-1 rounded-lg bg-[#23583a] text-base text-white backdrop-blur-md animate-duration-300 md:text-xl">
            {data.length > 0 && visible && (
              <div className="absolute flex w-full flex-col gap-1 rounded-lg bg-[#23583a] text-base text-green-100 backdrop-blur-md md:text-xl">
                {data.map((item, index) => (
                  <Link
                    href={`/tiempo/${encodeURIComponent(item.name.replace(/ /g, "_"))}?lat=${item.lat}&lon=${item.lon}&place=${item.name}`}
                    key={index}
                    className="z-30 cursor-pointer rounded-lg px-2 py-1 text-base hover:bg-slate-950/25"
                  >
                    {item.display_name}
                  </Link>
                ))}
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}
