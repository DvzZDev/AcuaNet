"use client"

import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"

export default function AuthCodeErrorPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const error = searchParams.get("error")
  const errorCode = searchParams.get("error_code")
  const errorDescription = searchParams.get("error_description")

  return (
    <section className="relative flex h-svh flex-col overflow-hidden bg-[#16151a]">
      <div className="z-10 mt-[5svh] flex flex-col items-center px-6 lg:mt-[15svh]">
        <div className="w-[13rem] lg:w-[16rem]">
          <img
            className="h-full w-full object-cover"
            src="/Banner.png"
            alt="Acuanet logo white"
          />
        </div>

        <h1 className="mt-7 text-2xl font-bold text-red-400 lg:text-4xl">Error de Autenticación</h1>

        <div className="mt-6 w-full max-w-md rounded-2xl border border-red-500/30 bg-red-900/20 p-6">
          <h2 className="mb-4 text-lg font-semibold text-red-300">Ha ocurrido un problema durante el inicio de sesión</h2>

          {error && (
            <div className="mb-3">
              <span className="text-sm font-medium text-red-400">Error:</span>
              <p className="mt-1 text-sm text-red-200">{error}</p>
            </div>
          )}

          {errorCode && (
            <div className="mb-3">
              <span className="text-sm font-medium text-red-400">Código:</span>
              <p className="mt-1 text-sm text-red-200">{errorCode}</p>
            </div>
          )}

          {errorDescription && (
            <div className="mb-4">
              <span className="text-sm font-medium text-red-400">Descripción:</span>
              <p className="mt-1 text-sm text-red-200">{decodeURIComponent(errorDescription)}</p>
            </div>
          )}

          <div className="mb-4 text-sm text-gray-300">
            <p>Posibles soluciones:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-gray-400">
              <li>Verifica tu conexión a internet</li>
              <li>Intenta iniciar sesión nuevamente</li>
              <li>Asegúrate de que tu cuenta de Google esté activa</li>
              <li>Contacta al soporte si el problema persiste</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button
            onClick={() => router.push("/auth/signin")}
            className="w-full rounded-md border border-emerald-500 bg-emerald-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            Volver a intentar
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full rounded-md border border-gray-500 bg-transparent px-6 py-3 text-base font-semibold text-gray-300 transition-colors hover:bg-gray-800"
          >
            Ir al inicio
          </button>
        </div>
      </div>

      <div className="absolute -bottom-[40rem] left-1/2 z-0 h-[50rem] w-full -translate-x-1/2 transform rounded-full bg-emerald-600 blur-[20rem] lg:-bottom-[50rem]" />
    </section>
  )
}
