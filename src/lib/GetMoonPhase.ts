import { Moon } from "lunarphase-js"

export function getMoonPhase() {
  const phase = Moon.lunarPhase()
  if (phase === "New") {
    return "/Videos/LunaNueva.mp4"
  } else if (phase === "Waxing Crescent") {
    return "/Videos/LunaCreciente.mp4"
  } else if (phase === "First Quarter") {
    return "/Videos/CuartoCreciente.mp4"
  } else if (phase === "Waxing Gibbous") {
    return "/Videos/GibosaCreciente.mp4"
  } else if (phase === "Full") {
    return "/Videos/Llena.mp4"
  } else if (phase === "Waning Gibbous") {
    return "/Videos/GibosaMeng.mp4"
  } else if (phase === "Last Quarter") {
    return "/Videos/CuartoMen.mp4"
  } else if (phase === "Waning Crescent") {
    return "/Videos/Menguante.mp4"
  }
}
