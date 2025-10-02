"use client"

import { CatchReportDB } from "@/types"
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"

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

export default function LastPinMap({ reportData }: { reportData: CatchReportDB[] }) {
  console.log("Report Data in LastPinMap:", reportData)
  const position: [number, number] = [reportData[0]?.lat || 40.4168, reportData[0]?.lng || -3.7038]
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
            top: 63px;
            left: 50%;
            transform: translateX(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #059669;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          "></div>
        </div>
      `,
      iconSize: [50, 71],
      iconAnchor: [25, 71],
      popupAnchor: [0, -71],
    })
  }

  const createDefaultIcon = () => {
    if (!L) return null
    return L.divIcon({
      className: "custom-marker",
      html: `
        <div style="position: relative; touch-action: manipulation;">
          <!-- Main Marker -->
          <div style="
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 3px solid #059669;
            background: linear-gradient(135deg, #059669, #0d9488);
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          ">
            <span style="
              font-size: 20px;
              color: white;
              pointer-events: none;
            ">🎣</span>
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
            top: 63px;
            left: 50%;
            transform: translateX(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #059669;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          "></div>
        </div>
      `,
      iconSize: [50, 71],
      iconAnchor: [25, 71],
      popupAnchor: [0, -71],
    })
  }

  const markerIcon =
    reportData[0]?.imagenes && reportData[0].imagenes.length > 0
      ? createCustomIcon(reportData[0].imagenes[0])
      : createDefaultIcon()

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
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-green-100">
        <div className="text-emerald-700">Cargando mapa...</div>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-[300px] w-full md:min-h-[400px]">
      <MapContainer
        center={position}
        zoom={position ? 13 : 2}
        scrollWheelZoom={false}
        zoomControl={false}
        touchZoom={true}
        doubleClickZoom={true}
        dragging={true}
        className="h-full min-h-[300px] w-full rounded-lg border-green-900/30 bg-green-100 md:min-h-[400px]"
      >
        <MapController />
        <MapRef setMapInstance={setMapInstance} />
        {markerIcon && (
          <Marker
            position={position}
            icon={markerIcon}
          />
        )}
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
    </div>
  )
}
