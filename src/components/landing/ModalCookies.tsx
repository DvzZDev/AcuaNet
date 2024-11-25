"use client"
import { useEffect, useState } from "react"

import posthog from "posthog-js"

export function cookieConsentGiven() {
  if (!localStorage.getItem("cookie_consent")) {
    return "undecided"
  }
  return localStorage.getItem("cookie_consent") || "undecided"
}

export default function ModalCookies() {
  const [consentGiven, setConsentGiven] = useState("")

  useEffect(() => {
    setConsentGiven(cookieConsentGiven())
  }, [])

  useEffect(() => {
    if (consentGiven !== "") {
      posthog.set_config({
        persistence: consentGiven === "yes" ? "localStorage+cookie" : "memory",
      })
    }
  }, [consentGiven])

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie_consent", "yes")
    setConsentGiven("yes")
  }

  const handleDeclineCookies = () => {
    localStorage.setItem("cookie_consent", "no")
    setConsentGiven("no")
  }

  return <>{consentGiven === "undecided" && ""}</>
}
