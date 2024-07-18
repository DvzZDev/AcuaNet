'use client'
import { ReactTyped } from 'react-typed'
import AutoCompleteHook from '@/hooks/AutoComplete'
import { motion } from 'framer-motion'

function Type({ data }) {
  const { type, suggestions, err, handletype, handleSuggestionClick, handleSubmit } =
    AutoCompleteHook(data)

  const variants = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 120 },
    },
  }

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
          className="text-slate-400 transition-all hover:text-textsecondary"
          type="button"
        >
          <p>Buscar</p>
        </button>
      </form>
      <h1
        className={`pl-1 text-red-500 transition-all ${err ? 'flex animate-fade' : 'hidden'}`}
      >
        Embalse no encontrado
      </h1>
      <div className="relative">
        {suggestions.length > 0 && (
          <motion.ul
            initial="initial"
            animate="animate"
            variants={variants}
            className="absolute mt-5 flex w-full flex-col gap-1 rounded-lg bg-bgcolor text-xl text-textprimary"
          >
            {suggestions.slice(0, 5).map((suggestion, index) => (
              <motion.li
                initial="initial"
                animate="animate"
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { duration: 0.5 },
                  },
                }}
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="z-30 cursor-pointer px-2 py-1 hover:bg-slate-950 hover:bg-opacity-25"
              >
                {suggestion}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  )
}

export default Type
