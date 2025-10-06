"use client"

import { useScreenWidthWeather } from "@/hooks/useScreenWidthWeather"
import dateFormater from "@/lib/DayFormater"
import { WeatherTypes } from "@/types"
import { FastWindIcon, Timer01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { memo, useMemo } from "react"
import { getWeatherCode } from "./weatherCode"
import WindDirectionIcon from "./wind"

function RefactorWeather({ data: weatherData }: { data: WeatherTypes }) {
  const data = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return weatherData.days.filter((day) => {
      const dayDate = new Date(day.datetime)
      dayDate.setHours(0, 0, 0, 0)
      return dayDate >= today
    })
  }, [weatherData.days])
  const { getContainerWidth } = useScreenWidthWeather()

  return (
    <section className="text-gray-900">
      <h2 className="mb-6 font-['BlackRolmer'] text-3xl font-black text-emerald-950 md:mb-6">Predicción Meteorológica</h2>

      <div
        style={getContainerWidth()}
        className="scroll-tab flex gap-4 overflow-x-auto pb-4 sm:w-[37rem] md:w-[50rem] lg:w-full"
      >
        {data.map((day, index) => (
          <div
            key={index}
            className="mb-1 flex h-full w-[15rem] shrink-0 flex-col items-center rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-950 p-4 text-white ring-1 shadow-md ring-slate-700/50 transition-all md:w-[17rem]"
          >
            {/* Fecha */}
            <p className="text-sm font-semibold tracking-wide text-emerald-200">
              {dateFormater({ datetime: day.datetime.toString() }).toUpperCase()}
            </p>
            <p className="mb-3 text-xs text-emerald-400">
              {new Date(day.datetime).toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "short",
              })}
            </p>

            {/* Temperaturas */}
            <div className="mb-2 flex w-full items-center justify-between rounded-lg bg-slate-700/40 px-2 py-1 text-sm font-semibold text-slate-100 shadow-inner md:text-base">
              <div className="flex items-center gap-1">
                <svg
                  fill="#38bdf8"
                  className="h-3 w-3 rotate-180 md:h-4 md:w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,21H3L12,3Z" />
                </svg>
                <p>{day.tempmin}º</p>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  fill="#ef4444"
                  className="h-3 w-3 md:h-4 md:w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M21,21H3L12,3Z" />
                </svg>
                <p>{day.tempmax}º</p>
              </div>
            </div>

            {/* Horas scrolleables */}
            <div className="scrollweather flex max-h-64 w-full flex-col gap-2 overflow-y-auto pr-1">
              {day.hours?.map((h, index) => (
                <div
                  key={index}
                  className="flex w-full items-center justify-between rounded-md bg-slate-400/15 px-2 py-1 text-sm text-emerald-50 backdrop-blur-sm md:text-base"
                >
                  <p className="w-12 text-sm text-slate-300">{h.datetime.slice(0, -3)}</p>
                  <img
                    src={getWeatherCode(h.icon)}
                    className="h-auto w-7"
                    alt="icono"
                  />
                  <p className="font-medium text-slate-200">{h.temp.toFixed(0)}º</p>
                  <div className="flex items-center gap-1">
                    <p className="text-sm text-slate-200">
                      {h.windspeed.toFixed(0)} <span className="text-[10px]">km/h</span>
                    </p>
                    <WindDirectionIcon degree={h.winddir} />
                  </div>
                </div>
              ))}
            </div>

            {/* Indicadores inferiores */}
            <div className="mt-3 w-full space-y-2 rounded-md border-t border-slate-700 pt-2">
              <div className="flex w-full items-center justify-between text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={FastWindIcon}
                    size={15}
                    color="#fff"
                    strokeWidth={1.5}
                  />
                  <span>Viento Máx</span>
                </div>
                <p className="text-emerald-200">
                  {day.windspeed.toFixed(0)} <span className="text-[10px]">km/h</span>
                </p>
              </div>

              <div className="flex w-full items-center justify-between text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={Timer01Icon}
                    size={15}
                    color="#fff"
                    strokeWidth={1.5}
                  />
                  <span>Presión</span>
                </div>
                <p className="text-slate-200">
                  {day.pressure} <span className="text-[10px]">hPa</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default memo(RefactorWeather)
