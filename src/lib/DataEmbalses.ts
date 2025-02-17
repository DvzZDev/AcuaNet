import type { Embalses } from "@/types"
import Names from "@/lib/nombresEmbalses.json"

interface WeekVariation {
  lastWeek: number
  pctDifference: number
}

interface ReservoirVariation {
  name: string
  lastWeek: number
  pctDifference: number
  cuenca: string
  pais: string
  porcentaje: number
}

interface CapacityData {
  vol: number
  por: number
}

export function LastWeekVariation(embalses: Embalses[]): WeekVariation {
  const lastWeek = (embalses[0]?.volumen_actual ?? 0) - (embalses[1]?.volumen_actual ?? 0)
  const pctDifference = Number(((embalses[0]?.porcentaje ?? 0) - (embalses[1]?.porcentaje ?? 0)).toFixed(2))
  return { lastWeek, pctDifference }
}

export function LastWeekVariationF(embalses: Embalses[]): ReservoirVariation[] {
  // Group reservoirs by name
  const groupedByName = embalses.reduce<Record<string, Embalses[]>>((acc, embalse) => {
    if (!acc[embalse.embalse]) {
      acc[embalse.embalse] = []
    }
    acc[embalse.embalse].push(embalse)
    return acc
  }, {})

  const variations = Object.entries(groupedByName).map(([name, data]) => {
    const sortedData = data.sort((a, b) => new Date(b.fecha ?? 0).getTime() - new Date(a.fecha ?? 0).getTime())

    if (sortedData.length < 2) {
      return {
        name,
        lastWeek: 0,
        pctDifference: 0,
        cuenca: sortedData[0]?.cuenca ?? "",
        pais: GetCountry(name),
        porcentaje: sortedData[0]?.porcentaje ?? 0,
      }
    }

    const lastWeek = (sortedData[0].volumen_actual ?? 0) - (sortedData[1].volumen_actual ?? 0)
    const pctDifference = Number(((sortedData[0].porcentaje ?? 0) - (sortedData[1].porcentaje ?? 0)).toFixed(2))

    return {
      name,
      lastWeek,
      pctDifference,
      cuenca: sortedData[0].cuenca ?? "",
      pais: GetCountry(name),
      porcentaje: sortedData[0].porcentaje ?? 0,
    }
  })

  return variations
}

export function GetCountry(embalse: string): string {
  const pais = Names.find((n) => n.nombre.toLowerCase() === embalse.toLowerCase())
  return pais?.pais || "N/D"
}

export function getSameWeekLastYearCapacity(embalses: Embalses[]): CapacityData | null {
  if (!embalses?.length) return null

  const currentDate = new Date(embalses[0].fecha ?? new Date())
  const lastYearDate = new Date(currentDate)
  lastYearDate.setFullYear(lastYearDate.getFullYear() - 1)

  let closest = embalses[0]
  let minDiff = Math.abs(new Date(closest.fecha ?? new Date()).getTime() - lastYearDate.getTime())

  for (const embalse of embalses) {
    const diff = embalse.fecha ? Math.abs(new Date(embalse.fecha).getTime() - lastYearDate.getTime()) : Number.MAX_VALUE
    if (diff < minDiff) {
      minDiff = diff
      closest = embalse
    }
  }

  return {
    vol: Number(closest.volumen_actual),
    por: Number(closest.porcentaje),
  }
}

export function getClosestByDate(embalses: Embalses[], targetDate: Date): Embalses {
  if (!embalses.length) {
    throw new Error("Empty embalses array")
  }

  let closest = embalses[0]
  let minDiff = Math.abs(new Date(closest.fecha ?? 0).getTime() - targetDate.getTime())

  for (const embalse of embalses) {
    const diff = embalse.fecha ? Math.abs(new Date(embalse.fecha).getTime() - targetDate.getTime()) : Number.MAX_VALUE
    if (diff < minDiff) {
      minDiff = diff
      closest = embalse
    }
  }
  return closest
}

export function getSameWeekLast10YearsAverage(embalses: Embalses[]): number | null {
  if (!embalses?.length) return null

  const currentDate = new Date(embalses[0].fecha ?? new Date())
  const capacities: number[] = []

  for (let i = 1; i <= 10; i++) {
    const yearDate = new Date(currentDate)
    yearDate.setFullYear(yearDate.getFullYear() - i)
    const found = getClosestByDate(embalses, yearDate)
    if (found?.volumen_actual) {
      capacities.push(Number(found.volumen_actual))
    }
  }

  if (!capacities.length) return null
  const total = capacities.reduce((acc, val) => acc + val, 0)
  return total / capacities.length
}

export function getSameWeekAllYearsAverage(embalses: Embalses[]): number | null {
  if (!embalses?.length) return null

  const currentDate = new Date(embalses[0].fecha ?? new Date())
  const capacities: number[] = []
  const earliestYear = new Date(
    Math.min(...embalses.map((e) => (e.fecha ? new Date(e.fecha).getTime() : Number.MAX_VALUE)))
  ).getFullYear()
  const latestYear = currentDate.getFullYear()

  for (let y = earliestYear; y <= latestYear; y++) {
    if (y === currentDate.getFullYear()) continue
    const yearDate = new Date(currentDate)
    yearDate.setFullYear(y)
    const found = getClosestByDate(embalses, yearDate)
    if (found?.volumen_actual) {
      capacities.push(Number(found.volumen_actual))
    }
  }

  if (!capacities.length) return null
  const total = capacities.reduce((acc, val) => acc + val, 0)
  return total / capacities.length
}
