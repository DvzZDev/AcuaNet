import { useEffect } from "react"
import L from "leaflet"

export default function MapEmb({ coords }: { coords: { lat: number; lon: number } }) {
  useEffect(() => {
    let mapInstance: L.Map | null = null

    if (typeof window !== "undefined") {
      const initializeMap = () => {
        if (!window.windyInit) {
          console.error("windyInit is not available")
          return
        }

        const options = {
          key: process.env.NEXT_PUBLIC_WINDY,
          lat: coords.lat,
          lon: coords.lon,
          zoom: 11,
          scrollZoom: false,
          scrollWheelZoom: false,
        }

        // @ts-expect-error: windyInit is not typed
        windyInit(options, () => {
          if (mapInstance) {
            mapInstance.remove() // Elimina la instancia previa si existe
          }
          // Crea una nueva instancia del mapa
          mapInstance = L.map("windy", { preferCanvas: true, zoomControl: false, scrollWheelZoom: false })
          mapInstance.setView([options.lat, options.lon], options.zoom)
        })
      }

      const windyScript = document.querySelector("script[src='https://api.windy.com/assets/map-forecast/libBoot.js']")
      if (windyScript) {
        // @ts-expect-error: windyInit is not typed
        windyScript.onload = initializeMap
      } else {
        const script = document.createElement("script")
        script.src = "https://api.windy.com/assets/map-forecast/libBoot.js"
        script.async = true
        script.onload = initializeMap
        script.onerror = () => {
          console.error("Failed to load Windy script")
        }
        document.body.appendChild(script)
      }

      return () => {
        if (mapInstance) {
          mapInstance.remove()
        }
      }
    }
  }, [coords.lat, coords.lon])

  return (
    <>
      <div
        id="windy"
        style={{ width: "100%", height: "400px", zIndex: 0, borderRadius: "0.375rem" }}
      ></div>
    </>
  )
}
