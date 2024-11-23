"use client"

import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from "react-leaflet"

interface Coords {
  name: string
  lat: number
  lon: number
}
export default function MapEmb({ coords }: { coords: Coords }) {
  return (
    <>
      <h3 className="text-2xl font-black text-green-950">Mapa</h3>
      <section className="relative aspect-auto h-fit w-full overflow-hidden rounded-lg border-green-900/30 bg-green-100">
        <p className="absolute bottom-0 right-0 z-10 rounded-lg bg-[#93edb3]/70 backdrop-blur-sm p-1 text-right text-[10px] font-semibold text-green-950 md:text-base">
          {coords.name}
        </p>
        <MapContainer
          className="map-container"
          center={[coords.lat, coords.lon]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "400px", zIndex: 0 }}
        >
          {/* Cambia a una capa satelital */}
          <TileLayer
            attribution='Map tiles by <a href="https://www.esri.com/">Esri</a>, &copy; OpenStreetMap contributors'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </MapContainer>
      </section>
    </>
  )
}
