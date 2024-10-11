import { Moon } from "lunarphase-js"

export function translateMoonPhase() {
  const phase = Moon.lunarPhase()
  if (phase === "New") {
    return "Luna Nueva"
  } else if (phase === "Waxing Crescent") {
    return "Luna Creciente"
  } else if (phase === "First Quarter") {
    return "Cuarto Creciente"
  } else if (phase === "Waxing Gibbous") {
    return "Gibosa Creciente"
  } else if (phase === "Full") {
    return "Luna Llena"
  } else if (phase === "Waning Gibbous") {
    return "Gibosa Menguante"
  } else if (phase === "Last Quarter") {
    return "Cuarto Menguante"
  } else if (phase === "Waning Crescent") {
    return "Luna Menguante"
  } else {
    return "Fase desconocida"
  }
}
