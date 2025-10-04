"use client"

import { CatchReportDB } from "@/types"
import { Location05Icon, MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"
import ChipTitle from "./ChipTitle"

const useLeaflet = () => {
  const [L, setL] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      void import("leaflet").then((leaflet) => {
        setL(leaflet.default)
      })
    }
  }, [])

  return L
}

export const MapController = () => {
  const map = useMap()
  const L = useLeaflet()

  useEffect(() => {
    if (L) {
      L.Map.addInitHook("addHandler", "gestureHandling")
    }
  }, [map, L])

  return null
}

const MapRef = ({ setMapInstance }: { setMapInstance: (map: any) => void }) => {
  const map = useMap()

  useEffect(() => {
    setMapInstance(map)
  }, [map, setMapInstance])

  return null
}

export default function MapReportClient({ reportData }: { reportData: CatchReportDB }) {
  const position: [number, number] = [reportData.lat || 40.4168, reportData.lng || -3.7038]
  const L = useLeaflet()
  const [mapInstance, setMapInstance] = useState<any>(null)

  const createCustomIcon = (imageUrl: string) => {
    if (!L) return null
    return L.divIcon({
      className: "custom-marker",
      html: `
        <div style="position: relative; touch-action: manipulation;">
          <!-- Main Marker -->
          <div style="
            width: 50px;
            height: 50px;
            border-radius: 20%;
            border: 2px solid #34d399;
            overflow: hidden;
            background: white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            position: relative;
            cursor: pointer;
          ">
            <img 
              src="${imageUrl}" 
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                pointer-events: none;
              "
              alt="Catch marker"
            />
          </div>
          
          <!-- Spider Line - Línea de precisión -->
          <div style="
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            width: 1px;
            height: 15px;
            background: linear-gradient(to bottom, #059669, rgba(5, 150, 105, 0.3));
            opacity: 0.8;
          "></div>
          
          <!-- Punto de precisión -->
          <div style="
            position: absolute;
            top: 65px;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #059669;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          "></div>
        </div>
      `,
      iconSize: [50, 73],
      iconAnchor: [25, 69],
      popupAnchor: [0, -69],
    })
  }

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

  if (!L) {
    return (
      <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-emerald-200 md:min-h-[550px]">
        <div className="text-emerald-700">Cargando mapa...</div>
      </div>
    )
  }

  const icon = createCustomIcon(reportData.imagenes[0] || "/placeholder.png")
  const markerPosition: [number, number] = [reportData.lat || 40.4168, reportData.lng || -3.7038]

  return (
    <div className="flex h-full flex-col gap-3">
      <ChipTitle
        icon={Location05Icon}
        title="Ubicación de la captura"
        bg="bg-[#064e3b]"
        borderColor="border-emerald-400"
        iconColor="#5ee9aa"
        textColor="text-emerald-300"
      />
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:aspect-square">
        <MapContainer
          center={position}
          zoom={16}
          style={{ height: "100%", width: "100%", borderRadius: "1rem", overflow: "hidden", marginInline: "auto" }}
          className="z-0"
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics"
          />

          <MapRef setMapInstance={setMapInstance} />
          <MapController />
          {icon && (
            <Marker
              position={markerPosition}
              icon={icon}
            />
          )}
        </MapContainer>

        {/* Controles de zoom personalizados */}
        <div className="absolute right-4 bottom-4 z-[1000] flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#14141c] shadow-lg transition-all hover:bg-[#1f1f2e]"
            aria-label="Zoom in"
          >
            <HugeiconsIcon
              icon={PlusSignIcon}
              size={24}
              color="#7ed321"
              strokeWidth={2}
            />
          </button>
          <button
            onClick={handleZoomOut}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#14141c] shadow-lg transition-all hover:bg-[#1f1f2e]"
            aria-label="Zoom out"
          >
            <HugeiconsIcon
              icon={MinusSignIcon}
              size={24}
              color="#7ed321"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
