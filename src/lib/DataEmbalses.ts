import type { Embalses } from "@/types"
import Names from "@/lib/nombresEmbalses.json"

export function LastWeekVariation(embalses: Embalses[]) {
  const lastWeek = embalses[0].volumen_actual - embalses[1].volumen_actual
  const pctDifference = Number((embalses[0].porcentaje - embalses[1].porcentaje || 0).toFixed(2))
  return { lastWeek, pctDifference }
}

export function LastWeekVariationF(embalses: Embalses[]) {
  // Group reservoirs by name
  const groupedByName = embalses.reduce(
    (acc, embalse) => {
      if (!acc[embalse.embalse]) {
        acc[embalse.embalse] = []
      }
      acc[embalse.embalse].push(embalse)
      return acc
    },
    {} as Record<string, Embalses[]>
  )

  // Calculate variations for each reservoir
  const variations = Object.entries(groupedByName).map(([name, data]) => {
    // Sort by date to ensure newest first
    const sortedData = data.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
    console.log(sortedData)

    if (sortedData.length < 2) {
      return {
        name,
        lastWeek: 0,
        pctDifference: 0,
        cuenca: sortedData[0].cuenca,
        pais: GetCountry(name),
        porcentaje: sortedData[0].porcentaje,
      }
    }

    const lastWeek = sortedData[0].volumen_actual - sortedData[1].volumen_actual
    const pctDifference = Number((sortedData[0].porcentaje - sortedData[1].porcentaje || 0).toFixed(2))

    return {
      name,
      lastWeek,
      pctDifference,
      cuenca: sortedData[0].cuenca,
      pais: GetCountry(name),
      porcentaje: sortedData[0].porcentaje,
    }
  })

  return variations
}

export function GetCountry(embalse: string) {
  const pais = Names.find((n) => n.nombre.toLowerCase() === embalse.toLowerCase())
  return pais?.pais || "N/D"
}

export function getSameWeekLastYearCapacity(embalses: Embalses[]) {
  if (!embalses?.length) return null

  const currentDate = new Date(embalses[0].fecha)
  const lastYearDate = new Date(currentDate)
  lastYearDate.setFullYear(lastYearDate.getFullYear() - 1)

  let closest = embalses[0]
  let minDiff = Math.abs(new Date(closest.fecha).getTime() - lastYearDate.getTime())

  for (const embalse of embalses) {
    const diff = Math.abs(new Date(embalse.fecha).getTime() - lastYearDate.getTime())
    if (diff < minDiff) {
      minDiff = diff
      closest = embalse
    }
  }
  return (
    {
      vol: Number(closest.volumen_actual),
      por: Number(closest.porcentaje),
    } || null
  )
}

export function getClosestByDate(embalses: Embalses[], targetDate: Date) {
  let closest = embalses[0]
  let minDiff = Math.abs(new Date(closest.fecha).getTime() - targetDate.getTime())

  for (const embalse of embalses) {
    const diff = Math.abs(new Date(embalse.fecha).getTime() - targetDate.getTime())
    if (diff < minDiff) {
      minDiff = diff
      closest = embalse
    }
  }
  return closest
}

export function getSameWeekLast10YearsAverage(embalses: Embalses[]) {
  if (!embalses?.length) return null

  const currentDate = new Date(embalses[0].fecha)
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

export function getSameWeekAllYearsAverage(embalses: Embalses[]) {
  if (!embalses?.length) return null

  const currentDate = new Date(embalses[0].fecha)
  const capacities: number[] = []
  const earliestYear = new Date(Math.min(...embalses.map((e) => new Date(e.fecha).getTime()))).getFullYear()
  const latestYear = currentDate.getFullYear()

  for (let y = earliestYear; y <= latestYear; y++) {
    if (y === currentDate.getFullYear()) continue // omitir el año actual si lo deseas
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
