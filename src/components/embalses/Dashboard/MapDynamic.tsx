"use client"

import dynamic from "next/dynamic"

const MapDynamic = dynamic(() => import("@/components/embalses/Dashboard/MapEmb"), {
  ssr: false,
  loading: () => (
    <section className="relative aspect-auto h-[400px] w-full overflow-hidden rounded-lg border border-green-900/30 bg-green-100"></section>
  ),
})

const MapDynamic2 = dynamic(() => import("@/components/embalses/Dashboard/MapClose"), {
  ssr: false,
  loading: () => (
    <section className="relative aspect-auto h-[400px] w-full overflow-hidden rounded-lg border border-green-900/30 bg-green-100"></section>
  ),
})

export default function MapEmbData({ coords }: { coords: { lat: number; lon: number; name: string } }) {
  if (!coords) {
    return <div>Error: Coordinates not found</div>
  }

  return (
    <>
      <h3 className="text-2xl font-black text-green-950">Mapas</h3>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="col-span-1">
          <MapDynamic2
            key={`${coords.lat}-${coords.lon}-${coords.name}`}
            coords={{ lat: coords.lat, lon: coords.lon, name: coords.name }}
          />
        </div>
        <div className="col-span-1">
          <MapDynamic
            key={`${coords.lat}-${coords.lon}`}
            coords={{ lat: coords.lat, lon: coords.lon }}
          />
        </div>
      </section>
    </>
  )
}
