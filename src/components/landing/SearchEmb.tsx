"use client"
import { ReactTyped } from "react-typed"
import AutoCompleteHook from "@/hooks/AutoComplete"
import { Link } from "next-view-transitions"
import nombreEmbalses from "@/lib/nombresEmbalses.json"
import { Bounce, toast } from "react-toastify"
import { useEffect } from "react"

const data = nombreEmbalses

export function FlagSelector(embalse: string) {
  const result = nombreEmbalses.find((e) => e.nombre === embalse)
  return result ? result.pais : "error"
}

export default function SearchEmb() {
  const { type, suggestions, err, handletype, setErr, handleSuggestionClick, handleSubmit } = AutoCompleteHook(data)

  useEffect(() => {
    if (err) {
      toast.error("No se encontro el embalse", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: "light",
        transition: Bounce,
      })
      setErr(false)
    }
  }, [setErr, err])

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex h-[2.5rem] max-h-16 w-[19rem] items-center rounded-full border border-solid border-green-100/40 bg-emerald-200/15 p-1 text-sm transition-all focus-within:border-green-200 sm:w-[20rem] sm:text-base md:h-[3rem] md:w-[30rem] md:text-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          className="stroke absolute top-1/2 left-1 -translate-y-1/2 transform stroke-green-100"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z" />
        </svg>
        <ReactTyped
          strings={["Buscar embalse..."]}
          typeSpeed={70}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            className="placeholder-opacity-60 ml-8 w-fit bg-transparent text-[16px] font-normal text-green-100 placeholder-green-100/80 placeholder:font-light focus:outline-hidden sm:text-[18px] md:w-[21rem]"
            type="text"
            value={type}
            onChange={handletype}
          />
        </ReactTyped>
        <button
          aria-label="Buscar"
          className="absolute right-2 text-slate-400 transition-all group-hover:scale-105 focus:outline-hidden active:scale-75"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#dbfbe6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-green-300 hover:stroke-green-300"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </button>
      </form>

      <div className="relative z-50">
        {suggestions.length > 0 && (
          <ul className="animate-blurred-fade-in animate-duration-300 absolute mt-2 flex w-full flex-col gap-1 rounded-lg bg-teal-800 text-base text-green-100 md:text-xl">
            {suggestions.slice(0, 5).map((suggestion, index) => (
              <Link
                href={`/embalse/${suggestion.replace(/ /g, "-").toLowerCase()}${FlagSelector(suggestion) === "Portugal" ? "?pt=true" : ""}`}
                key={index}
              >
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="z-30 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 text-sm hover:bg-teal-900 lg:text-base"
                >
                  <img
                    alt="Flag"
                    src={FlagSelector(suggestion) === "España" ? "/es.webp" : "/pt.webp"}
                    className="h-[1.3rem] w-[1.3rem] overflow-hidden rounded-xl"
                  />
                  <span>{suggestion}</span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
