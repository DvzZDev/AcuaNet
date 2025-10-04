"use client"

import { CatchReportDB } from "@/types"
import dynamic from "next/dynamic"

const MapReportClient = dynamic(() => import("./MapReportClient"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[300px] grid-cols-1 rounded-2xl w-full items-center justify-center bg-emerald-200 md:min-h-[550px]">
      <div className="text-emerald-700">Cargando mapa...</div>
    </div>
  ),
})

export default function MapReport({ reportData }: { reportData: CatchReportDB }) {
  return <MapReportClient reportData={reportData} />
}
