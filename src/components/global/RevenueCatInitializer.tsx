"use client"

import { useUserData } from "@/hooks/useUserData"
import { InitRevenueCat } from "@/revenewcat/index"
import { useEffect, useState } from "react"

export function RevenueCatInitializer() {
  const [mounted, setMounted] = useState(false)
  const { data: userData, isLoading } = useUserData()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || isLoading) return

    // Si hay usuario autenticado, usar su ID, si no, usar el ID anónimo por defecto
    const userId = userData?.id

    InitRevenueCat(userId).catch((error: unknown) => {
      console.error("Failed to initialize RevenueCat:", error)
    })
  }, [mounted, userData, isLoading])

  return null
}
