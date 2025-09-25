"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createSvClient } from "@/db/server"

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
