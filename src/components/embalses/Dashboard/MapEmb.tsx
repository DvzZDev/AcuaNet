import { useEffect } from "react"
import L from "leaflet"
import Script from "next/script"

declare global {
  interface Window {
    windyInit: any
  }
}

export default function MapEmb({ coords }: { coords: { lat: number; lon: number } }) {
  useEffect(() => {
    const mapInstance: L.Map | null = null

    return () => {
      // Limpieza al desmontar el componente
      if (mapInstance) {
        // @ts-expect-error mapInstance no tiene el método remove
        mapInstance.remove()
      }
    }
  }, [])

  return (
    <>
      <Script
        src="https://api.windy.com/assets/map-forecast/libBoot.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && window.windyInit) {
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
              const mapInstance = L.map("windy", {
                preferCanvas: true,
                zoomControl: false,
                scrollWheelZoom: false,
              })
              mapInstance.setView([options.lat, options.lon], options.zoom)
            })
          } else {
            console.error("windyInit is not available")
          }
        }}
        onError={() => {
          console.error("Failed to load Windy script")
        }}
      />
      <div
        id="windy"
        style={{ width: "100%", height: "400px", zIndex: 0, borderRadius: "0.375rem" }}
      ></div>
    </>
  )
}
