"use client"

import { CatchReportDB } from "@/types"
import dynamic from "next/dynamic"

const CatchMapClient = dynamic(() => import("./CatchMapCient"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-emerald-200 md:min-h-[550px]">
      <div className="text-emerald-700">Cargando mapa...</div>
    </div>
  ),
})

export default function CatchMapDynamic({ reportData }: { reportData: CatchReportDB[] }) {
  return <CatchMapClient reportData={reportData} />
}
