"use client"

import Link from "next/link"
import { motion } from "motion/react"

interface FavSection {
  name: string
  lastWeek: number
  pctDifference: number
  cuenca: string
  pais: string
  porcentaje: number
}

const TrendingUp = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
)

const TrendingDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
)

export const FavCard = ({ embalse }: { embalse: FavSection }) => {
  const variacion = embalse.pctDifference || 0

  return (
    <div className="max-h-64 w-[15rem] overflow-auto rounded-lg border border-green-50/30 bg-emerald-400/15 shadow-lg transition-all hover:scale-95 md:max-h-auto">
      <Link href={`embalse/${embalse.name.toLowerCase().replace(/ /g, "-") ?? ""}`}>
        <div className="relative p-3">
          <div className="absolute top-0 right-0 flex h-4 w-6 items-center justify-center overflow-hidden">
            <img
              src={embalse.pais === "España" ? "/es.webp" : "/pt.webp"}
              alt={embalse.pais + " flag"}
              className="h-6 w-6 object-cover"
            />
          </div>
          <div className="mb-2 flex items-center justify-between">
            <h2 className="truncate text-base text-green-100">{embalse.name}</h2>
            {/* Icono */}
          </div>
          <div className="mb-1 flex items-center">
            <div className="mr-2 h-2 w-full rounded-full bg-green-950">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${embalse.porcentaje}%` }}
                transition={{ type: "spring", delay: 0.5 }}
                className="h-2 rounded-full bg-green-400"
              ></motion.div>
            </div>
            <span className="min-w-[36px] text-right text-sm font-bold text-green-100">{embalse.porcentaje?.toFixed()}%</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-green-100">Variación semanal</span>
            <span className={`flex items-center font-bold ${variacion >= 0 ? "text-green-300" : "text-red-300"}`}>
              {variacion >= 0 ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
              {variacion > 0 ? "+" : ""}
              {variacion}%
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
