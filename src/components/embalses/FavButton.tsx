"use client"
import { createClient } from "@/db/client"
import { useUserData } from "@/hooks/useUserData"
import { FavouriteIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "motion/react"
import { useState } from "react"
import { toast } from "react-toastify"

interface FavButtonProps {
  embalseid: string
  pais: string
  initialFavorites: any[]
  userId: string | null
}

export default function FavButton({ embalseid, pais, initialFavorites, userId }: FavButtonProps) {
  const embalseId = decodeURIComponent(embalseid)
  const userData = useUserData()
  const supabase = createClient()

  const isInitiallyFavorite = initialFavorites.some(
    (fav: any) => (typeof fav === "string" && fav === embalseId) || (typeof fav === "object" && fav.embalse === embalseId)
  )

  const [isFavourite, setIsFavourite] = useState(isInitiallyFavorite)
  const [isAnimating, setIsAnimating] = useState(false)

  const toggleFav = async () => {
    const currentUserId = userId || userData.data?.sub
    if (!currentUserId) {
      toast.error("Debes iniciar sesión para añadir favoritos", {
        position: "top-right",
        autoClose: 3000,
      })
      return
    }

    setIsAnimating(true)

    const { data: currentData, error: fetchError } = await supabase
      .from("favorite_reservoirs")
      .select("favorites")
      .eq("user_id", currentUserId)
      .single()

    let updatedFavorites = []

    if (!fetchError && currentData && Array.isArray(currentData.favorites)) {
      if (isFavourite) {
        updatedFavorites = currentData.favorites.filter((fav: any) => {
          if (typeof fav === "string") {
            return fav !== embalseId
          } else if (typeof fav === "object" && fav.embalse) {
            return fav.embalse !== embalseId
          }
          return true
        })
      } else {
        const newFavorite = {
          embalse: embalseId,
          pais,
          fechaAñadido: new Date().toISOString(),
        }
        updatedFavorites = [...currentData.favorites, newFavorite]

        const uniqueFavorites = []
        const seenEmbalses = new Set()

        for (const fav of updatedFavorites) {
          const embalseKey = typeof fav === "string" ? fav : fav.embalse
          if (!seenEmbalses.has(embalseKey)) {
            seenEmbalses.add(embalseKey)
            if (typeof fav === "string") {
              uniqueFavorites.push({
                embalse: fav,
                pais: "N/D",
                fechaAñadido: new Date().toISOString(),
              })
            } else {
              uniqueFavorites.push(fav)
            }
          }
        }

        updatedFavorites = uniqueFavorites
      }
    } else {
      if (!isFavourite) {
        updatedFavorites = [
          {
            embalse: embalseId,
            pais,
            fechaAñadido: new Date().toISOString(),
          },
        ]
      }
    }

    const { error } = await supabase.from("favorite_reservoirs").upsert([
      {
        user_id: currentUserId,
        favorites: updatedFavorites,
      },
    ])

    if (error) {
      console.error("Error updating favourites:", error)
      toast.error("Ha sucedido un error al actualizar los favoritos, si el error persiste, contacta con soporte.", {
        position: "top-right",
        autoClose: 3000,
      })
      setIsAnimating(false)
    } else {
      setIsFavourite(!isFavourite)
      toast.success(!isFavourite ? "Se ha añadido el embalse a favoritos." : "Se ha eliminado el embalse de favoritos.", {
        position: "top-right",
        autoClose: 3000,
      })
      setTimeout(() => setIsAnimating(false), 600)
    }
  }

  const handleToggleFav = () => {
    void toggleFav()
  }

  return (
    <motion.button
      className="z-40 ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 shadow-lg"
      onClick={handleToggleFav}
      aria-label={isFavourite ? "Quitar de favoritos" : "Añadir a favoritos"}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        animate={
          isAnimating
            ? {
                scale: [1, 1.3, 1],
                rotate: isFavourite ? [0, -15, 15, -15, 0] : [0, 0, 0],
              }
            : {}
        }
        transition={{ duration: 0.6 }}
      >
        <HugeiconsIcon
          icon={FavouriteIcon}
          size={28}
          strokeWidth={2}
          fill={isFavourite ? "#ef4444" : "transparent"}
          color={isFavourite ? "#ef4444" : "#047857"}
        />
      </motion.div>

      {/* Efecto de partículas al añadir a favoritos */}
      {isAnimating && !isFavourite && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-red-400"
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 6) * 30,
                y: Math.sin((i * Math.PI * 2) / 6) * 30,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}
    </motion.button>
  )
}
