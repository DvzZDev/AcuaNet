import { Moon } from "lunarphase-js"

export const fishActivityIcons = {
  New: "🐟🐟🐟",
  "Waxing Crescent": "🐟🐟🐟",
  "First Quarter": "🐟🐟",
  "Waxing Gibbous": "🐟🐟",
  Full: "🐟",
  "Waning Gibbous": "🐟🐟",
  "Last Quarter": "🐟",
  "Waning Crescent": "🐟🐟🐟",
}

export function getMoonPhase() {
  const phase = Moon.lunarPhase()
  return phase
}

function stripTime(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export function getMoonPhasesForWeek() {
  const weekData: Array<{ date: Date; phase: string; actividad: string }> = []
  for (let i = 0; i < 7; i++) {
    const date = new Date()
    const cleanDate = stripTime(new Date(date.setDate(date.getDate() + i)))
    const phase = Moon.lunarPhase(cleanDate)
    weekData.push({
      date: cleanDate,
      phase,
      actividad: fishActivityIcons[phase] ?? "",
    })
  }
  return weekData
}

export function getMoonPhasesForWeekAsRow(): string {
  const data = getMoonPhasesForWeek()
  return JSON.stringify(data)
}
