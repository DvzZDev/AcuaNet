"use client"
import { ReactTyped } from "react-typed"
import AutoCompleteHook from "@/hooks/AutoComplete"
import { motion } from "framer-motion"

interface TypeProps {
  data: string[]
}

export default function SerchEmb({ data }: TypeProps) {
  const { type, suggestions, err, handletype, handleSuggestionClick, handleSubmit } =
    AutoCompleteHook(data)

  const variants = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 120 },
    },
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="relative z-10 mt-8 flex max-h-16 w-[15rem] items-center justify-center rounded-2xl border border-solid border-green-100 bg-[#3f7b7648] p-1 text-sm backdrop-blur-2xl transition-all focus-within:border-green-200 sm:w-[20rem] sm:text-base md:w-[20rem] md:text-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="stroke absolute left-1 top-1/2 -translate-y-1/2 transform stroke-green-100"
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
            className="ml-8 w-full bg-transparent text-[16px] text-green-100 placeholder-green-200 placeholder-opacity-80 focus:outline-none sm:text-[18px]"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#09f"
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
        </button>
      </form>

      <h1
        className={`pl-1 text-red-500 transition-all ${err ? "animate-fade flex" : "hidden"}`}
      >
        Embalse no encontrado
      </h1>
      <div className="relative z-50">
        {suggestions.length > 0 && (
          <motion.ul
            initial="initial"
            animate="animate"
            variants={variants}
            className="absolute mt-5 flex w-full flex-col gap-1 rounded-lg bg-slate-600 bg-opacity-75 text-base text-gray-200 backdrop-blur-md md:text-xl"
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
                className="z-30 cursor-pointer px-2 py-1 text-base hover:bg-slate-950 hover:bg-opacity-25"
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
