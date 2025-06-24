"use client"

import { memo } from "react"
import { WeatherTypes } from "@/types"
import TableWeather from "./TableWeather"

interface WeatherWrapperProps {
  weatherData: WeatherTypes | null
  embalseName: string
}

function WeatherWrapper({ weatherData, embalseName }: WeatherWrapperProps) {
  if (!weatherData) {
    console.warn(`No weather data available for ${embalseName}`)
    return (
      <section className="rounded-lg border border-orange-200 bg-orange-50 p-4">
        <h2 className="mb-2 text-xl font-bold text-orange-800">Predicción Meteorológica</h2>
        <p className="text-orange-700">No se pudieron cargar los datos meteorológicos en este momento.</p>
      </section>
    )
  }

  if (!weatherData.days || weatherData.days.length === 0) {
    console.warn(`Invalid weather data structure for ${embalseName}:`, weatherData)
    return (
      <section className="rounded-lg border border-orange-200 bg-orange-50 p-4">
        <h2 className="mb-2 text-xl font-bold text-orange-800">Predicción Meteorológica</h2>
        <p className="text-orange-700">Los datos meteorológicos no están disponibles temporalmente.</p>
      </section>
    )
  }

  return <TableWeather data={weatherData} />
}

export default memo(WeatherWrapper)
