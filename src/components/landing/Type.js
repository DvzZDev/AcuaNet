'use client'
import { ReactTyped } from 'react-typed'
import AutoCompleteHook from '@/hooks/AutoComplete'

function Type({ data }) {
  const { type, suggestions, err, handletype, handleSuggestionClick, handleSubmit } =
    AutoCompleteHook(data)

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="z-10 mt-8 flex max-h-16 w-[17rem] justify-between rounded-xl border-2 border-solid border-slate-400 p-1 text-sm transition-all focus-within:border-slate-300 sm:w-[20rem] sm:text-base md:w-[25rem] md:text-xl"
      >
        <ReactTyped
          strings={['Orellana', 'Cijara', 'San Juan', 'Alcantara', 'etc...']}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            className="w-[210px] bg-transparent text-[22px] text-textprimary placeholder-slate-400 placeholder-opacity-40 focus:outline-none sm:w-[250px] md:w-[330px]"
            type="text"
            value={type}
            onChange={handletype}
          />
        </ReactTyped>
        <button
          aria-label="Buscar"
          className="text-slate-400"
          type="button"
        >
          Buscar
        </button>
      </form>
      <h1 className={`animate-jump pl-1 text-red-500 ${err ? 'flex' : 'hidden'}`}>
        Embalse no encontrado
      </h1>
      <div className="relative z-20">
        {suggestions.length > 0 && (
          <ul className="absolute mt-5 flex w-full animate-fade-down flex-col gap-2 rounded-lg bg-bgcolor text-textprimary animate-duration-300 animate-ease-in-out">
            {suggestions.slice(0, 5).map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="cursor-pointer px-2 py-1 transition-all hover:bg-slate-950 hover:bg-opacity-25"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Type
