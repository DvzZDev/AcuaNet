"use client"

import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("@/components/embalses/Dashboard/MapEmb"), {
  ssr: false,
  loading: () => (
    <>
      <h3 className="text-2xl font-black text-green-950">Mapa</h3>
      <section className="relative aspect-auto h-[400px] w-full overflow-hidden rounded-lg border border-green-900/30 bg-green-100"></section>
    </>
  ),
})

export default function MapEmbData({ coords }: { coords: { lat: number; lon: number; name: string } }) {
  if (!coords) {
    return <div>Error: Coordinates not found</div>
  }
  return (
    <DynamicMap
      key={`${coords.lat}-${coords.lon}`}
      coords={coords}
    />
  )
}
