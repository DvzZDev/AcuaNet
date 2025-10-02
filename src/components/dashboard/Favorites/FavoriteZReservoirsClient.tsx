"use client"

import { useScreenWidth } from "@/hooks/useScreenWidth"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import React, { memo, useCallback } from "react"

interface ReservoirData {
  id: string
  embalse: string
  cuenca: string
  fecha: string
  capacidad_total: number
  volumen_actual: number
  porcentaje: number
  pais?: string
}

interface ProcessedReservoirData {
  embalse: string
  cuenca: string
  porcentaje: number
  variacion_ultima_semana?: number
  fecha: Date
  latest_data: ReservoirData
  previous_data?: ReservoirData
  pais?: string
}

// SVG Icons Components
const TrendUp = ({ color = "#16a34a" }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

const TrendDown = ({ color = "#dc2626" }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
)

const HistoryIcon = ({ color = "#134e4a" }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" />
  </svg>
)

const InfoIcon = ({ color = "#fb923c" }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
    />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
)

const LockIcon = ({ color = "#fb923c" }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect
      width="18"
      height="11"
      x="3"
      y="11"
      rx="2"
      ry="2"
    />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const Capitalice = (str: string | undefined): string => {
  if (!str) return ""
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

const processReservoirData = (data: ReservoirData[]): ProcessedReservoirData[] => {
  const groupedData = data.reduce(
    (acc, item) => {
      if (!acc[item.embalse]) {
        acc[item.embalse] = []
      }
      acc[item.embalse].push(item)
      return acc
    },
    {} as Record<string, ReservoirData[]>
  )

  return Object.entries(groupedData).map(([, reservoirData]) => {
    const sortedData = reservoirData.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())

    const latest = sortedData[0]
    const previous = sortedData[1]

    let variacion_ultima_semana: number | undefined
    if (previous) {
      variacion_ultima_semana = latest.porcentaje - previous.porcentaje
    }

    return {
      embalse: latest.embalse,
      cuenca: latest.cuenca,
      porcentaje: latest.porcentaje,
      variacion_ultima_semana,
      fecha: new Date(latest.fecha),
      latest_data: latest,
      previous_data: previous,
      pais: latest.pais,
    }
  })
}

interface EmbalseCardProps {
  embalse: ProcessedReservoirData
  accessType?: "subscription" | "lifetime" | "free"
  delay: number
}

const EmbalseCard: React.FC<EmbalseCardProps> = memo(({ embalse, accessType = "free", delay }) => {
  const navigateToEmbalse = useCallback((nombre: string) => {
    window.location.href = `/embalse/${encodeURIComponent(nombre)}`
  }, [])

  const percentage = embalse.porcentaje
  const weeklyVariation = embalse.variacion_ultima_semana
  const date = embalse.fecha
  const displayName = Capitalice(embalse.embalse)

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay,
      }}
      className="relative mb-4 w-60 shrink-0 grow-0 overflow-hidden rounded-lg border border-green-500/50 bg-green-500/20 px-2 py-2 sm:w-72 sm:px-3"
    >
      {/* Country Flag Background */}
      <div className="absolute -top-[2rem] -right-[2rem] h-[5rem] w-[5rem] -rotate-12 overflow-hidden rounded-full opacity-20 sm:-top-[3rem] sm:-right-[3rem] sm:h-[7rem] sm:w-[7rem]">
        <img
          src={embalse.pais === "Portugal" ? "/pt.webp" : "/spain.webp"}
          className="h-full w-full object-cover"
          alt="flag"
        />
      </div>

      {accessType === "subscription" || accessType === "lifetime" ? (
        <button
          onClick={() => navigateToEmbalse(embalse.embalse || "")}
          className="relative z-10 w-full text-left"
        >
          {/* Header */}
          <div className="mb-1 flex items-center justify-between">
            <h3 className="truncate font-[BlackRolmer] text-2xl font-bold text-teal-900 sm:text-2xl md:text-3xl">
              {displayName}
            </h3>
          </div>

          {/* Progress Bar */}
          <span
            className={cn(
              "min-w-[40px] text-right text-lg font-black sm:min-w-[50px] sm:text-xl md:text-2xl",
              percentage >= 90
                ? "text-blue-700" // nivel óptimo-alto
                : percentage >= 70
                  ? "text-cyan-600" // lleno
                  : percentage >= 50
                    ? "text-green-600" // medio
                    : percentage >= 30
                      ? "text-yellow-700" // bajo
                      : "text-red-600" // crítico
            )}
          >
            {percentage.toFixed(0)}%
          </span>

          <div className="flex items-center gap-2">
            <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-emerald-950 sm:h-3">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: percentage / 100 }}
                transition={{
                  type: "spring",
                  delay: 0.4,
                  duration: 0.8,
                }}
                className={cn(
                  "absolute left-0 h-full w-full origin-left rounded-full",
                  percentage >= 90
                    ? "bg-blue-700" // nivel óptimo-alto
                    : percentage >= 70
                      ? "bg-cyan-600" // lleno
                      : percentage >= 50
                        ? "bg-green-600" // medio
                        : percentage >= 30
                          ? "bg-yellow-700" // bajo
                          : "bg-red-600" // crítico
                )}
              />
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-2 flex items-center justify-between sm:mt-3">
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium text-teal-900 sm:text-sm">Var. Semanal: </span>
              {weeklyVariation && weeklyVariation > 0 ? <TrendUp color="#16a34a" /> : <TrendDown color="#dc2626" />}
              <span
                className={`text-xs font-bold sm:text-sm ${weeklyVariation && weeklyVariation > 0 ? "text-green-600" : "text-red-600"}`}
              >
                {weeklyVariation?.toFixed(1) || 0}%
              </span>
            </div>

            <div className="flex items-center gap-1">
              <HistoryIcon color="#134e4a" />
              <span className="text-sm font-medium text-teal-900">
                {new Date(date).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </div>
          </div>
        </button>
      ) : (
        <div className="relative">
          <button
            onClick={() => navigateToEmbalse(embalse.embalse || "")}
            className="relative z-10 w-full text-left"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="truncate text-lg font-bold text-teal-900 sm:text-xl md:text-2xl">{displayName}</h3>
            </div>

            {/* Skeleton Progress Bar */}
            <div className="mt-3 flex items-center gap-2 sm:mt-4">
              <div className="h-4 flex-1 animate-pulse rounded-full bg-green-200 sm:h-5" />
              <div className="h-4 w-4 animate-pulse rounded bg-green-200 sm:h-5 sm:w-5" />
            </div>

            {/* Premium Notice */}
            <div className="mt-2 flex items-center gap-2 sm:mt-3">
              <InfoIcon color="#fb923c" />
              <span className="text-xs text-teal-800 sm:text-sm">Desbloquea contenido premium</span>
            </div>
          </button>

          {/* Lock Icon */}
          <div className="absolute top-2 right-2 z-20">
            <LockIcon color="#fb923c" />
          </div>
        </div>
      )}
    </motion.div>
  )
})

EmbalseCard.displayName = "EmbalseCard"

export default function FavoriteZReservoirsClient({ favorite_reservoirs }: { favorite_reservoirs: ReservoirData[] }) {
  const accessType = "subscription"
  const processedData = processReservoirData(favorite_reservoirs)
  const { getDynamicStyle } = useScreenWidth()

  return (
    <div>
      <div
        className="scroll-tab flex gap-3 overflow-x-scroll sm:gap-4 md:pb-2"
        style={getDynamicStyle()}
      >
        {processedData.map((embalse, index) => (
          <EmbalseCard
            key={index}
            delay={index * 0.1}
            embalse={embalse}
            accessType={accessType as "subscription" | "lifetime" | "free"}
          />
        ))}
      </div>
    </div>
  )
}
