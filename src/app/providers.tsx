"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import dotenv from "dotenv"
import { ViewTransitions } from "next-view-transitions"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"

const ModalCookies = dynamic(() => import("@/components/landing/ModalCookies"), { ssr: false })
const ModalApp = dynamic(() => import("@/components/landing/ModalApp"), { ssr: false })

dotenv.config()

import { cookieConsentGiven } from "@/components/landing/ModalCookies"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            refetchOnWindowFocus: false,
          },
        },
      })
  )

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
    <QueryClientProvider client={queryClient}>
      <PostHogProvider client={posthog}>
        <ViewTransitions>
          <ModalCookies />
          <ModalApp />
          {children}
        </ViewTransitions>
      </PostHogProvider>
    </QueryClientProvider>
  )
}
