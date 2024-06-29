'use client'
import { useState } from 'react'
import { ReactTyped } from 'react-typed'
import { useRouter } from 'next/navigation'
function Type({ data }) {
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
    router.push(`embalses/${nombreEmbalse.toLowerCase()}`)
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const embalseFound = data.some(
            (embalse) => embalse.nombre_embalse.toLowerCase() === type.toLowerCase()
          )
          if (embalseFound) {
            router.push(`embalses/${type.toLowerCase()}`)
          } else {
            errHandler()
          }
        }}
        className="z-10 mt-8 flex max-h-16 w-[17rem] justify-between rounded-xl border-2 border-solid border-slate-400 p-1 text-sm transition-all focus-within:border-slate-300 sm:w-[20rem] sm:text-base md:w-[25rem] md:text-base"
      >
        <ReactTyped
          strings={['Orellana', 'Tajo', 'Ebro', 'San Juan', 'Guadalquivir', 'etc...']}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            className="w-[210px] text-textprimary bg-transparent text-[18px] placeholder-slate-400 placeholder-opacity-40 focus:outline-none sm:w-[250px] md:w-[330px]"
            type="text"
            onChange={typeHandler}
            value={type}
          />
        </ReactTyped>
        <button
          className="text-slate-400"
          type="submit"
        >
          Buscar
        </button>
      </form>
      <h1 className={`animate-jump pl-1 text-red-500 ${err ? 'flex' : 'hidden'}`}>
        Embalse no encontrado
      </h1>
      <div className="relative">
        {suggestions.length > 0 && (
          <ul className="absolute mt-5 flex w-full animate-fade-down flex-col gap-2 rounded-lg bg-[#070922] text-textprimary animate-duration-300 animate-ease-in-out">
            {suggestions.slice(0, 5).map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion.nombre_embalse)}
                className="cursor-pointer px-2 py-1 transition-all hover:bg-slate-950 hover:bg-opacity-25"
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

export default Type
