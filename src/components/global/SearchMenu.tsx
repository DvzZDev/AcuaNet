"use client"

import { ReactTyped } from "react-typed"
import AutoCompleteHook from "@/hooks/AutoComplete"
import { Link } from "next-view-transitions"
import nombreEmbalses from "@/lib/nombresEmbalses.json"
import useMenuStore from "@/store/useMenuStore"
import { FlagSelector } from "../landing/SearchEmb"

const data = nombreEmbalses

export default function SearchMenu() {
  const { type, suggestions, err, handletype, handleSuggestionClick, handleSubmit } = AutoCompleteHook(data)
  const { closeMenu } = useMenuStore()

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e)
          closeMenu()
        }}
        className="relative z-10 flex h-[2.3rem] max-h-16 w-[15rem] items-center rounded-full border border-solid border-green-100/40 bg-green-100/20 p-1 transition-all focus-within:border-green-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
          strings={["Búsqueda rápida..."]}
          typeSpeed={70}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            className="ml-8 w-fit bg-transparent text-[16px] text-green-100 placeholder-green-100/70 focus:outline-hidden sm:text-[14px] md:w-[21rem]"
            type="text"
            value={type}
            onChange={handletype}
          />
        </ReactTyped>
        <button
          aria-label="Buscar"
          className="hover:text-textsecondary absolute right-2 text-slate-400 transition-all focus:outline-hidden active:scale-75"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#dbfbe6"
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

      <h1 className={`animate-fade-in-up pl-1 text-xs text-red-500 transition-all ${err ? "animate-fade flex" : "hidden"}`}>
        Embalse no encontrado
      </h1>
      <div className="relative z-50">
        {suggestions.length > 0 && (
          <ul className="animate-fade-in-down bg-opacity-100 animate-duration-300 absolute mt-5 flex w-full flex-col gap-1 rounded-lg bg-[#275e56] text-green-100">
            {suggestions.slice(0, 5).map((suggestion, index) => (
              <Link
                href={`/embalses/${suggestion.replace(/ /g, "-").toLowerCase()}${FlagSelector(suggestion) === "Portugal" ? "?pt=true" : ""}`}
                key={index}
              >
                <li
                  key={index}
                  onClick={() => {
                    handleSuggestionClick(suggestion)
                    closeMenu()
                  }}
                  className="z-30 flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1 text-sm hover:bg-slate-950/25"
                >
                  <img
                    alt="Flag"
                    src={FlagSelector(suggestion) === "España" ? "/es.webp" : "/pt.webp"}
                    className="h-[1.2rem] w-[1.2rem] overflow-hidden rounded-xl"
                  />
                  {suggestion}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
