import React, { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import Fuse from "fuse.js"

const AutoCompleteHook = (data: { nombre: string; pais: string }[], closeMenu?: () => void, isMenuOpen?: boolean) => {
  const router = useRouter()
  const [type, setType] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [err, setErr] = useState(false)
  const [fine, setFine] = useState(false)

  // Initialize Fuse.js with configuration
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

  const handleSuggestionClick = (nombreEmbalse: string) => {
    setType(nombreEmbalse)
    setSuggestions([])
    setSuggestions([])
    setFine(true)
    setType("")
    if (isMenuOpen && closeMenu) closeMenu()
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!type.trim()) return

    // First try to find exact match
    const exactMatch = data.find((embalse) => embalse.nombre.toLowerCase() === type.toLowerCase().trim())

    if (exactMatch) {
      router.push(
        `/embalse/${exactMatch.nombre.replace(/ /g, "-").toLowerCase()}${exactMatch.pais === "Portugal" ? "?pt=true" : ""}`
      )
      setFine(true)
      setErr(false)
      setSuggestions([])
      setType("")
      if (isMenuOpen && closeMenu) closeMenu()
    } else {
      // If no exact match, try fuzzy search and take the best result
      const searchResults = fuse.search(type)
      if (searchResults.length > 0 && searchResults[0].score && searchResults[0].score < 0.6) {
        const bestMatch = searchResults[0].item
        router.push(
          `/embalse/${bestMatch.nombre.replace(/ /g, "-").toLowerCase()}${bestMatch.pais === "Portugal" ? "?pt=true" : ""}`
        )
        setFine(true)
        setErr(false)
        setSuggestions([])
        setType("")
        if (isMenuOpen && closeMenu) closeMenu()
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
  }
}

export default AutoCompleteHook
