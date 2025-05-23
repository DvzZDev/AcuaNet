"use client"

import { useRef, useState } from "react"
import { Day, Hour, WeatherTypes } from "@/types"
import { getWeatherCode } from "./weatherCode"
import WindDirectionIcon from "./wind"
import dateFormater from "@/lib/DayFormater"

export default function TableWeather({ data: weatherData }: { data: WeatherTypes }) {
  const [showHours, setShowHours] = useState(false)
  const tableContainerRef = useRef<HTMLDivElement>(null)

  const today = new Date()

  // Ordena los días de forma dinámica
  const sortedDays = [...weatherData.days].sort((a, b) => {
    const aDate = new Date(a.datetime)
    const bDate = new Date(b.datetime)

    // Normaliza las fechas (para ignorar horas, minutos y segundos)
    const todayNormalized = new Date(today)
    todayNormalized.setHours(0, 0, 0, 0)

    const aNormalized = new Date(aDate)
    aNormalized.setHours(0, 0, 0, 0)

    const bNormalized = new Date(bDate)
    bNormalized.setHours(0, 0, 0, 0)

    // Los días futuros y el día actual tienen prioridad sobre los días pasados
    if (aNormalized < todayNormalized && bNormalized >= todayNormalized) return 1
    if (aNormalized >= todayNormalized && bNormalized < todayNormalized) return -1

    // Ordena por fecha (ascendente)
    return aNormalized.getTime() - bNormalized.getTime()
  })

  const hours = showHours
    ? [
        "06:00:00",
        "07:00:00",
        "08:00:00",
        "09:00:00",
        "10:00:00",
        "11:00:00",
        "12:00:00",
        "13:00:00",
        "14:00:00",
        "15:00:00",
        "16:00:00",
        "17:00:00",
        "18:00:00",
        "19:00:00",
        "20:00:00",
        "21:00:00",
        "22:00:00",
      ]
    : ["06:00:00", "09:00:00", "12:00:00", "15:00:00", "18:00:00", "21:00:00"]

  const scrollLeft = () => {
    tableContainerRef.current?.scrollBy({ left: -200, behavior: "smooth" })
  }

  const scrollRight = () => {
    tableContainerRef.current?.scrollBy({ left: 200, behavior: "smooth" })
  }

  // Render cells
  const renderHourCell = (hourData: Hour | undefined) => {
    if (!hourData) return <span className="text-sm uppercase">N/A</span>

    return (
      <>
        <span className="text-2xl">{getWeatherCode(hourData.icon)}</span>
        <span className="text-base font-black uppercase">{hourData.temp.toFixed()}º</span>
        <span className="flex items-center text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path d="M6 3v18" />
            <path d="M6 11l12 -1v-4l-12 -1" />
            <path d="M10 5.5v5" />
            <path d="M14 6v4" />
            <path d="M4 21h4" />
          </svg>
          {hourData.windspeed.toFixed(0)} <span className="text-xs">km/h</span>
        </span>
      </>
    )
  }

  return (
    <>
      <h3 className="text-2xl font-black text-green-950">Predicción Meteorológica</h3>

      <div>
        <div className="mb-3 flex justify-between">
          <button
            aria-label="Mostrar por horas"
            onClick={() => setShowHours(!showHours)}
            className="rounded-xl bg-[#275e56] p-2 text-sm text-green-50 hover:bg-emerald-700 active:scale-95"
          >
            {showHours ? "Mostrar Intervalos" : "Mostrar por horas"}
          </button>
          <div className="flex gap-2">
            <button
              aria-label="Desplazar a la izquierda"
              onClick={scrollLeft}
              className="rounded-full bg-[#275e56] p-2 text-sm leading-none text-green-50 hover:bg-emerald-700 active:scale-95"
            >
              &larr;
            </button>
            <button
              aria-label="Desplazar a la derecha"
              onClick={scrollRight}
              className="rounded-full bg-[#275e56] p-2 text-sm leading-none text-green-50 hover:bg-emerald-700 active:scale-95"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div
          ref={tableContainerRef}
          className="scroll-tab max-w-[22rem] overflow-x-auto rounded-xl sm:max-w-[38rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[75rem]"
        >
          <table className="w-full table-auto text-left">
            <thead className="sticky top-0 z-10 bg-[#275e56]">
              <tr>
                <th className="sticky left-0 z-10 border-r border-gray-700 bg-[#275e56]">
                  <div className="flex flex-col items-center justify-center" />
                </th>
                {sortedDays.map((day, index) => (
                  <th
                    key={index}
                    className="border-x border-gray-700"
                  >
                    <div className="my-2 flex w-[4rem] flex-col items-center justify-center md:w-[6rem]">
                      <div className="text-2xl">{getWeatherCode(day.icon)}</div>
                      <span className="sm:text-medium text-center text-sm font-semibold text-green-50 uppercase">
                        {dateFormater({ datetime: day.datetime })}
                      </span>
                      <span className="w-[6rem] py-1 text-center text-xs font-thin text-green-50 uppercase sm:py-0 sm:text-sm">
                        {new Date(day.datetime).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                      <span className="flex items-center justify-center gap-1 text-sm font-medium text-green-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          width={10}
                          height={10}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-caret-up"
                          viewBox="5.5 7.5 13 7"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                          ></path>
                          <path d="m18 14-6-6-6 6h12"></path>
                        </svg>
                        <span className="w-[20px] text-center text-base font-black">{day.tempmax.toFixed()}º</span>
                      </span>

                      <span className="flex items-center justify-center gap-1 text-sm font-medium text-green-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          width={10}
                          height={10}
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="rotate-180"
                          viewBox="5.5 7.5 13 7"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                          ></path>
                          <path d="m18 14-6-6-6 6h12"></path>
                        </svg>
                        <span className="w-[20px] text-center text-base font-black">{day.tempmin.toFixed()}º</span>
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-green-100 font-semibold text-emerald-950">
              {hours.map((time, hourIndex) => (
                <tr
                  key={hourIndex}
                  className="border-gray-700"
                >
                  <td className="sticky left-0 z-10 border-gray-700 bg-[#275e56] p-2 text-green-100">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-sm uppercase">{time.slice(0, 5)}</span>
                    </div>
                  </td>
                  {sortedDays.map((day, dayIndex) => (
                    <td
                      key={dayIndex}
                      className="border-x border-gray-700 p-2"
                    >
                      <div className="flex flex-col items-center justify-center">
                        {renderHourCell(day.hours.find((hour) => hour.datetime === time))}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
              {/* Filas similares para presión y viento */}
              {/* Fila de presión */}
              <tr className="border-gray-700">
                <td className="sticky left-0 z-10 border-b border-gray-700 bg-[#275e56] p-2">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm uppercase">
                      {/* Precipitaciones */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d3f4df"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                        <path d="M4 12a8 8 0 0 1 16 0z" />
                        <path d="M12 12v6a2 2 0 0 0 4 0" />
                      </svg>
                    </span>
                  </div>
                </td>
                {/* Precipitaciones */}
                {weatherData.days.map((day: Day, dayIndex: number) => (
                  <td
                    key={dayIndex}
                    className="border-x border-gray-700 p-2"
                  >
                    <div className="flex flex-col items-center justify-center">
                      {/* Se muestra la presión de cada día en la fila correspondiente */}
                      <span className="text-center text-sm md:text-sm">{day.precip.toFixed()} mm</span>
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-gray-700">
                <td className="sticky left-0 z-10 border-gray-700 bg-[#275e56] p-2">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm uppercase">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="#d3f4df"
                        stroke="#d3f4df"
                        viewBox="0 0 24 24"
                        strokeWidth={0.1}
                      >
                        <path d="M14 19v-1.29a7.89 7.89 0 0 0 3.65-2.06A8.05 8.05 0 0 0 19.93 11a8.24 8.24 0 0 0 .07-1 8.26 8.26 0 0 0-.07-1 8 8 0 0 0-1.28-3.44 4.94 4.94 0 0 0-.35-.45 7.55 7.55 0 0 0-.64-.74h-.06A7.73 7.73 0 0 0 12.05 2H12a8 8 0 0 0-1.54.13 8 8 0 0 0-4.1 2.19 9.32 9.32 0 0 0-.65.76 8.11 8.11 0 0 0-1.56 3.36c0 .18 0 .37-.07.56A8.06 8.06 0 0 0 4 10v.07a7.89 7.89 0 0 0 3.54 6.6A7.85 7.85 0 0 0 10 17.73V19H2v3h20v-3Zm-3.17-3.12a6 6 0 0 1-4.71-4.71 1 1 0 0 1 0-.17H7V9h-.9a6 6 0 0 1 .36-1.3 5.79 5.79 0 0 1 .66-1.16l.64.63 1.41-1.41-.64-.64.14-.12A6 6 0 0 1 11 4.09V5h2v-.91a6.19 6.19 0 0 1 2.47 1l-.64.64 1.41 1.41.64-.64a6.19 6.19 0 0 1 1 2.47H17v2h.91a6 6 0 0 1-3.61 4.54 5.9 5.9 0 0 1-3.47.37Z" />
                        <path d="M10.5 13a1.39 1.39 0 0 0 .5 1.05 1.45 1.45 0 0 0 2.1 0 1.39 1.39 0 0 0 .4-1.05c-.17-1.9-1.5-7.5-1.5-7.5s-1.33 5.6-1.5 7.5Z" />
                      </svg>
                    </span>
                  </div>
                </td>
                {/* Presion */}
                {weatherData.days.map((day: Day, dayIndex: number) => (
                  <td
                    key={dayIndex}
                    className="border-x border-gray-700 p-2"
                  >
                    <div className="flex flex-col items-center justify-center">
                      {/* Se muestra la presión de cada día en la fila correspondiente */}
                      <span className="text-center text-sm md:text-sm">{day.pressure.toFixed()} hPa</span>
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-gray-700">
                <td className="sticky left-0 z-10 border-gray-700 bg-[#275e56] p-2">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm uppercase">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d3f4df"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        />
                        <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                        <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                        <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
                      </svg>
                    </span>
                  </div>
                </td>
                {/* Viento */}
                {weatherData.days.map((day: Day, dayIndex: number) => (
                  <td
                    key={dayIndex}
                    className="border-x border-gray-700 p-2"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <span className="flex items-center justify-center gap-1 text-center text-sm sm:gap-2 md:text-sm">
                        {WindDirectionIcon({ degree: day.winddir })}
                      </span>
                      <span className="flex items-center justify-center gap-1 text-center text-sm sm:gap-2 md:text-sm">
                        {day.windspeed.toFixed()} km/h
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
