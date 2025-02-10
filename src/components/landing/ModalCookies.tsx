"use client"
import { useEffect, useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import posthog from "posthog-js"

export function cookieConsentGiven() {
  return localStorage.getItem("cookie_consent") || "undecided"
}

export default function ModalCookies() {
  const [consentGiven, setConsentGiven] = useState("")

  useEffect(() => {
    setConsentGiven(cookieConsentGiven())
  }, [])

  useEffect(() => {
    if (consentGiven) {
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

  return (
    <>
      {consentGiven === "undecided" && (
        <AlertDialog open>
          <AlertDialogContent className="sm:max-w-m w-11/12 animate-fade-in bg-green-50 backdrop-blur-xs">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl font-black text-[#1b7b6e]">Uso de Cookies</AlertDialogTitle>
              <AlertDialogDescription>
                Este sitio web utiliza cookies para mejorar su experiencia de usuario. Al aceptar, consiente el uso de cookies de
                acuerdo con nuestra política de cookies.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleDeclineCookies}>No</AlertDialogCancel>
              <AlertDialogAction
                className="bg-green-300"
                onClick={handleAcceptCookies}
              >
                Sí
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  )
}
