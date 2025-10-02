"use client"

import { getFishImage } from "@/lib/getFishImage"
import {
  AiIdeaFreeIcons,
  Angle01FreeIcons,
  Calendar01FreeIcons,
  Leaf01Icon,
  MountainIcon,
  SnowIcon,
  Sun01Icon,
  TreeIcon,
  WeightScale01FreeIcons,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "motion/react"
import Image from "next/image"

interface ChipsReportProps {
  especie?: string | null
  epoca?: string | null
  peso?: number | null
  situacion?: string | null
  temperatura?: number | null
  tecnica_depredadores?: string | null
  tecnica_carpfishing?: string | null
  profundidad?: string | null
  fecha?: Date | string | null
}

const WaterTempIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    <path d="M8 18a4 4 0 0 0 8 0" />
    <path d="M3 12h2" />
    <path d="M3 6h2" />
    <path d="M3 18h2" />
  </svg>
)

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

  const getSeasonIcon = (epoca: string) => {
    switch (epoca) {
      case "Primavera":
        return TreeIcon
      case "Verano":
        return Sun01Icon
      case "Otoño":
        return Leaf01Icon
      case "Invierno":
        return SnowIcon
      default:
        return TreeIcon
    }
  }

  const formatDate = (fecha: Date | string) => {
    try {
      const date = new Date(fecha)
      if (isNaN(date.getTime())) {
        return "Invalid"
      }
      return date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
      })
    } catch {
      return "Invalid"
    }
  }

  const iconColor = "#ffffff"

  return (
    <div className="flex w-full flex-wrap gap-2">
      {/* Especie */}
      {especie && getFishImage(especie) && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: getDelayForChip("especie"),
          }}
          className="h-8 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div className="flex h-full flex-row items-center gap-1 px-2 py-1">
            <Image
              src={getFishImage(especie)!}
              alt={especie}
              width={30}
              height={26}
              className="object-contain brightness-0 invert"
            />
            <span className="text-sm text-white">{especie}</span>
          </div>
        </motion.div>
      )}

      {/* Época */}
      {epoca && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: getDelayForChip("epoca"),
          }}
          className="h-8 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div className="flex h-full flex-row items-center gap-1 px-2 py-1">
            <HugeiconsIcon
              icon={getSeasonIcon(epoca)}
              size={18}
              color={iconColor}
              strokeWidth={1.8}
            />
            <span className="text-sm text-white">{epoca}</span>
          </div>
        </motion.div>
      )}

      {/* Peso */}
      {peso && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: getDelayForChip("peso"),
          }}
          className="h-8 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div className="flex h-full flex-row items-center gap-1 px-2 py-1">
            <HugeiconsIcon
              icon={WeightScale01FreeIcons}
              size={18}
              color={iconColor}
              strokeWidth={1.8}
            />
            <span className="text-sm text-white">{peso}kg</span>
          </div>
        </motion.div>
      )}

      {/* Profundidad */}
      {profundidad && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: getDelayForChip("profundidad"),
          }}
          className="h-8 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div className="flex h-full flex-row items-center gap-1 px-2 py-1">
            <HugeiconsIcon
              icon={Angle01FreeIcons}
              size={18}
              color={iconColor}
              strokeWidth={1.8}
            />
            <span className="text-sm text-white">{profundidad}m</span>
          </div>
        </motion.div>
      )}

      {/* Fecha */}
      {fecha && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: getDelayForChip("fecha"),
          }}
          className="h-8 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div className="flex h-full flex-row items-center gap-1 px-2 py-1">
            <HugeiconsIcon
              icon={Calendar01FreeIcons}
              size={18}
              color={iconColor}
              strokeWidth={1.8}
            />
            <span className="text-sm text-white">{formatDate(fecha)}</span>
          </div>
        </motion.div>
      )}

      {/* Temperatura */}
      {temperatura && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: getDelayForChip("temperatura"),
          }}
          className="h-8 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div className="flex h-full flex-row items-center gap-1 px-2 py-1">
            <div className="h-4 w-4">
              <WaterTempIcon
                size={18}
                className="text-white"
              />
            </div>
            <span className="text-sm text-white">{temperatura}°</span>
          </div>
        </motion.div>
      )}

      {/* Situación */}
      {situacion && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: getDelayForChip("situacion"),
          }}
          className="h-8 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div className="flex h-full flex-row items-center gap-1 px-2 py-1">
            <HugeiconsIcon
              icon={MountainIcon}
              size={18}
              color={iconColor}
              strokeWidth={1.8}
            />
            <span className="text-sm text-white">{situacion}</span>
          </div>
        </motion.div>
      )}

      {/* Técnica Carpfishing */}
      {tecnica_carpfishing && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: getDelayForChip("tecnica_carpfishing"),
          }}
          className="h-8 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div className="flex h-full flex-row items-center gap-1 px-2 py-1">
            <HugeiconsIcon
              icon={AiIdeaFreeIcons}
              size={18}
              color={iconColor}
              strokeWidth={1.8}
            />
            <span className="text-sm text-white">{tecnica_carpfishing}</span>
          </div>
        </motion.div>
      )}

      {/* Técnica Depredadores */}
      {tecnica_depredadores && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: getDelayForChip("tecnica_depredadores"),
          }}
          className="h-8 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div className="flex h-full flex-row items-center gap-1 px-2 py-1">
            <HugeiconsIcon
              icon={AiIdeaFreeIcons}
              size={18}
              color={iconColor}
              strokeWidth={1.8}
            />
            <span className="text-sm text-white">{tecnica_depredadores}</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}
