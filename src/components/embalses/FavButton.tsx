"use client"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"

export default function FavButton({ url }: { url: { embalseid: string } }) {
  const embalseId = decodeURIComponent(url.embalseid.toString())
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(Cookies.get("favorites") || "[]")
    setIsFavorite(favorites.includes(embalseId))
  }, [embalseId])

  const toggleFavorite = () => {
    const favorites = JSON.parse(Cookies.get("favorites") || "[]")
    const updatedFavorites = isFavorite ? favorites.filter((id: string) => id !== embalseId) : [...favorites, embalseId]

    // Establecer la cookie para que expire en 10 años
    Cookies.set("favorites", JSON.stringify(updatedFavorites), { expires: 3650 }) // 3650 días ~ 10 años
    setIsFavorite(!isFavorite)
  }

  return (
    <button
      className={`fixed right-4 top-[5rem] z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#384948] bg-opacity-80 shadow-md transition-colors ${isFavorite ? "text-yellow-400" : "text-green-200"}`}
      onClick={toggleFavorite}
      aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill={isFavorite ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </button>
  )
}
