import { useState } from "react"
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
    buttons: {
      previous: "Ant Mes",
      next: "Sig Mes",
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
      <div className="mb-4 grid grid-cols-7 rounded-2xl bg-[#ffd700] text-center font-NecoBold text-xl font-black text-black">
        {weekDays.map((day) => (
          <div
            key={day}
            className="p-2"
          >
            {day}
          </div>
        ))}
      </div>
    )
    calendarRows.push(<div key="week-header">{weekHeader}</div>)

    // Rellenar el calendario
    let dayCount = 1
    for (let i = 0; i < 6; i++) {
      const week = []
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(
            <div
              key={`empty-${i}-${j}`}
              className="p-2"
            ></div>
          ) // Espacios vacíos para días previos
        } else if (dayCount > daysInMonth) {
          week.push(
            <div
              key={j}
              className="p-2"
            ></div>
          ) // Espacios vacíos si el mes termina
        } else {
          const lunarDay = lunarDays.find(
            (day) => day.date.getDate() === dayCount && day.date.getMonth() === startMonth
          )
          week.push(
            <div
              key={j}
              className="m-1 rounded-lg border-2 border-yellow-500 bg-[#070922] p-2 text-center"
            >
              <strong>{dayCount}</strong>
              <div>
                {lunarDay?.phase} {lunarDay?.phaseEmoji}
              </div>
              <div>Actividad: {lunarDay?.activityIcon}</div>
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
    <div className="m-auto max-w-[75rem] rounded-lg p-4 px-6 shadow-md">
      <h2 className="mb-4 text-center font-NecoBold text-2xl font-bold uppercase text-yellow-400 md:text-4xl">
        {new Date(startYear, startMonth)
          .toLocaleString("es-ES", {
            month: "long",
            year: "numeric",
          })
          .replace(/^\w/, (c) => c.toUpperCase())}{" "}
      </h2>
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={handlePreviousMonth}
          className="rounded bg-[#8d65c5] px-4 py-2 text-white transition hover:bg-blue-600"
        >
          {translations.buttons.previous}
        </button>
        <button
          onClick={handleNextMonth}
          className="rounded bg-[#8d65c5] px-4 py-2 text-white transition hover:bg-blue-600"
        >
          {translations.buttons.next}
        </button>
      </div>
      <div
        key="calendar-desktop-view"
        className="mt-4 hidden md:block"
      >
        {generateCalendar()}
      </div>{" "}
      {/* Para PC */}
      <ul className="mt-4 block space-y-4 md:hidden">
        {/* Para móviles */}
        {lunarDataForDisplay.map((lunarDay, index) => (
          <li
            key={index}
            className="rounded-lg border-2 border-yellow-500 p-4 shadow-md"
          >
            <div className="flex items-center justify-between">
              <strong className="text-lg">
                {lunarDay.date.toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </strong>
              <span className="ml-2 text-2xl">{lunarDay.phaseEmoji}</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold">Fase:</span> {lunarDay.phase}
            </div>
            <div className="mt-1">
              <span className="font-semibold">Actividad:</span> {lunarDay.activityIcon}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LunarCalendar
