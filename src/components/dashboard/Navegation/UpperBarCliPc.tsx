"use client"
import AutoCompleteHook from "@/hooks/AutoComplete"
import nombreEmbalses from "@/lib/nombresEmbalses.json"
import { Search02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export default function UpperBarCliPc() {
  const [active, setActive] = useState(false)
  const { type, suggestions, err, handletype, handleSuggestionClick } = AutoCompleteHook(nombreEmbalses)

  const showSuggestions = active && suggestions.length > 0

  return (
    <div className="flex items-center">
      <motion.div
        animate={{
          height: showSuggestions ? "auto" : "auto",
        }}
        className="relative ml-6 w-[25rem]"
      >
        <div className="flex items-center gap-3 rounded-full border border-emerald-200 bg-white p-2">
          <HugeiconsIcon icon={Search02Icon} />
          <input
            placeholder="Buscar embalse..."
            value={type}
            onChange={handletype}
            onFocus={() => setActive(true)}
            onBlur={() => setTimeout(() => setActive(false), 200)}
            className="h-fit w-full focus:ring-0 focus:outline-none active:ring-0 active:outline-none"
          />
        </div>

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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: index * 0.05,
                  }}
                  layout
                  onClick={() => {
                    handleSuggestionClick(suggestion)
                    setActive(false)
                  }}
                  className="cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-emerald-50"
                >
                  {suggestion}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {err && <div className="mt-1 text-sm text-red-500">{err}</div>}
    </div>
  )
}
