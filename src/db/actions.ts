"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createSvClient } from "@/db/server"
import { getSubscriptionType } from "@/lib/subhelper"
import { RevenueCatResponse, SubscriptionType } from "@/types"
import { cache } from "react"
import { getUserId } from "./queriesServer/select"

export async function login(credentials: { email: string; password: string }) {
  const supabase = await createSvClient()

  const { error } = await supabase.auth.signInWithPassword(credentials)

  if (error) {
    return { error: error.message }
  }

  revalidatePath("/", "layout")
  redirect("/account/dashboard")
}

export async function signup(credentials: { email: string; password: string }) {
  const supabase = await createSvClient()

  const { error } = await supabase.auth.signUp(credentials)

  if (error) {
    return { error: error.message }
  }

  revalidatePath("/", "layout")
  redirect("/account/dashboard")
}

export async function logout() {
  const supabase = await createSvClient()

  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error("Error signing out:", error)
    return { error: error.message }
  }
  redirect("/")
}

export async function signInWithGoogle() {
  const supabase = await createSvClient()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
  const redirectTo = `${siteUrl.replace(/\/$/, "")}/auth/callback`

  const { data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo,
    },
  })

  redirect(data?.url || "/")
}

export const checkSubscription = cache(async (): Promise<SubscriptionType> => {
  try {
    const userId = await getUserId()

    if (!userId) {
      return "free"
    }

    const response = await fetch(`https://api.revenuecat.com/v1/subscribers/${userId}`, {
      headers: {
        Authorization: `Bearer ${process.env.REVENEWCAT_API_KEY}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      if (response.status === 404) {
        return "free"
      }
      throw new Error(`RevenueCat API error: ${response.status}`)
    }

    const data: RevenueCatResponse = await response.json()

    return getSubscriptionType(data)
  } catch (error) {
    console.error("Error checking subscription:", error)
    return "free"
  }
})

export async function getRemainingSearches() {
  const supabase = await createSvClient()
  const userId = await getUserId()

  if (!userId) {
    return {
      success: false,
      error: "No autenticado",
      remaining: 0,
    }
  }

  // Usar checkSubscription en lugar de verificar en profiles
  const subscriptionType = await checkSubscription()

  // Si es premium o lifetime, retornar unlimited
  if (subscriptionType !== "free") {
    return { success: true, unlimited: true }
  }

  // Si es free, obtener búsquedas restantes
  const FREE_LIMIT = 5
  const { data: searchData, error: searchError } = await supabase.rpc("get_remaining_searches", {
    uid: userId,
    free_limit: FREE_LIMIT,
  })

  if (searchError) {
    console.error("Error fetching remaining searches:", searchError)
    return {
      success: false,
      error: "Error al verificar búsquedas restantes",
      remaining: 0,
    }
  }

  // La RPC devuelve un array con un objeto, o puede devolver directamente el objeto
  const result = Array.isArray(searchData) ? searchData[0] : searchData

  return {
    success: true,
    remaining: result?.remaining_searches ?? 0,
    daysUntilReset: result?.days_until_reset ?? 0,
  }
}

export async function checkAndConsumeQuota() {
  const supabase = await createSvClient()
  const userId = await getUserId()

  if (!userId) {
    return {
      success: false,
      error: "No autenticado",
    }
  }

  const subscriptionType = await checkSubscription()

  if (subscriptionType !== "free") {
    return { success: true, unlimited: true }
  }

  const remainingCheck = await getRemainingSearches()

  if (!remainingCheck.success) {
    return remainingCheck
  }

  if (remainingCheck.remaining === 0) {
    return {
      success: false,
      error: "Has alcanzado el límite de búsquedas",
      quotaExceeded: true,
      remaining: 0,
      daysUntilReset: remainingCheck.daysUntilReset,
    }
  }

  const FREE_LIMIT = 5
  const { error: quotaError } = await supabase.rpc("use_search", {
    uid: userId,
    free_limit: FREE_LIMIT,
  })

  if (quotaError) {
    return {
      success: false,
      error: quotaError.message || "Has alcanzado el límite de búsquedas",
      quotaExceeded: true,
      remaining: 0,
      daysUntilReset: remainingCheck.daysUntilReset,
    }
  }

  const updatedRemaining = Math.max(0, remainingCheck.remaining - 1)

  return {
    success: true,
    remaining: updatedRemaining,
  }
}
