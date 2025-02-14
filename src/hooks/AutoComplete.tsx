import React, { useState } from "react"
import { useRouter } from "next/navigation"

const AutoCompleteHook = (data: { nombre: string; pais: string }[], closeMenu?: () => void, isMenuOpen?: boolean) => {
  const router = useRouter()
  const [type, setType] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [err, setErr] = useState(false)
  const [fine, setFine] = useState(false)
  const errHandler = () => {
    setErr(true)
    setType("")
  }

  const handletype = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setType(inputValue)
    if (inputValue) {
      const filteredSuggestions = data
        .filter((embalse) => embalse.nombre.toLowerCase().includes(inputValue.toLowerCase()))
        .map((embalse) => embalse.nombre)
      setSuggestions(filteredSuggestions)
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
    const selectedEmbalse = data.find((embalse) => embalse.nombre.toLowerCase() === type.toLowerCase())
    if (selectedEmbalse) {
      router.push(`/embalses/${selectedEmbalse.nombre.replace(/ /g, "-").toLowerCase()}`)
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
