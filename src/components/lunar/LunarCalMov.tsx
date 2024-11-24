"use client"

import { JSX, useState } from "react"
import { Moon } from "lunarphase-js"

type LunarDay = {
  date: Date
  phase: string
  phaseEmoji: string
  age: number
  agePercent: number
  activityIcon: string // Nueva propiedad para iconos de actividad de los peces
}

const LunarCalendar = () => {
  const currentDate = new Date() // Captura la fecha actual una vez
  const [startMonth, setStartMonth] = useState(currentDate.getMonth())
  const [startYear, setStartYear] = useState(currentDate.getFullYear())

  const translations = {
    phases: {
      New: "Nueva",
      "Waxing Crescent": "Creciente",
      "First Quarter": "1er Cuarto",
      "Waxing Gibbous": "Gibosa",
      Full: "Llena",
      "Waning Gibbous": "Meng Gibosa",
      "Last Quarter": "Últ Cuarto",
      "Waning Crescent": "Meng Creciente",
    },
  }

  const fishActivityIcons = {
    New: "🐟🐟🐟",
    "Waxing Crescent": "🐟🐟🐟",
    "First Quarter": "🐟🐟",
    "Waxing Gibbous": "🐟🐟",
    Full: "🐟",
    "Waning Gibbous": "🐟🐟",
    "Last Quarter": "🐟",
    "Waning Crescent": "🐟🐟🐟",
  }

  const generateLunarData = (month: number, year: number): LunarDay[] => {
    const lunarData: LunarDay[] = []
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day)
      const phase = Moon.lunarPhase(date)
      const phaseEmoji = Moon.lunarPhaseEmoji(date)
      const age = Moon.lunarAge(date)
      const agePercent = Moon.lunarAgePercent(date) * 100

      lunarData.push({
        date,
        phase: translations.phases[phase] || phase,
        phaseEmoji,
        age,
        agePercent,
        activityIcon: fishActivityIcons[phase],
      })
    }

    return lunarData
  }

  const getLunarDataForMonth = (): LunarDay[] => {
    return generateLunarData(startMonth, startYear)
  }

  const handleNextMonth = () => {
    let newMonth = startMonth + 1
    let newYear = startYear
    if (newMonth > 11) {
      newMonth = 0
      newYear++
    }
    setStartMonth(newMonth)
    setStartYear(newYear)
  }

  const handlePreviousMonth = () => {
    let newMonth = startMonth - 1
    let newYear = startYear
    if (newMonth < 0) {
      newMonth = 11
      newYear--
    }
    setStartMonth(newMonth)
    setStartYear(newYear)
  }

  const generateCalendar = () => {
    const lunarDays = getLunarDataForMonth()
    const daysInMonth = new Date(startYear, startMonth + 1, 0).getDate()
    const firstDayOfMonth = (new Date(startYear, startMonth, 1).getDay() + 6) % 7 // Cambia el primer día a lunes

    const calendarRows: JSX.Element[] = []
    const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

    // Agregar cabecera de días
    const weekHeader = (
      <div className="font-NecoBold grid grid-cols-7 rounded-2xl text-center text-xl font-black text-[#416750]">
        {weekDays.map((day, index) => (
          <div
            key={day}
            className={`pb-2 ${index !== 6 ? "border-r border-[#1b7b6e]" : ""}`}
          >
            {day}
          </div>
        ))}
      </div>
    )
    calendarRows.push(<div key="week-header">{weekHeader}</div>)

    // Rellenar el calendario
    let dayCount = 1
    const isLastWeek = (i: number, daysInMonth: number, firstDayOfMonth: number) => {
      const totalWeeks = Math.ceil((daysInMonth + firstDayOfMonth) / 7)
      return i === totalWeeks - 1
    }

    // Dentro de la función generateCalendar
    for (let i = 0; i < 6; i++) {
      const week = []
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(
            <div
              className="border-r border-[#1b7b6e]"
              key={`empty-${i}-${j}`}
            ></div>
          ) // Espacios vacíos para días previos
        } else if (dayCount > daysInMonth) {
          week.push(<div key={j}></div>)
        } else {
          const lunarDay = lunarDays.find((day) => day.date.getDate() === dayCount && day.date.getMonth() === startMonth)
          const isToday = lunarDay?.date.toDateString() === currentDate.toDateString()
          week.push(
            <div
              key={j}
              className={`w-full border-[#1b7b6e] bg-green-50 px-2 py-1 text-center font-semibold text-black ${
                isToday ? "bg-[#1dd38d80] text-black" : "bg-green-50 text-black"
              } ${(j + 1) % 7 !== 0 ? "border-r" : ""} ${j >= 7 ? "border-t" : ""} ${
                !isLastWeek(i, daysInMonth, firstDayOfMonth) ? "border-b" : ""
              }`}
            >
              <p className="text-left font-black">{dayCount}</p>
              <p className="text-3xl">{lunarDay?.phaseEmoji}</p>
              <p className="text-left text-xs">{lunarDay?.phase}</p>
              <p className="text-left text-xs">{lunarDay?.activityIcon}</p>
            </div>
          )
          dayCount++
        }
      }
      calendarRows.push(
        <div
          key={i}
          className="grid grid-cols-7"
        >
          {week}
        </div>
      )
    }

    return calendarRows
  }

  const lunarDataForDisplay = getLunarDataForMonth() // Genera datos una vez

  return (
    <section className="flex items-center justify-center">
      <div className="max-w-[70rem] h-full overflow-hidden rounded-lg shadow-md p-6 md:bg-green-100">
        <div className="flex items-center justify-between pb-3">
          <button
            onClick={handlePreviousMonth}
            className="rounded-full bg-[#93edb3] p-1 text-white transition hover:bg-emerald-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#052e16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="rotate-180"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M5 12h.5m3 0h1.5m3 0h6" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </button>
          <h2 className="font-NecoBold mb-7 px-5 text-center text-2xl font-bold uppercase text-green-950 md:text-4xl">
            {new Date(startYear, startMonth)
              .toLocaleString("es-ES", {
                month: "long",
                year: "numeric",
              })
              .replace(/^\w/, (c) => c.toUpperCase())}{" "}
          </h2>
          <button
            onClick={handleNextMonth}
            className="rounded-full bg-[#93edb3] p-1 text-white transition hover:bg-emerald-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#052e16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M5 12h.5m3 0h1.5m3 0h6" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </button>
        </div>
        <div
          key="calendar-desktop-view"
          className="hidden bg-green-100 md:block"
        >
          {generateCalendar()}
        </div>{" "}
        {/* Para PC */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {/* Para móviles */}
          {lunarDataForDisplay.map((lunarDay, index) => {
            const isToday = lunarDay.date.toDateString() === currentDate.toDateString() // Verifica si es el día actual
            return (
              <div
                key={index}
                className={`col-span-1 gap-2 rounded-lg border-1 border-[#1b7b6e77] p-4 shadow-md ${
                  isToday ? "bg-[#1dd38d80] text-black" : "bg-transparent text-[#052e16]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <strong className="text-nowrap text-xs">
                    {lunarDay.date
                      .toLocaleDateString("es-ES", {
                        weekday: "short",
                        month: "short",
                        year: "numeric",
                        day: "numeric",
                      })
                      .replace(/^\w|\s\w/g, (c) => c.toUpperCase())}
                  </strong>
                  <span className="ml-2 text-xl">{lunarDay.phaseEmoji}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold">Fase:</span>{" "}
                  <span className="text-xs font-semibold text-[#3d7764]">{lunarDay.phase}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold">Actividad:</span>{" "}
                  <span className="text-xs text-[#3d7764]">{lunarDay.activityIcon}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LunarCalendar
