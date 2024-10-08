"use client"

import AutoCompleteHook from "@/hooks/AutoComplete"
import { motion } from "framer-motion"

function SearchMov({
  data,
  closeMenu,
  isMenuOpen,
}: {
  data: string[]
  closeMenu: () => void
  isMenuOpen: boolean
}) {
  const {
    type,
    suggestions,
    err,
    fine,
    handletype,
    handleSuggestionClick,
    handleSubmit,
  } = AutoCompleteHook(data, closeMenu, isMenuOpen)

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
        className="relative ml-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder={err ? "No Encontrado" : "Buscador"}
          value={type}
          onChange={handletype}
          className={`text-textprim h-8 w-[16rem] rounded-sm border-b bg-transparent bg-opacity-70 pl-7 pr-10 outline-none placeholder:opacity-60 focus:bg-slate-900 focus:bg-opacity-30 focus:outline-none ${err ? "border-red-500 placeholder:text-red-500" : ""} ${fine ? "border-green-500 placeholder:text-green-500" : ""}`}
        />
        <button
          type="button"
          aria-label="Buscar"
          className="absolute left-0 top-0 h-full rounded-md bg-transparent bg-opacity-70 px-1"
        >
          <svg
            fill={err ? "#EF4444" : fine ? "#10B981" : "#6B7280"}
            enableBackground="new 0 0 32 32"
            height={17}
            width={20}
            viewBox="4 4 24 24"
            className="transition-all"
          >
            <g
              id="SVGRepo_bgCarrier"
              strokeWidth="0"
            ></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
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

      <div className="absolute z-50 ml-3 text-xl">
        {suggestions.length > 0 && (
          <motion.ul
            initial="initial"
            animate="animate"
            variants={variants}
            className="mt-5 flex w-[16rem] flex-col gap-2 rounded-lg bg-bgcolor p-4 text-textprimary"
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
                className="cursor-pointer hover:bg-slate-950 hover:bg-opacity-25"
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

export default SearchMov
