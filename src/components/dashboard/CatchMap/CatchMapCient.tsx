"use client"

import { CatchReportDB } from "@/types"
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import "leaflet/dist/leaflet.css"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-cluster"
import "react-leaflet-cluster/dist/assets/MarkerCluster.css"
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css"

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

export default function CatchMapClient({ reportData }: { reportData: CatchReportDB[] }) {
  const router = useRouter()

  const position: [number, number] = [reportData[0]?.lat || 40.4168, reportData[0]?.lng || -3.7038]
  const L = useLeaflet()
  const [mapInstance, setMapInstance] = useState<any>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof document !== "undefined") {
      const style = document.createElement("style")
      style.textContent = `
        .custom-cluster-marker {
          background: none !important;
          border: none !important;
        }
        
        .cluster-marker {
          background: linear-gradient(135deg, #059669, #0d9488);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          border: 3px solid white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          width: 40px;
          height: 40px;
          line-height: 1;
        }
        
        .custom-cluster-marker:hover .cluster-marker {
          background: linear-gradient(135deg, #047857, #0f766e);
          transform: scale(1.1);
          transition: all 0.2s ease;
        }
      `
      document.head.appendChild(style)

      return () => {
        document.head.removeChild(style)
      }
    }
  }, [])

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const createCustomIcon = (imageUrl: string, catchId: string) => {
    if (!L) return null
    return L.divIcon({
      className: "custom-marker",
      html: `
        <div style="position: relative; touch-action: manipulation;" data-catch-id="${catchId}">
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
            transition: transform 0.2s;
          "
          onmouseover="this.style.transform='scale(1.1)'"
          onmouseout="this.style.transform='scale(1)'">
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

  const createDefaultIcon = (catchId: string) => {
    if (!L) return null
    return L.divIcon({
      className: "custom-marker",
      html: `
        <div style="position: relative; touch-action: manipulation;" data-catch-id="${catchId}">
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
            transition: transform 0.2s;
          "
          onmouseover="this.style.transform='scale(1.1)'"
          onmouseout="this.style.transform='scale(1)'">
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

  const getMarkerIcon = (report: CatchReportDB) => {
    if (report.imagenes && report.imagenes.length > 0) {
      return createCustomIcon(report.imagenes[0], report.catch_id)
    }
    return createDefaultIcon(report.catch_id)
  }

  const handleMarkerClick = (catchId: string) => {
    router.push(`/account/dashboard/catchreport/${catchId}`)
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const markerElement = target.closest("[data-catch-id]") as HTMLElement
      if (markerElement) {
        const catchId = markerElement.getAttribute("data-catch-id")
        if (catchId) {
          handleMarkerClick(catchId)
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [router])

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
      <div className="flex h-full items-center justify-center overflow-hidden rounded-2xl border border-emerald-300 bg-green-50">
        <div className="text-emerald-700">
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="0"
              fill="#5ee9b5"
            >
              <animate
                id="spinner_0Nme"
                begin="0;spinner_ITag.begin+0.4s"
                attributeName="r"
                calcMode="spline"
                dur="1.2s"
                values="0;11"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
              <animate
                begin="0;spinner_ITag.begin+0.4s"
                attributeName="opacity"
                calcMode="spline"
                dur="1.2s"
                values="1;0"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
            </circle>
            <circle
              cx="12"
              cy="12"
              r="0"
            >
              <animate
                id="spinner_f83A"
                begin="spinner_0Nme.begin+0.4s"
                attributeName="r"
                calcMode="spline"
                dur="1.2s"
                values="0;11"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
              <animate
                begin="spinner_0Nme.begin+0.4s"
                attributeName="opacity"
                calcMode="spline"
                dur="1.2s"
                values="1;0"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
            </circle>
            <circle
              cx="12"
              cy="12"
              r="0"
            >
              <animate
                id="spinner_ITag"
                begin="spinner_0Nme.begin+0.8s"
                attributeName="r"
                calcMode="spline"
                dur="1.2s"
                values="0;11"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
              <animate
                begin="spinner_0Nme.begin+0.8s"
                attributeName="opacity"
                calcMode="spline"
                dur="1.2s"
                values="1;0"
                keySplines=".52,.6,.25,.99"
                fill="freeze"
              />
            </circle>
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-[400px] w-full md:min-h-[550px]">
      <MapContainer
        center={position}
        zoom={position ? (isMobile ? 2 : 4) : 2}
        maxZoom={18}
        minZoom={6}
        scrollWheelZoom={false}
        zoomControl={false}
        touchZoom={true}
        doubleClickZoom={true}
        dragging={true}
        className="z-0 !h-[400px] rounded-2xl border-green-900/30 bg-green-100 md:min-h-[550px]"
      >
        <MapController />
        <MapRef setMapInstance={setMapInstance} />

        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={(cluster: any) => {
            const count = cluster.getChildCount()
            return L?.divIcon({
              html: `<div class="cluster-marker">${count}</div>`,
              className: "custom-cluster-marker",
              iconSize: [40, 40],
            })
          }}
        >
          {reportData.map(
            (report, i) =>
              report.lat &&
              report.lng && (
                <Marker
                  position={[report.lat, report.lng]}
                  key={i}
                  icon={getMarkerIcon(report)}
                />
              )
          )}
        </MarkerClusterGroup>
        <TileLayer
          attribution='Map tiles by <a href="https://www.esri.com/">Esri</a>, &copy; OpenStreetMap contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
      </MapContainer>

      <div className="absolute right-2 bottom-2 z-[1000] flex flex-col gap-2 md:right-4 md:bottom-4">
        <button
          onClick={handleZoomIn}
          className="touch-manipulation rounded-xl border bg-[#14141c] p-3 shadow-lg transition-colors hover:bg-[#1f1f2e] md:p-2"
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
          className="touch-manipulation rounded-xl border bg-[#14141c] p-3 shadow-lg transition-colors hover:bg-[#1f1f2e] md:p-2"
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
