"use client"

import Link from "next/link"
import { motion } from "motion/react"
import NumberFlow from "@number-flow/react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

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
  const { ref, inView } = useInView({
    threshold: 0.8,
  })

  const [valoresAnimados, setValoresAnimados] = useState({
    lastWeek: 0,
    pctDifference: 0,
    porcentaje: 0,
  })

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setValoresAnimados({
          lastWeek: embalse.lastWeek,
          pctDifference: embalse.pctDifference,
          porcentaje: embalse.porcentaje,
        })
      }, 700)
    }
  }, [inView, embalse.lastWeek, embalse.pctDifference, embalse.porcentaje])

  const variacion = embalse.pctDifference || 0

  return (
    <div className="max-h-64 w-[15rem] overflow-hidden rounded-lg border border-green-50/30 bg-emerald-400/15 shadow-lg transition-all hover:scale-95 md:max-h-auto">
      <Link
        ref={ref}
        href={`embalse/${embalse.name.toLowerCase().replace(/ /g, "-") ?? ""}`}
      >
        <div className="relative p-3">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="truncate text-base text-green-100">{embalse.name}</h2>
            {/* Icono */}
            <img
              src={embalse.pais === "España" ? "/es.webp" : "/pt.webp"}
              alt={embalse.pais + " flag"}
              className="h-5 w-5 object-cover"
            />
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
            <motion.span
              layout
              className="min-w-[36px] text-right text-sm font-bold text-green-100"
            >
              {" "}
              <NumberFlow value={parseFloat(valoresAnimados.porcentaje.toFixed(0))} /> %
            </motion.span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-green-100/80">Variación semanal</span>
            <motion.span
              layout
              className={`flex items-center font-bold ${variacion >= 0 ? "text-green-300" : "text-red-300"}`}
            >
              {variacion >= 0 ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
              <NumberFlow
                prefix={variacion > 0 ? "+" : ""}
                value={valoresAnimados.pctDifference}
              />
              %
            </motion.span>
          </div>
        </div>
      </Link>
    </div>
  )
}
