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
          <AlertDialogContent className="sm:max-w-m animate-fade-in w-11/12 bg-emerald-100 backdrop-blur-xs">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-3xl font-semibold text-[#1b7b6e]">Uso de Cookies</AlertDialogTitle>
              <AlertDialogDescription className="text-sm lg:text-base">
                Este sitio web utiliza cookies para mejorar su experiencia de usuario. Al aceptar, consiente el uso de cookies de
                acuerdo con nuestra política de cookies que puede ver{" "}
                <a
                  className="text-green-800"
                  href="/legal"
                >
                  aqui.
                </a>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleDeclineCookies}>No</AlertDialogCancel>
              <AlertDialogAction
                className="bg-green-300"
                onClick={handleAcceptCookies}
              >
                Aceptar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
          s
        </AlertDialog>
      )}
    </>
  )
}
