import React, { useState } from "react"
import { useRouter } from "next/navigation"

const AutoCompleteHook = (data: string[], closeMenu?: () => void, isMenuOpen?: boolean) => {
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
      const filteredSuggestions = data.filter((embalse) => embalse.toLowerCase().includes(inputValue.toLowerCase()))
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
    const selectedEmbalse = data.find((embalse) => embalse.toLowerCase() === type.toLowerCase())
    if (selectedEmbalse) {
      router.push(`/embalses/${type.toLowerCase()}`)
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
    handletype,
    handleSuggestionClick,
    handleSubmit,
  }
}

export default AutoCompleteHook
