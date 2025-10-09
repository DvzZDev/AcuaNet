import { checkAndConsumeQuota, getRemainingSearches } from "@/db/actions"
import Fuse from "fuse.js"
import { useRouter } from "next/navigation"
import React, { useEffect, useMemo, useState } from "react"

const AutoCompleteHook = (data: { nombre: string; pais: string }[], closeMenu?: () => void, isMenuOpen?: boolean) => {
  const router = useRouter()
  const [type, setType] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [err, setErr] = useState(false)
  const [fine, setFine] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchData, setSearchData] = useState<{
    remaining: number
    daysUntilReset?: number
    unlimited?: boolean
  }>({ remaining: 0 })

  const fuse = useMemo(
    () =>
      new Fuse(data, {
        keys: ["nombre"],
        threshold: 0.4,
        includeScore: true,
        minMatchCharLength: 1,
      }),
    [data]
  )

  useEffect(() => {
    const fetchRemaining = async () => {
      setIsLoading(true)
      const result = await getRemainingSearches()
      if (result.success) {
        setSearchData({
          remaining: result.remaining ?? 0,
          daysUntilReset: result.daysUntilReset,
          unlimited: result.unlimited,
        })
      }
      setIsLoading(false)
    }
    void fetchRemaining()
  }, [])

  const errHandler = () => {
    setErr(true)
    setType("")
  }

  const handletype = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setType(inputValue)
    if (inputValue.trim()) {
      const searchResults = fuse
        .search(inputValue)
        .slice(0, 5)
        .map((result) => result.item.nombre)
      setSuggestions(searchResults)
    } else {
      setSuggestions([])
    }
  }

  const navigateToEmbalse = async (nombreEmbalse: string, pais: string) => {
    // Check if user can search
    if (!searchData.unlimited && searchData.remaining === 0) {
      setErr(true)
      setType("")
      setSuggestions([])
      return
    }

    // Consume quota
    const result = await checkAndConsumeQuota()
    if (!result.success) {
      setErr(true)
      setType("")
      setSuggestions([])
      return
    }

    // Update remaining searches
    if (result.success && "remaining" in result) {
      setSearchData((prev) => ({
        ...prev,
        remaining: result.remaining ?? prev.remaining,
      }))
    }

    // Navigate
    router.push(`/account/dashboard/${nombreEmbalse}${pais === "Portugal" ? "?pt=true" : ""}`)
    setFine(true)
    setErr(false)
    setSuggestions([])
    setType("")
    if (isMenuOpen && closeMenu) closeMenu()
  }

  const handleSuggestionClick = async (nombreEmbalse: string) => {
    const embalse = data.find((e) => e.nombre === nombreEmbalse)
    if (embalse) {
      await navigateToEmbalse(embalse.nombre, embalse.pais)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!type.trim()) return

    // Check if user can search
    if (!searchData.unlimited && searchData.remaining === 0) {
      setErr(true)
      setType("")
      setSuggestions([])
      return
    }

    // First try to find exact match
    const exactMatch = data.find((embalse) => embalse.nombre.toLowerCase() === type.toLowerCase().trim())

    if (exactMatch) {
      await navigateToEmbalse(exactMatch.nombre, exactMatch.pais)
    } else {
      // If no exact match, try fuzzy search and take the best result
      const searchResults = fuse.search(type)
      if (searchResults.length > 0 && searchResults[0].score && searchResults[0].score < 0.6) {
        const bestMatch = searchResults[0].item
        await navigateToEmbalse(bestMatch.nombre, bestMatch.pais)
      } else {
        errHandler()
        setFine(false)
        setSuggestions([])
      }
    }
  }

  return {
    fine,
    type,
    suggestions,
    err,
    setErr,
    handletype,
    handleSuggestionClick,
    handleSubmit,
    searchData,
    isLoading,
  }
}

export default AutoCompleteHook
