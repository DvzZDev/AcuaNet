'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function SearchMov({ data, closeMenu }) {
  const router = useRouter()
  const [type, setType] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [err, setErr] = useState(false)

  const errHandler = () => {
    setErr(true)
    setType('')
  }

  const typeHandler = (e) => {
    const inputValue = e.target.value
    setType(inputValue)
    if (inputValue) {
      const filteredSuggestions = data.filter((embalse) =>
        embalse.nombre_embalse.toLowerCase().startsWith(inputValue.toLowerCase())
      )
      setSuggestions(filteredSuggestions)
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (nombreEmbalse) => {
    setType(nombreEmbalse)
    setSuggestions([])
    router.push(`/embalses/${nombreEmbalse.toLowerCase()}`)
    closeMenu()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedEmbalse = data.find(
      (embalse) => embalse.nombre_embalse.toLowerCase() === type.toLowerCase()
    )
    if (selectedEmbalse) {
      router.push(`/embalses/${type.toLowerCase()}`)
      closeMenu()
    } else {
      errHandler()
    }
  }

  return (
    <div className="z-20">
      <form
        className="relative w-[16rem]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder={err ? 'No Encontrado' : 'Buscador'}
          value={type}
          onChange={(e) => {
            setType(e.target.value)
            setErr(false)
            typeHandler(e)
          }}
          className={`mx-4 w-[15rem] rounded-md bg-slate-900 bg-opacity-70 p-1 pr-10 outline-none transition-all placeholder:text-textprimary placeholder:opacity-60 focus:bg-slate-900 focus:bg-opacity-100 focus:outline-none focus:ring-2 ${err ? 'placeholder:text-red-500 focus:ring-red-500' : 'focus:ring-blue-300 focus:ring-opacity-50'}`}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full rounded-md bg-transparent bg-opacity-70 px-2"
        >
          <svg
            fill="#c0bfb7"
            enable-background="new 0 0 32 32"
            height={17}
            width={20}
            viewBox="4 4 24 24"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
            ></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14 s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0 C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                id="XMLID_223_"
              ></path>
            </g>
          </svg>
        </button>
      </form>

      <div className="">
        {suggestions.length > 0 && (
          <ul className="left-0 mx-4 mt-5 flex w-[15rem] animate-fade-down flex-col gap-2 rounded-lg bg-[#070922] p-4 text-[1rem] text-textprimary animate-delay-0 animate-duration-300 animate-ease-in-out">
            {suggestions.slice(0, 5).map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion.nombre_embalse)}
                className="cursor-pointer hover:bg-slate-950 hover:bg-opacity-25"
              >
                {suggestion.nombre_embalse}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SearchMov
