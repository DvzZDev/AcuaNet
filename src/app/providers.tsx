"use client"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { NextUIProvider } from "@nextui-org/system"
import { ViewTransitions } from "next-view-transitions"
import dotenv from "dotenv"

const PostHogPageView = dynamic(() => import("@/app/PostHogPageView"), {
  ssr: false,
})
const ModalCookies = dynamic(() => import("@/components/landing/ModalCookies"))

dotenv.config()

import { cookieConsentGiven } from "@/components/landing/ModalCookies"
import dynamic from "next/dynamic"

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only",
  })
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
    api_host: "https://us.i.posthog.com",
    persistence: cookieConsentGiven() === "yes" ? "localStorage+cookie" : "memory",
  })
}
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <NextUIProvider>
        <ViewTransitions>
          <PostHogPageView />
          <ModalCookies />
          {children}
        </ViewTransitions>
      </NextUIProvider>
    </PostHogProvider>
  )
}
