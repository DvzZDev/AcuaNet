'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { NextUIProvider } from '@nextui-org/system'
import { ViewTransitions } from 'next-view-transitions'

import { cookieConsentGiven } from '@/components/landing/ModalCookies'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
  })
  posthog.init('<ph_project_api_key>', {
    api_host: 'https://us.i.posthog.com',
    persistence: cookieConsentGiven() === 'yes' ? 'localStorage+cookie' : 'memory',
  })
}

export function Providers({ children }) {
  return (
    <PostHogProvider client={posthog}>
      <NextUIProvider>
        <ViewTransitions>{children}</ViewTransitions>
      </NextUIProvider>
    </PostHogProvider>
  )
}
