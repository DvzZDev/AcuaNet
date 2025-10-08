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
      next: { revalidate: 300 }, // Cache 5 minutos
    })

    if (!response.ok) {
      if (response.status === 404) {
        // Usuario no existe en RevenueCat
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
