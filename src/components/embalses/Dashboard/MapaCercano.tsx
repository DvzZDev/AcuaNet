"use client"

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, useMap } from "react-leaflet"
import L from "leaflet"

import { useEffect } from "react"

interface Coords {
  name?: string
  lat: number
  lon: number
}

export const MapController = () => {
  const map = useMap()

  useEffect(() => {
    L.Map.addInitHook("addHandler", "gestureHandling")
  }, [map])

  return null
}

export default function MapaCercano({ coords }: { coords: Coords }) {
  return (
    <>
      <section className="relative aspect-auto h-fit w-full overflow-hidden rounded-lg border-green-900/30 bg-green-100">
        {coords.name && (
          <p className="absolute right-0 bottom-0 z-10 rounded-lg bg-[#93edb3]/70 p-1 text-right text-[10px] font-semibold text-green-950 backdrop-blur-xs md:text-sm">
            {coords.name}
          </p>
        )}
        <MapContainer
          className="map-container z-0"
          center={[coords.lat, coords.lon]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <MapController />
          <TileLayer
            attribution='Map tiles by <a href="https://www.esri.com/">Esri</a>, &copy; OpenStreetMap contributors'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </MapContainer>
      </section>
    </>
  )
}
