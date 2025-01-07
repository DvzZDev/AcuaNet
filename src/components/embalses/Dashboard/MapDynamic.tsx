"use client"

import dynamic from "next/dynamic"

const MapaCercano = dynamic(() => import("@/components/embalses/Dashboard/MapaCercano"), {
  ssr: false,
  loading: () => (
    <section className="relative aspect-auto h-[400px] w-full overflow-hidden rounded-lg border border-green-900/30 bg-green-100"></section>
  ),
})

export default function MapEmbData({ coords }: { coords: { lat: number; lon: number; name?: string } }) {
  if (!coords) {
    return <div>Error: Coordinates not found</div>
  }

  return (
    <>
      <h3 className="text-2xl font-black text-green-950">Mapas</h3>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="col-span-1">
          <MapaCercano
            key={`${coords.lat}-${coords.lon}-${coords.name}`}
            coords={{ lat: coords.lat, lon: coords.lon, name: coords.name }}
          />
        </div>
        <div className="col-span-1">
          <iframe
            width="100%"
            height="400"
            className="rounded-lg"
            loading="lazy"
            src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=11&overlay=wind&product=ecmwf&level=surface&lat=${coords.lat}&lon=${coords.lon}&detailLat=${coords.lat}&detailLon=${coords.lon}&marker=true&message=true`}
          ></iframe>
        </div>
      </section>
    </>
  )
}
