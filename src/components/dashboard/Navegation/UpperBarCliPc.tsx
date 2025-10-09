"use client"
import AutoCompleteHook from "@/hooks/AutoComplete"
import nombreEmbalses from "@/lib/nombresEmbalses.json"
import useModalStore from "@/store/useModalStore"
import { ChatSearchIcon, Rocket01Icon, Search02Icon, TimeQuarterPassIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export default function UpperBarCliPc() {
  const [active, setActive] = useState(false)
  const { type, suggestions, err, handletype, handleSuggestionClick, handleSubmit, searchData, isLoading } =
    AutoCompleteHook(nombreEmbalses)
  const { openModal } = useModalStore()

  const showSuggestions = active && suggestions.length > 0

  return (
    <div className="flex w-full items-center gap-4">
      <motion.div
        animate={{
          height: showSuggestions ? "auto" : "auto",
        }}
        className="relative ml-6 w-[25rem]"
      >
        <form onSubmit={(e) => void handleSubmit(e)}>
          <div className="flex items-center gap-3 rounded-full border border-emerald-200 bg-white p-2">
            <HugeiconsIcon icon={Search02Icon} />
            <input
              placeholder="Buscar embalse..."
              value={type}
              onChange={handletype}
              onFocus={() => setActive(true)}
              onBlur={() => setTimeout(() => setActive(false), 200)}
              className="h-fit w-full focus:ring-0 focus:outline-none active:ring-0 active:outline-none"
              disabled={!searchData.unlimited && searchData.remaining === 0}
            />
          </div>
        </form>

        <AnimatePresence>
          {showSuggestions && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              layout
              className="absolute top-full left-0 z-30 mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-emerald-200 bg-white shadow-lg"
            >
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    void handleSuggestionClick(suggestion)
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                    }}
                    layout
                    className="cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-emerald-50"
                  >
                    {suggestion}
                  </motion.div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Search Info & Upgrade Button */}
      {!searchData.unlimited && (
        <div className="flex w-full items-center gap-3">
          <div className="flex flex-col gap-1 rounded-2xl border border-emerald-200 bg-white px-2 py-1">
            {isLoading ? (
              <div className="flex items-center gap-1.5"></div>
            ) : (
              <>
                <div className="flex items-center gap-1.5 not-first:px-3">
                  <HugeiconsIcon
                    icon={ChatSearchIcon}
                    size={18}
                    color="#022c22"
                    strokeWidth={1.5}
                  />
                  <span
                    className={`text-xs font-semibold ${
                      searchData.remaining === 0
                        ? "text-red-700"
                        : searchData.remaining <= 2
                          ? "text-yellow-700"
                          : "text-emerald-700"
                    }`}
                  >
                    {searchData.remaining === 0 ? "Sin búsquedas" : `${searchData.remaining} búsquedas`}
                  </span>
                </div>
                {searchData.daysUntilReset !== undefined && (
                  <div className="flex items-center gap-1.5">
                    <HugeiconsIcon
                      icon={TimeQuarterPassIcon}
                      size={18}
                      color="#022c22"
                      strokeWidth={1.5}
                    />
                    <span className="text-xs font-semibold text-emerald-700">
                      Reinicio: {searchData.daysUntilReset} {searchData.daysUntilReset === 1 ? "día" : "días"}
                    </span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Upgrade Button - Solo visible cuando no hay búsquedas */}
          {searchData.remaining === 0 && (
            <button
              onClick={() => openModal("searchLimit", { daysUntilReset: searchData.daysUntilReset })}
              className="relative cursor-pointer hover:scale-105 transition-all mr-4 ml-auto flex items-center gap-2 overflow-hidden rounded-xl bg-emerald-950 px-4 py-2 text-sm font-semibold text-white shadow-md active:scale-95"
            >
              <div className="absolute top-0 -left-3 h-[2.3rem] w-[3rem]  bg-emerald-300 blur-[1.5rem]" />
              <HugeiconsIcon
                icon={Rocket01Icon}
                size={18}
                color="#ecfdf5 "
              />
              <span className="text-xs text-emerald-100">Mejora tu plan</span>
            </button>
          )}
        </div>
      )}

      {err && (
        <div className="mt-1 text-sm text-red-500">
          {!searchData.unlimited && searchData.remaining === 0
            ? "Has alcanzado el límite de búsquedas"
            : "No se encontró el embalse"}
        </div>
      )}
    </div>
  )
}
