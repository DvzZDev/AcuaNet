"use client"

import { useState } from "react"

export default function WeatherInput() {
  const [type, setType] = useState("")
  const [data, setData] = useState<any[]>([])
  const [coordinates, setCoordinates] = useState<{ lat: string; lon: string } | null>(
    null
  )

  console.log(coordinates)
  const [visible, setVisible] = useState(false)

  const handleVisible = () => {
    setVisible(!visible)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value)
  }

  const onSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const url = `https://nominatim.openstreetmap.org/search.php?q=${type}&format=jsonv2`

    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error("Error en la respuesta de la API")
      }
      const data = await res.json()
      handleVisible()
      setData(data)
    } catch (error) {
      console.error("Error al buscar coordenadas:", error)
    }
  }

  console.log(data)

  const handleSuggestionClick = (lat: string, lon: string) => {
    setCoordinates({ lat, lon })
    handleVisible()
  }

  return (
    <div className="mb-[15rem] flex items-center justify-center">
      <form
        onSubmit={onSearch}
        className="h-fit w-fit text-white"
      >
        <input
          value={type}
          onChange={handleChange}
          placeholder="Buscar ubicación"
        />
        <button type="submit">Buscar</button>
        {data.length > 0 && visible && (
          <div className="suggestions mt-2 rounded bg-[#121754] text-white shadow-lg flex flex-col">
            {data.map((item, index) => (
              <a
                href={`/tiempo/${encodeURIComponent(item.name.replace(/ /g, "_"))}?lat=${item.lat}&lon=${item.lon}&place=${item.name}`}
                onClick={() => handleSuggestionClick(item.lat, item.lon)}
                key={index}
                className="cursor-pointer"
              >
                {item.display_name}
              </a>
            ))}
          </div>
        )}
      </form>
    </div>
  )
}
