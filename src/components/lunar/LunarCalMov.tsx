"use client"

import { JSX, useState } from "react"
import { Moon } from "lunarphase-js"
import { MoonVisibility } from "@/lib/MoonVisibility"

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
        className="font-NecoBold mb-1 grid grid-cols-7 text-center text-xl font-black text-green-950 uppercase"
      >
        {weekDays.map((day) => (
          <div
            key={day}
            className="mx-1 rounded-full bg-[#97ceaab1] p-2 pb-2"
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
              className=""
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
              className={`relative m-1 rounded-md p-2 text-center ${isToday ? "bg-lime-100" : "bg-blue-200"} `}
            >
              <div className="flex justify-between">
                <p className="text-left font-black text-red-700">{dayCount}</p>
                <p className="text-3xl">{lunarDay?.phaseEmoji}</p>
              </div>

              {isToday && (
                <div className="absolute right-2 bottom-2 rotate-12 rounded-full bg-orange-700 p-1 py-2 text-xs font-black text-white">
                  Hoy
                </div>
              )}

              <p className="text-left text-base font-bold">{lunarDay?.phase}</p>
              <p className="-ml-1 text-left text-base">{lunarDay?.activityIcon}</p>
              <p className="flex items-center text-left text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="2 9 44 30"
                  className="mr-1 h-4 w-4"
                >
                  {" "}
                  <path
                    fill="none"
                    d="M0 0h48v48H0z"
                  ></path>{" "}
                  <path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"></path>{" "}
                </svg>{" "}
                {lunarDay?.age !== undefined && <MoonVisibility age={lunarDay.age} />}{" "}
                <span className="text-[11px] font-black">%</span>
              </p>
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
            className={`relative rounded-lg border p-2 text-xs shadow-md ${isToday ? "bg-lime-100" : "bg-blue-200"}`}
          >
            {isToday && (
              <div className="absolute right-2 bottom-2 rotate-12 rounded-full bg-orange-700 p-1 py-2 text-xs font-black text-white">
                Hoy
              </div>
            )}
            <div className="flex items-center justify-between">
              <p className="text-base font-black text-red-700">
                {lunarDay.date
                  .toLocaleDateString("es-ES", { weekday: "short", day: "numeric" })
                  .replace(/^\w/, (c) => c.toUpperCase())}
              </p>
              <span className="text-2xl">{lunarDay.phaseEmoji}</span>
            </div>
            <p className="text-xs">{lunarDay.phase}</p>
            <p className="text-sm">{lunarDay.activityIcon}</p>
            <p className="flex items-center text-left text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 9 44 30"
                className="mr-1 h-4 w-4"
              >
                {" "}
                <path
                  fill="none"
                  d="M0 0h48v48H0z"
                ></path>{" "}
                <path d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"></path>{" "}
              </svg>{" "}
              {lunarDay?.age !== undefined && <MoonVisibility age={lunarDay.age} />}{" "}
              <span className="text-[11px] font-black">%</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}

// Componente Principal
const LunarCalendarMov = () => {
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
    <section className="mx-auto flex max-w-[70rem] items-center justify-center px-6 pt-4">
      <div className="w-full overflow-hidden rounded-lg shadow-md">
        <div className="flex justify-between pb-6">
          <button
            onClick={() => handleMonthChange("prev")}
            aria-label="Mes anterior"
            className="rounded-2xl bg-emerald-400 p-1"
          >
            ◀
          </button>
          <h2 className="text-3xl font-bold text-[#052e16] uppercase italic">
            {new Date(startYear, startMonth)
              .toLocaleString("es-ES", { month: "long", year: "numeric" })
              .replace(/^\w/, (c) => c.toUpperCase())}
          </h2>
          <button
            onClick={() => handleMonthChange("next")}
            aria-label="Mes siguiente"
            className="rounded-2xl bg-emerald-400 p-1"
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

export default LunarCalendarMov
