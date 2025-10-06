"use client"

import { MoonVisibility } from "@/lib/MoonVisibility"
import { Moon } from "lunarphase-js"
import { JSX, useState } from "react"

type LunarDay = {
  date: Date
  phase: string
  phaseEmoji: string
  age: number
  agePercent: number
  activityIcon: string
}

// Traducciones y actividad de peces
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

// Genera datos lunares
const generateLunarData = (month: number, year: number): LunarDay[] => {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  return Array.from({ length: daysInMonth }, (_, day) => {
    const date = new Date(year, month, day + 1)
    const phase = Moon.lunarPhase(date)
    return {
      date,
      phase: translations.phases[phase] || phase,
      phaseEmoji: Moon.lunarPhaseEmoji(date),
      age: Moon.lunarAge(date),
      agePercent: Moon.lunarAgePercent(date) * 100,
      activityIcon: fishActivityIcons[phase],
    }
  })
}

// Componente Vista de Escritorio
const DesktopView = ({ lunarDays, startYear, startMonth }: { lunarDays: LunarDay[]; startYear: number; startMonth: number }) => {
  const daysInMonth = new Date(startYear, startMonth + 1, 0).getDate()
  const firstDayOfMonth = (new Date(startYear, startMonth, 1).getDay() + 6) % 7
  const currentDate = new Date()

  const generateCalendar = () => {
    let dayCount = 1
    const calendarRows: JSX.Element[] = []
    const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

    // Cabecera
    calendarRows.push(
      <div
        key="week-header"
        className="mb-3 grid grid-cols-7 gap-2 text-center"
      >
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-sm font-semibold tracking-wide text-slate-600"
          >
            {day}
          </div>
        ))}
      </div>
    )

    // Semanas
    for (let i = 0; i < 6; i++) {
      const week = []
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(<div key={`empty-${i}-${j}`}></div>)
        } else if (dayCount > daysInMonth) {
          week.push(<div key={`empty-${i}-${j}`}></div>)
        } else {
          const lunarDay = lunarDays.find((day) => day.date.getDate() === dayCount && day.date.getMonth() === startMonth)
          const isToday = lunarDay?.date.toDateString() === currentDate.toDateString()
          week.push(
            <div
              key={dayCount}
              className={`relative rounded-xl p-3 transition-all hover:shadow-lg ${
                isToday
                  ? "border-2 border-indigo-400 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md"
                  : "border border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="mb-2 flex items-start justify-between">
                <span className={`text-lg font-bold ${isToday ? "text-indigo-600" : "text-slate-700"}`}>{dayCount}</span>
                <span className="text-3xl">{lunarDay?.phaseEmoji}</span>
              </div>

              {isToday && (
                <div className="absolute -top-2 -right-2 rounded-full bg-indigo-500 px-2 py-1 text-xs font-bold text-white shadow-md">
                  Hoy
                </div>
              )}

              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-600">{lunarDay?.phase}</p>
                <p className="text-base">{lunarDay?.activityIcon}</p>
                <div className="mt-2 flex items-center text-sm text-slate-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="2 9 44 30"
                    className="mr-1 h-3 w-3 fill-current"
                  >
                    <path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"></path>
                  </svg>
                  {lunarDay?.age !== undefined && <MoonVisibility age={lunarDay.age} />}
                  <span className="ml-0.5 font-semibold">%</span>
                </div>
              </div>
            </div>
          )
          dayCount++
        }
      }
      calendarRows.push(
        <div
          key={i}
          className="mb-2 grid grid-cols-7 gap-2"
        >
          {week}
        </div>
      )
    }
    return calendarRows
  }

  return <div className="hidden md:block">{generateCalendar()}</div>
}

// Componente Vista Móvil
const MobileView = ({ lunarDays }: { lunarDays: LunarDay[] }) => {
  const currentDate = new Date()
  return (
    <div className="grid grid-cols-2 gap-3 md:hidden">
      {lunarDays.map((lunarDay, index) => {
        const isToday = lunarDay.date.toDateString() === currentDate.toDateString()
        return (
          <div
            key={index}
            className={`relative rounded-xl p-3 transition-all ${
              isToday
                ? "border-2 border-indigo-400 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md"
                : "border border-slate-200 bg-white"
            }`}
          >
            {isToday && (
              <div className="absolute -top-2 -right-2 rounded-full bg-indigo-500 px-2 py-1 text-xs font-bold text-white shadow-md">
                Hoy
              </div>
            )}
            <div className="mb-2 flex items-center justify-between">
              <p className={`text-sm font-bold ${isToday ? "text-indigo-600" : "text-slate-700"}`}>
                {lunarDay.date
                  .toLocaleDateString("es-ES", { weekday: "short", day: "numeric" })
                  .replace(/^\w/, (c) => c.toUpperCase())}
              </p>
              <span className="text-2xl">{lunarDay.phaseEmoji}</span>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-slate-600">{lunarDay.phase}</p>
              <p className="text-sm">{lunarDay.activityIcon}</p>
              <div className="mt-1 flex items-center text-xs text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="2 9 44 30"
                  className="mr-1 h-3 w-3 fill-current"
                >
                  <path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"></path>
                </svg>
                {lunarDay?.age !== undefined && <MoonVisibility age={lunarDay.age} />}
                <span className="ml-0.5 font-semibold">%</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Componente Principal
const LunarCalendar = () => {
  const currentDate = new Date()
  const [startMonth, setStartMonth] = useState(currentDate.getMonth())
  const [startYear, setStartYear] = useState(currentDate.getFullYear())

  const lunarDays = generateLunarData(startMonth, startYear)

  const handleMonthChange = (direction: "next" | "prev") => {
    setStartMonth((prevMonth) => {
      const newMonth = direction === "next" ? prevMonth + 1 : prevMonth - 1
      if (newMonth < 0) {
        setStartYear((year) => year - 1)
        return 11
      }
      if (newMonth > 11) {
        setStartYear((year) => year + 1)
        return 0
      }
      return newMonth
    })
  }

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={() => handleMonthChange("prev")}
          aria-label="Mes anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <h2 className="font-['BlackRolmer'] text-2xl font-bold tracking-tight text-slate-800 md:text-3xl">
          {new Date(startYear, startMonth)
            .toLocaleString("es-ES", { month: "long", year: "numeric" })
            .replace(/^\w/, (c) => c.toUpperCase())}
        </h2>

        <button
          onClick={() => handleMonthChange("next")}
          aria-label="Mes siguiente"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <DesktopView
        lunarDays={lunarDays}
        startYear={startYear}
        startMonth={startMonth}
      />
      <MobileView lunarDays={lunarDays} />
    </div>
  )
}

export default LunarCalendar
