"use client"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { ViewTransitions } from "next-view-transitions"
import dotenv from "dotenv"

const ModalCookies = dynamic(() => import("@/components/landing/ModalCookies"), { ssr: false })

dotenv.config()

import { cookieConsentGiven } from "@/components/landing/ModalCookies"
import dynamic from "next/dynamic"
import { useEffect } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: "identified_only",
        persistence: cookieConsentGiven() === "yes" ? "localStorage+cookie" : "memory",
        capture_pageview: false,
        capture_pageleave: true,
      })
    }
  }, [])
  return (
    <PostHogProvider client={posthog}>
      <ViewTransitions>
        <ModalCookies />
        {children}
      </ViewTransitions>
    </PostHogProvider>
  )
}
