"use client"
import useModalStore from "@/store/useModalStore"
import { motion } from "motion/react"

// Icono
const SearchIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle
      cx="11"
      cy="11"
      r="8"
    />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

export default function SearchLimitModal() {
  const { closeModal, openModal, modalData } = useModalStore()
  const data = modalData as { daysUntilReset?: number } | undefined

  const handleUpgrade = () => {
    closeModal()
    openModal("upgradePlan")
  }

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={closeModal}
        className="fixed inset-0 z-[3000] bg-black/50 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="pointer-events-none fixed inset-0 z-[3000] flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-auto relative w-full max-w-md rounded-xl border border-emerald-300 bg-emerald-50 shadow-xl"
        >
          {/* Botón de cerrar */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6">
            {/* Icono simple */}
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <SearchIcon />
            </div>

            {/* Título */}
            <h2 className="mb-3 text-center text-xl font-semibold text-gray-900">Límite de búsquedas alcanzado</h2>

            {/* Descripción */}
            <p className="mb-2 text-center text-sm text-gray-600">
              Has utilizado todas tus búsquedas gratuitas este mes. Mejora tu plan para continuar buscando embalses sin límites.
            </p>

            {/* Info de búsquedas */}
            <div className="mb-6 rounded-lg bg-gray-50 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Búsquedas restantes</span>
                <span className="font-semibold text-gray-900">0 de 5 búsquedas</span>
              </div>
              {data?.daysUntilReset && (
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">Próximo reinicio</span>
                  <span className="font-semibold text-gray-900">
                    En {data.daysUntilReset} {data.daysUntilReset === 1 ? "día" : "días"}
                  </span>
                </div>
              )}
            </div>

            {/* Botones */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleUpgrade}
                className="w-full rounded-lg bg-emerald-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-emerald-500"
              >
                🚀 Mejora tu plan
              </button>

              <button
                onClick={closeModal}
                className="w-full rounded-lg border border-gray-300 bg-white px-6 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Cerrar
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
