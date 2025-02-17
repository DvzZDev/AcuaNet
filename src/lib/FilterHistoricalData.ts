import type { Embalses } from "@/types"

export default function FilterHistoricalData({ data }: { data: Embalses[] }) {
  const filteredData = data.map((item) => {
    return {
      fecha: new Date(item.fecha || ""),
      volumen_actual: item.volumen_actual,
      porcentaje: item.porcentaje,
    }
  })
  return filteredData
}
