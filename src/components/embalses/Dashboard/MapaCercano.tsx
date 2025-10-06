"use client"

import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"
import { MapContainer, TileLayer, useMap } from "react-leaflet"

interface Coords {
  name?: string
  lat: number
  lon: number
}

const MapRef = ({ setMapInstance }: { setMapInstance: (map: any) => void }) => {
  const map = useMap()

  useEffect(() => {
    setMapInstance(map)
  }, [map, setMapInstance])

  return null
}

export default function MapaCercano({ coords }: { coords: Coords }) {
  const [mapInstance, setMapInstance] = useState<any>(null)

  const handleZoomIn = () => {
    if (mapInstance) {
      mapInstance.zoomIn()
    }
  }

  const handleZoomOut = () => {
    if (mapInstance) {
      mapInstance.zoomOut()
    }
  }

  return (
    <>
      <section className="relative w-full overflow-hidden rounded-lg border-green-900/30 bg-green-100">
        <MapContainer
          className="z-0 relative h-[400px] w-full"
          center={[coords.lat, coords.lon]}
          zoom={13}
          scrollWheelZoom={false}
          zoomControl={false}
          dragging={true}
          touchZoom={true}
          doubleClickZoom={true}
        >
          <MapRef setMapInstance={setMapInstance} />
          <TileLayer
            attribution='Map tiles by <a href="https://www.esri.com/">Esri</a>, &copy; OpenStreetMap contributors'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </MapContainer>

        <div className="absolute right-2 bottom-2 z-[1000] flex flex-col gap-2 md:right-4 md:bottom-4">
          <button
            onClick={handleZoomIn}
            className="touch-manipulation rounded-xl bg-[#14141c] p-3 shadow-lg transition-colors hover:bg-[#1f1f2e] md:p-2"
            title="Zoom In"
          >
            <HugeiconsIcon
              icon={PlusSignIcon}
              size={20}
              color="#7ed321"
              strokeWidth={2}
            />
          </button>
          <button
            onClick={handleZoomOut}
            className="touch-manipulation rounded-xl bg-[#14141c] p-3 shadow-lg transition-colors hover:bg-[#1f1f2e] md:p-2"
            title="Zoom Out"
          >
            <HugeiconsIcon
              icon={MinusSignIcon}
              size={20}
              color="#7ed321"
              strokeWidth={2}
            />
          </button>
        </div>
      </section>
    </>
  )
}
