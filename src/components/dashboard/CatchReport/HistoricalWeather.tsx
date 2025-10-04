import Image from "next/image"
import { useMemo } from "react"
import { findClosestHour } from "../../../hooks/findClosestHour"
import { WeatherData } from "../../../types"
import { getWeatherCode } from "../../weather/weatherCode"

interface HistoricalWeatherProps {
  weatherData: WeatherData
  fecha: string
}

export default function HistoricalWeather({ weatherData, fecha }: HistoricalWeatherProps) {
  const closestHourData = useMemo(() => {
    return findClosestHour(weatherData, fecha)
  }, [weatherData, fecha])

  return (
    <div className="h-full w-full flex-shrink-0 rounded-2xl bg-emerald-100">
      <div className="h-fit w-full rounded-2xl bg-pink-50">
        {/* Sección de hora específica */}
        <div className="w-full gap-2 border-b border-pink-600 p-4">
          <h4 className="text-sm font-semibold text-pink-800">
            A las{" "}
            {new Date(fecha).toLocaleTimeString("es-ES", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
            la temperatura era:
          </h4>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              {closestHourData?.icon && (
                <div className="rounded-xl bg-pink-950 p-2">
                  <Image
                    src={getWeatherCode(closestHourData.icon)}
                    alt="Weather icon"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>
              )}
              <div>
                <p className="text-xl font-semibold text-pink-950">
                  {closestHourData?.temp ? `${closestHourData.temp}°C` : "N/A"}
                </p>
                <p className="text-sm text-pink-600">{closestHourData?.conditions || "No hay datos disponibles"}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-pink-600"
                >
                  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                  <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                  <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
                </svg>
                <span className="text-base text-pink-600">
                  {closestHourData?.windspeed ? `${closestHourData.windspeed} km/h` : "N/A"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-pink-600"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-base text-pink-600">
                  {closestHourData?.pressure ? `${closestHourData.pressure} hPa` : "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de condiciones del día */}
        <div className="w-full gap-1 p-4">
          <h4 className="text-sm font-semibold text-pink-800">Condiciones previstas para este día:</h4>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-pink-950 p-2">
                <Image
                  src={weatherData?.days?.[0]?.icon ? getWeatherCode(weatherData.days[0].icon) : "/weather/soleadop.png"}
                  alt="Weather icon"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <div>
                <p className="text-xl font-semibold text-pink-950">
                  {weatherData?.days?.[0]?.tempmax ? `${weatherData.days[0].tempmax}°C` : "N/A"} /{" "}
                  {weatherData?.days?.[0]?.tempmin ? `${weatherData.days[0].tempmin}°C` : "N/A"}
                </p>
                <p className="text-sm text-pink-600">Máx / Mín previstas</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-pink-600"
                >
                  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
                  <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
                  <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
                </svg>
                <span className="text-base text-pink-600">
                  {weatherData?.days?.[0]?.windspeed ? `${weatherData.days[0].windspeed} km/h` : "N/A"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-pink-600"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-base text-pink-600">
                  {weatherData?.days?.[0]?.pressure ? `${weatherData.days[0].pressure} hPa` : "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
