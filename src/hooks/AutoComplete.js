import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { set } from 'react-hook-form'

const AutoCompleteHook = (data, closeMenu, isMenuOpen) => {
  const router = useRouter()
  const [type, setType] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [err, setErr] = useState(false)
  const [fine, setFine] = useState(false)
  const errHandler = () => {
    setErr(true)
    setType('')
  }

  const handletype = (e) => {
    const inputValue = e.target.value
    setType(inputValue)
    if (inputValue) {
      const filteredSuggestions = data.filter((embalse) =>
        embalse.toLowerCase().startsWith(inputValue.toLowerCase())
      )
      setSuggestions(filteredSuggestions)
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (nombreEmbalse) => {
    setType(nombreEmbalse)
    setSuggestions([])
    router.push(`/embalses/${nombreEmbalse.toLowerCase()}`)
    setSuggestions([])
    setFine(true)
    setType('')
    if (isMenuOpen) closeMenu()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const selectedEmbalse = data.find(
      (embalse) => embalse.toLowerCase() === type.toLowerCase()
    )
    if (selectedEmbalse) {
      router.push(`/embalses/${type.toLowerCase()}`)
      setFine(true)
      setErr(false)
      setSuggestions([])
      setType('')
      if (isMenuOpen) closeMenu()
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
