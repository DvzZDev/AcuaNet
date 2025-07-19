"use client"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react"

export default function ModalApp() {
  const [isVisible, setIsVisible] = useState(false)

  const shouldShowModal = () => {
    const modalStatus = localStorage.getItem("app_modal")
    return modalStatus === null || modalStatus === "true"
  }

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("app_modal", "false")
  }

  useEffect(() => {
    const showModal = shouldShowModal()
    setIsVisible(showModal)
  }, [])

  return (
    isVisible && (
      <AlertDialog open>
        <AlertDialogContent className="h-[30rem] animate-fade-in w-11/12 overflow-scroll bg-emerald-100 sm:max-w-lg md:h-fit lg:overflow-hidden">
          <AlertDialogHeader>
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 rounded-full p-1 transition-colors hover:bg-red-200"
            >
              <svg
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color="red"
                fill="none"
              >
                <path
                  d="M12 2.00012C17.5228 2.00012 22 6.47727 22 12.0001C22 17.523 17.5228 22.0001 12 22.0001C6.47715 22.0001 2 17.523 2 12.0001M8.909 2.48699C7.9 2.8146 6.96135 3.29828 6.12153 3.90953M3.90943 6.12162C3.29806 6.9616 2.81432 7.90044 2.4867 8.90964"
                  stroke="red"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.9994 15.0001L9 9.00012M9.00064 15.0001L15 9.00012"
                  stroke="red"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <AlertDialogTitle className="w-11/12 text-left text-2xl font-bold text-emerald-950">
              AcuaNet App <span className="text-base font-normal text-emerald-800">iOS &amp; Android</span>
            </AlertDialogTitle>

            <AlertDialogDescription className="text-left text-sm text-emerald-950">
              La aplicación móvil de AcuaNet estará disponible a <strong>finales de verano</strong>. Actualmente se encuentra en
              su fase final de desarrollo.
            </AlertDialogDescription>

            <AlertDialogDescription className="text-left text-sm text-emerald-950">
              Esta nueva versión incluye funciones exclusivas y mejoras clave para una experiencia más fluida desde tu móvil:
            </AlertDialogDescription>

            <ul className="ml-4 list-disc text-left text-xs text-emerald-950 lg:text-sm">
              <li>🔧 Las funcionalidades de la web han sido optimizadas para móviles.</li>
              <li>📸 CatchReport: galería privada para registrar y consultar tus capturas fácilmente.</li>
              <li>📍 CatchMap: geolocalización automática de capturas si la imagen lo permite.</li>
              <li>📊 Acceso a históricos del embalse y clima en la fecha de cada captura.</li>
              <li>🔔 Notificaciones personalizadas con información actualizada en tiempo real.</li>
            </ul>

            <div className="mt-2 flex w-full flex-row items-center justify-center gap-2">
              <div className="flex h-full w-1/2">
                <img
                  className="h-full w-full rounded-xl object-cover"
                  src="/CatchReport.png"
                  alt="Catch Report Image Preview"
                />
              </div>
              <div className="flex h-full w-1/2">
                <video
                  className="h-full w-full rounded-xl object-cover"
                  src="/CatchGallery.mp4"
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={handleClose}
              className="bg-emerald-500"
            >
              Cerrar
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  )
}
