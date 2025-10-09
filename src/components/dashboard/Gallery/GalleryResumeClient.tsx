"use client"

import { CatchReportDB } from "@/types"
import { Alert02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { motion } from "motion/react"
import { Link } from "next-view-transitions"
import { use } from "react"

export default function GalleryResumeClient({ allCaches }: { allCaches: Promise<CatchReportDB[]> }) {
  const resolvedCatches = use(allCaches)
  const recentCaches = resolvedCatches.slice(0, 4)

  return (
    <>
      {recentCaches.length === 0 ? (
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-2xl border-1 border-emerald-300 bg-emerald-50 p-8 text-center shadow-sm">
            <div className="rounded-full bg-emerald-100 p-3">
              <HugeiconsIcon
                icon={Alert02Icon}
                size={32}
                color="#059669"
                strokeWidth={1.5}
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-900">No hay capturas aún</h3>
              <p className="text-sm text-gray-600">Añade tus primeras capturas desde la App móvil para verlas aquí.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex aspect-square flex-wrap overflow-hidden rounded-2xl bg-emerald-50">
          {recentCaches.map((catchReport, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="h-2/4 w-2/4 transition-all hover:brightness-120"
              key={catchReport.catch_id}
            >
              <Link href={`/account/dashboard/catchreport/${catchReport.catch_id}`}>
                <img
                  src={catchReport.imagenes[0]}
                  alt={catchReport.embalse}
                  className="h-full w-full object-cover "
                />
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </>
  )
}
