"use client"

import { ViewIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Moon } from "lunarphase-js"

interface LunarCalendarProps {
  fecha: string
}

function getMoonPhaseName(age: number): string {
  const normalizedAge = age % 29.5

  if (normalizedAge < 1.84566) return "Luna Nueva"
  if (normalizedAge < 7.38264) return "Creciente"
  if (normalizedAge < 9.2283) return "Cuarto Creciente"
  if (normalizedAge < 14.76528) return "Gibosa Creciente"
  if (normalizedAge < 16.61094) return "Luna Llena"
  if (normalizedAge < 22.14792) return "Gibosa Menguante"
  if (normalizedAge < 23.99358) return "Cuarto Menguante"
  return "Menguante"
}

function getFishActivityLevel(age: number): { level: string; description: string } {
  const normalizedAge = age % 29.5
  const distanceToNewMoon = Math.min(normalizedAge, 29.5 - normalizedAge)
  const distanceToFullMoon = Math.abs(normalizedAge - 14.75)
  const minDistance = Math.min(distanceToNewMoon, distanceToFullMoon)

  if (minDistance <= 1.5) {
    return { level: "alto", description: "alto" }
  } else if (minDistance <= 3) {
    return { level: "medio", description: "medio" }
  } else {
    return { level: "bajo", description: "bajo" }
  }
}

function MoonVisibility({ age }: { age: number }) {
  const illumination = (1 - Math.cos((2 * Math.PI * age) / 29.5)) / 2
  const percentage = Math.round(illumination * 100)
  return percentage
}

export default function LunarCalendar({ fecha }: LunarCalendarProps) {
  const date = new Date(fecha)
  const phaseEmoji = Moon.lunarPhaseEmoji(date)
  const lunarAge = Moon.lunarAge(date)
  const phaseName = getMoonPhaseName(lunarAge)
  const visibility = MoonVisibility({ age: lunarAge })
  const fishActivity = getFishActivityLevel(lunarAge)

  const formattedDate = date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <div className="h-full w-full rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="flex flex-col">
        {/* Contenido */}
        <div className="flex flex-col">
          <p className="p-3 text-sm leading-relaxed text-amber-900">
            El día <span className="font-bold">{formattedDate}</span> hubo una fase lunar de{" "}
            <span className="font-bold">{phaseName}</span>, y el nivel de actividad de los peces fue{" "}
            <span className="font-bold">{fishActivity.description}</span>.
          </p>

          {/* Indicadores visuales */}
          <div className="flex items-center justify-center gap-6 border-t border-orange-400 p-3">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">{phaseEmoji}</span>
              <span className="text-xs font-semibold text-amber-800">{phaseName}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex items-start gap-1">
                <HugeiconsIcon
                  size="20"
                  color="#92400e"
                  icon={ViewIcon}
                />
                <span className="text-4xl leading-none font-bold text-amber-900">{visibility}%</span>
              </div>
              <span className="text-xs font-semibold text-amber-800">Visibilidad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
