"use client"

import { JSX, useState } from "react"
import { Moon } from "lunarphase-js"

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
  const firstDayOfMonth = (new Date(startYear, startMonth, 1).getDay() + 6) % 7 // Lunes como inicio
  const currentDate = new Date()

  const generateCalendar = () => {
    let dayCount = 1
    const calendarRows: JSX.Element[] = []
    const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

    // Cabecera
    calendarRows.push(
      <div
        key="week-header"
        className="font-NecoBold grid grid-cols-7 text-center text-xl font-black text-[#416750]"
      >
        {weekDays.map((day) => (
          <div
            key={day}
            className="border-r border-[#1b7b6e] pb-2 last:border-none"
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
          week.push(
            <div
              key={`empty-${i}-${j}`}
              className="border-r border-[#1b7b6e]"
            ></div>
          )
        } else if (dayCount > daysInMonth) {
          week.push(<div key={`empty-${i}-${j}`}></div>)
        } else {
          const lunarDay = lunarDays.find((day) => day.date.getDate() === dayCount && day.date.getMonth() === startMonth)
          const isToday = lunarDay?.date.toDateString() === currentDate.toDateString()
          week.push(
            <div
              key={dayCount}
              className={`border-[#1b7b6e] p-2 text-center ${isToday ? "bg-[#1dd38d80]" : "bg-green-50"} border-b border-r`}
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

  return <div className="hidden md:block">{generateCalendar()}</div>
}

// Componente Vista Móvil
const MobileView = ({ lunarDays }: { lunarDays: LunarDay[] }) => {
  const currentDate = new Date()
  return (
    <div className="grid grid-cols-2 gap-2 md:hidden">
      {lunarDays.map((lunarDay, index) => {
        const isToday = lunarDay.date.toDateString() === currentDate.toDateString()
        return (
          <div
            key={index}
            className={`rounded-lg border p-4 text-xs shadow-md ${isToday ? "bg-[#1dd38d80]" : "bg-[#f0fdf4]"} border-[#052e16]`}
          >
            <div className="flex justify-between">
              <strong>{lunarDay.date.toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short" })}</strong>
              <span className="text-xl">{lunarDay.phaseEmoji}</span>
            </div>
            <p>Fase: {lunarDay.phase}</p>
            <p>Actividad: {lunarDay.activityIcon}</p>
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
    <section className="flex items-center justify-center px-6">
      <div className="w-[70rem] max-w-[70rem] overflow-hidden rounded-lg bg-green-100 shadow-md">
        <div className="flex justify-between p-3">
          <button
            onClick={() => handleMonthChange("prev")}
            aria-label="Mes anterior"
            className="bg-emerald-200 p-1"
          >
            ◀
          </button>
          <h2 className="text-2xl font-bold text-[#052e16]">
            {new Date(startYear, startMonth)
              .toLocaleString("es-ES", { month: "long", year: "numeric" })
              .replace(/^\w/, (c) => c.toUpperCase())}
          </h2>
          <button
            onClick={() => handleMonthChange("next")}
            aria-label="Mes siguiente"
            className="bg-emerald-200 p-1"
          >
            ▶
          </button>
        </div>
        <DesktopView
          lunarDays={lunarDays}
          startYear={startYear}
          startMonth={startMonth}
        />
        <MobileView lunarDays={lunarDays} />
      </div>
    </section>
  )
}

export default LunarCalendar
