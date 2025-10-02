"use client"

import dynamic from "next/dynamic"

const LastPinMapClient = dynamic(() => import("./LastPinMapClient"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center rounded-lg bg-green-100">
      <div className="text-emerald-700">Cargando mapa...</div>
    </div>
  ),
})

export default function LastPinMapDynamic({ reportData }: { reportData: any[] }) {
  return <LastPinMapClient reportData={reportData} />
}
