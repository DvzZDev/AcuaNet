"use client"

import { CatchReportDB } from "@/types"
import { motion } from "motion/react"

export default function GalleryResumeClient({ recentCaches }: { recentCaches: CatchReportDB[] }) {
  return (
    <>
      {recentCaches.length === 0 ? (
        <div className="aspect-square h-full w-full rounded-2xl bg-emerald-200">No hay capturas recientes</div>
      ) : (
        <div className="flex aspect-square flex-wrap overflow-hidden rounded-2xl">
          {recentCaches.map((catchReport, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="w-2/4"
              key={catchReport.catch_id}
            >
              <img
                src={catchReport.imagenes[0]}
                alt={catchReport.embalse}
                className="aspect-square h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      )}
    </>
  )
}
