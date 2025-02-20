"use client"

import { memo, useMemo } from "react"
import { WeatherTypes } from "@/types"
import { getWeatherCode } from "./weatherCode"
import WindDirectionIcon from "./wind"
import dateFormater from "@/lib/DayFormater"

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

  const hours = useMemo(
    () => ["06:00:00", "08:00:00", "10:00:00", "12:00:00", "14:00:00", "16:00:00", "18:00:00", "20:00:00", "22:00:00"],
    []
  )

  return (
    <section className="">
      <h2 className="mb-6 text-2xl font-black text-green-950 md:mb-6">Predicción Meteorológica</h2>
      <div className="scroll-tab flex w-[21rem] gap-3 overflow-x-scroll text-white sm:w-[37rem] md:w-[50rem] lg:w-full">
        {data.map((day, index) => (
          <div
            key={index}
            className="mb-1 flex h-full w-[15rem] shrink-0 flex-col items-center rounded-md bg-gradient-to-br from-teal-900 via-teal-950 to-teal-900 p-3 md:w-[17rem]"
          >
            <p className="font-bold">{dateFormater({ datetime: day.datetime.toString() }).toUpperCase()}</p>
            <p className="text-sm text-emerald-200">
              {new Date(day.datetime).toLocaleDateString("es-ES", { day: "2-digit", month: "short" })}
            </p>
            <div className="flex w-full items-center justify-between text-sm md:text-base">
              <div className="flex items-center justify-center gap-1">
                <svg
                  fill="#09f"
                  className="h-3 w-3 rotate-180 md:h-4 md:w-4"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21,21H3L12,3Z" />
                </svg>
                <p>{day.tempmin}º</p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <svg
                  fill="red"
                  className="h-3 w-3 md:h-4 md:w-4"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21,21H3L12,3Z" />
                </svg>
                <p>{day.tempmax}º</p>
              </div>
            </div>
            {day.hours
              .filter((h) => hours.includes(h.datetime))
              .map((h, index) => (
                <div
                  key={index}
                  className="flex w-full items-center justify-between gap-3 text-sm text-emerald-50 md:text-base"
                >
                  <p className="text-sm text-emerald-50"> {h.datetime.slice(0, -3)} </p>
                  <img
                    loading="lazy"
                    src={getWeatherCode(h.icon)}
                    className="h-auto w-8"
                    alt="ci"
                  />
                  <p> {h.temp.toFixed(0)}º </p>
                  <div className="flex items-center gap-1">
                    <p>
                      {" "}
                      {h.windspeed.toFixed(0)} <span className="text-[11px]">km/h</span>{" "}
                    </p>
                    <WindDirectionIcon degree={h.winddir} />
                  </div>
                </div>
              ))}

            <div className="flex w-full items-center justify-between text-sm md:text-base">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 64 64"
                  className="h-8 w-8"
                >
                  <defs>
                    <linearGradient
                      id="uniqueGradientA"
                      x1="27.56"
                      x2="38.27"
                      y1="17.64"
                      y2="36.19"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0"
                        stopColor="#d4d7dd"
                      />
                      <stop
                        offset="0.45"
                        stopColor="#d4d7dd"
                      />
                      <stop
                        offset="1"
                        stopColor="#bec1c6"
                      />
                    </linearGradient>
                    <linearGradient
                      id="uniqueGradientB"
                      x1="19.96"
                      x2="31.37"
                      y1="29.03"
                      y2="48.8"
                      xlinkHref="#uniqueGradientA"
                    />
                  </defs>
                  <path
                    fill="none"
                    stroke="url(#uniqueGradientA)"
                    strokeDasharray="35 22"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M43.64 20a5 5 0 113.61 8.46h-35.5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      dur="2s"
                      repeatCount="indefinite"
                      values="-57; 57"
                    />
                  </path>
                  <path
                    fill="none"
                    stroke="url(#uniqueGradientB)"
                    strokeDasharray="24 15"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="3"
                    d="M29.14 44a5 5 0 103.61-8.46h-21"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      begin="-1.5s"
                      dur="2s"
                      repeatCount="indefinite"
                      values="-39; 39"
                    />
                  </path>
                </svg>
                <span>Viento Máx</span>
              </div>
              <p>
                {day.windspeed.toFixed(0)} <span className="text-[10px]">km/h</span>{" "}
              </p>
            </div>
            <div className="flex w-full items-center justify-between text-sm md:text-base">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="h-8 w-8"
                >
                  <defs>
                    <linearGradient
                      id="uniqueGradientA"
                      x1={23}
                      x2={41}
                      y1={16.41}
                      y2={47.59}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset={0}
                        stopColor="#6b7280"
                      />
                      <stop
                        offset={0.45}
                        stopColor="#6b7280"
                      />
                      <stop
                        offset={1}
                        stopColor="#374151"
                      />
                    </linearGradient>
                  </defs>
                  <circle
                    cx={32}
                    cy={32}
                    r={18}
                    fill="url(#uniqueGradientA)"
                    stroke="#e5e7eb"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                  />
                  <path
                    fill="none"
                    stroke="#9ca3af"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M32 25v-6m13.5 13h-6M25 32h-6m22.5-8.5-3 3m-13 0-3-3m16 14 3 3m-19 0 3-3"
                  />
                  <circle
                    cx={32}
                    cy={32}
                    r={3}
                    fill="#ef4444"
                  />
                  <path
                    fill="none"
                    stroke="#ef4444"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={2}
                    d="M32 35.5v-15"
                  >
                    <animateTransform
                      attributeName="transform"
                      dur="9s"
                      repeatCount="indefinite"
                      type="rotate"
                      values="30 32 32; 55 32 32; 45 32 32; 55 32 32; 30 32 32"
                    />
                  </path>
                </svg>
                <span>Presión</span>
              </div>
              <p>
                {day.pressure} <span className="text-[10px]">hPa</span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default memo(RefactorWeather)
