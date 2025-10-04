"use client"

import { getFishImage } from "@/lib/getFishImage"
import {
  Calendar,
  Leaf,
  Lightbulb,
  Mountain,
  Scale,
  Snowflake,
  Sun,
  Thermometer,
  TreeDeciduous,
  TrendingDown,
} from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"

interface ChipsReportProps {
  especie?: string
  epoca?: string
  peso?: number | null
  situacion?: string | null
  temperatura?: number | null
  tecnica_depredadores?: string | null
  tecnica_carpfishing?: string | null
  profundidad?: string | null
  fecha?: Date | string | undefined
}

export default function ChipsReport({
  especie,
  epoca,
  peso,
  situacion,
  temperatura,
  tecnica_carpfishing,
  tecnica_depredadores,
  profundidad,
  fecha,
}: ChipsReportProps) {
  const chips = [
    { key: "especie", visible: !!(especie && getFishImage(especie)) },
    { key: "epoca", visible: !!epoca },
    { key: "peso", visible: !!peso },
    { key: "profundidad", visible: !!profundidad },
    { key: "fecha", visible: !!fecha },
    { key: "temperatura", visible: !!temperatura },
    { key: "situacion", visible: !!situacion },
    { key: "tecnica_carpfishing", visible: !!tecnica_carpfishing },
    { key: "tecnica_depredadores", visible: !!tecnica_depredadores },
  ]

  const visibleChips = chips.filter((chip) => chip.visible)
  const getDelayForChip = (chipKey: string) => {
    const index = visibleChips.findIndex((chip) => chip.key === chipKey)
    return index * 0.1
  }

  const animationConfig = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }

  return (
    <div className="flex w-full flex-wrap gap-2">
      {/* Especie */}
      {especie && getFishImage(especie) && (
        <motion.div
          {...animationConfig}
          transition={{
            ...animationConfig.transition,
            delay: getDelayForChip("especie"),
          }}
          className="flex h-9 flex-row items-center justify-center gap-1 self-start rounded-lg border border-purple-300 bg-purple-100 px-2 py-1 md:h-10 md:rounded-xl md:px-3"
        >
          <Image
            width={40}
            height={32}
            className="object-contain md:h-10 md:w-12"
            src={getFishImage(especie) || ""}
            alt={especie}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(30%) sepia(73%) saturate(4467%) hue-rotate(260deg) brightness(91%) contrast(93%)",
            }}
          />
          <span className="text-xs font-semibold text-purple-700 md:text-sm">{String(especie)}</span>
        </motion.div>
      )}

      {/* Época */}
      {epoca && (
        <motion.div
          {...animationConfig}
          transition={{
            ...animationConfig.transition,
            delay: getDelayForChip("epoca"),
          }}
          className={`flex h-9 flex-row items-center justify-center gap-1 self-start rounded-lg border px-2 py-1 md:h-10 md:rounded-xl md:px-3 ${
            epoca === "Primavera"
              ? "border-green-300 bg-green-100"
              : epoca === "Verano"
                ? "border-yellow-300 bg-yellow-100"
                : epoca === "Otoño"
                  ? "border-orange-300 bg-orange-100"
                  : epoca === "Invierno"
                    ? "border-blue-300 bg-blue-100"
                    : "border-gray-300 bg-gray-100"
          }`}
        >
          {epoca === "Primavera" ? (
            <TreeDeciduous
              size={16}
              strokeWidth={1.8}
              className="text-green-700 md:h-5 md:w-5"
            />
          ) : epoca === "Verano" ? (
            <Sun
              size={16}
              strokeWidth={1.8}
              className="text-yellow-700 md:h-5 md:w-5"
            />
          ) : epoca === "Otoño" ? (
            <Leaf
              size={16}
              strokeWidth={1.8}
              className="text-orange-700 md:h-5 md:w-5"
            />
          ) : epoca === "Invierno" ? (
            <Snowflake
              size={16}
              strokeWidth={1.8}
              className="text-blue-700 md:h-5 md:w-5"
            />
          ) : (
            <TreeDeciduous
              size={16}
              strokeWidth={1.8}
              className="text-gray-700 md:h-5 md:w-5"
            />
          )}
          <span
            className={`text-xs font-semibold md:text-sm ${
              epoca === "Primavera"
                ? "text-green-700"
                : epoca === "Verano"
                  ? "text-yellow-700"
                  : epoca === "Otoño"
                    ? "text-orange-700"
                    : epoca === "Invierno"
                      ? "text-blue-700"
                      : "text-gray-700"
            }`}
          >
            {String(epoca)}
          </span>
        </motion.div>
      )}

      {/* Peso */}
      {peso && (
        <motion.div
          {...animationConfig}
          transition={{
            ...animationConfig.transition,
            delay: getDelayForChip("peso"),
          }}
          className="flex h-9 flex-row items-center justify-center gap-1 self-start rounded-lg border border-pink-300 bg-pink-100 px-2 py-1 md:h-10 md:rounded-xl md:px-3"
        >
          <Scale
            size={16}
            strokeWidth={1.8}
            className="text-pink-700 md:h-5 md:w-5"
          />
          <span className="text-xs font-semibold text-pink-700 md:text-sm">{String(peso)} kg</span>
        </motion.div>
      )}

      {/* Profundidad */}
      {profundidad && (
        <motion.div
          {...animationConfig}
          transition={{
            ...animationConfig.transition,
            delay: getDelayForChip("profundidad"),
          }}
          className="flex h-9 flex-row items-center justify-center gap-1 self-start rounded-lg border border-teal-300 bg-teal-100 px-2 py-1 md:h-10 md:rounded-xl md:px-3"
        >
          <TrendingDown
            size={16}
            strokeWidth={1.8}
            className="text-teal-700 md:h-5 md:w-5"
          />
          <span className="text-xs font-semibold text-teal-700 md:text-sm">{profundidad} m</span>
        </motion.div>
      )}

      {/* Fecha */}
      {fecha && (
        <motion.div
          {...animationConfig}
          transition={{
            ...animationConfig.transition,
            delay: getDelayForChip("fecha"),
          }}
          className="flex h-9 flex-row items-center justify-center gap-1 self-start rounded-lg border border-red-300 bg-red-100 px-2 py-1 md:h-10 md:rounded-xl md:px-3"
        >
          <Calendar
            size={16}
            strokeWidth={1.8}
            className="text-red-700 md:h-5 md:w-5"
          />
          <span className="text-xs font-semibold text-red-700 md:text-sm">
            {(() => {
              try {
                const date = new Date(fecha)
                if (isNaN(date.getTime())) {
                  return "Fecha inválida"
                }
                return date.toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })
              } catch {
                return "Fecha inválida"
              }
            })()}
          </span>
        </motion.div>
      )}

      {/* Temperatura */}
      {temperatura && (
        <motion.div
          {...animationConfig}
          transition={{
            ...animationConfig.transition,
            delay: getDelayForChip("temperatura"),
          }}
          className="flex h-9 flex-row items-center justify-center gap-1 self-start rounded-lg border border-sky-300 bg-sky-100 px-2 py-1 md:h-10 md:rounded-xl md:px-3"
        >
          <Thermometer
            size={16}
            strokeWidth={1.8}
            className="text-sky-700 md:h-5 md:w-5"
          />
          <span className="text-xs font-semibold text-sky-700 md:text-sm">{String(temperatura)}°</span>
        </motion.div>
      )}

      {/* Situación */}
      {situacion && (
        <motion.div
          {...animationConfig}
          transition={{
            ...animationConfig.transition,
            delay: getDelayForChip("situacion"),
          }}
          className="flex h-9 flex-row items-center justify-center gap-1 self-start rounded-lg border border-lime-300 bg-lime-100 px-2 py-1 md:h-10 md:rounded-xl md:px-3"
        >
          <Mountain
            size={16}
            strokeWidth={1.8}
            className="text-lime-700 md:h-5 md:w-5"
          />
          <span className="text-xs font-semibold text-lime-700 md:text-sm">{String(situacion)}</span>
        </motion.div>
      )}

      {/* Técnica Carpfishing */}
      {tecnica_carpfishing && (
        <motion.div
          {...animationConfig}
          transition={{
            ...animationConfig.transition,
            delay: getDelayForChip("tecnica_carpfishing"),
          }}
          className="flex h-9 flex-row items-center justify-center gap-1 self-start rounded-lg border border-amber-300 bg-amber-100 px-2 py-1 md:h-10 md:rounded-xl md:px-3"
        >
          <Lightbulb
            size={16}
            strokeWidth={1.8}
            className="text-amber-700 md:h-5 md:w-5"
          />
          <span className="text-xs font-semibold text-amber-700 md:text-sm">{String(tecnica_carpfishing)}</span>
        </motion.div>
      )}

      {/* Técnica Depredadores */}
      {tecnica_depredadores && (
        <motion.div
          {...animationConfig}
          transition={{
            ...animationConfig.transition,
            delay: getDelayForChip("tecnica_depredadores"),
          }}
          className="flex h-9 flex-row items-center justify-center gap-1 self-start rounded-lg border border-amber-300 bg-amber-100 px-2 py-1 md:h-10 md:rounded-xl md:px-3"
        >
          <Lightbulb
            size={16}
            strokeWidth={1.8}
            className="text-amber-700 md:h-5 md:w-5"
          />
          <span className="text-xs font-semibold text-amber-700 md:text-sm">{String(tecnica_depredadores)}</span>
        </motion.div>
      )}
    </div>
  )
}
