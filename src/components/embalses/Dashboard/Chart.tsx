"use client"
import type { Embalses } from "@/types"
import { useMemo } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]

const Chart = ({ data }: { data: Embalses[] }) => {
  const processedData = useMemo(() => {
    const currentYear = new Date().getFullYear()
    const previousYear = currentYear - 1
    const monthlyData: Record<
      string,
      {
        current: number | null
        previous: number | null
        sum: number
        count: number
      }
    > = MONTHS.reduce(
      (acc, month) => ({
        ...acc,
        [month]: { current: null, previous: null, sum: 0, count: 0 },
      }),
      {}
    )

    data.forEach(({ fecha, porcentaje }) => {
      if (!fecha ||!porcentaje) return
      const date = new Date(fecha)
      const monthIndex = date.getMonth()
      const monthKey = MONTHS[monthIndex]
      const year = date.getFullYear()
      const value = porcentaje === 0 ? null : porcentaje

      if (year === currentYear) {
        monthlyData[monthKey].current = value
      } else if (year === previousYear) {
        monthlyData[monthKey].previous = value
      } else if (year < previousYear) {
        monthlyData[monthKey].sum += porcentaje
        monthlyData[monthKey].count++
      }
    })

    return MONTHS.map((month) => {
      const { current, previous, sum, count } = monthlyData[month]
      const average = count > 0 ? Math.round(sum / count) : null
      return {
        name: month,
        current,
        previous,
        average: average === 0 ? null : average,
      }
    })
  }, [data])

  const chartData: ChartData<"line"> = useMemo(() => {
    return {
      labels: MONTHS,
      datasets: [
        {
          label: `${new Date().getFullYear()}`,
          data: processedData.map((d) => d.current),
          borderColor: "#2CC615",
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointStyle: "star",
          pointRadius: 5,
        },
        {
          label: `${new Date().getFullYear() - 1}`,
          data: processedData.map((d) => d.previous),
          borderColor: "#09f",
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointStyle: "star",
          pointRadius: 5,
        },
        {
          label: "Media 10 años",
          data: processedData.map((d) => d.average),
          borderColor: "orange",
          borderWidth: 2,
          borderDash: [5, 5],
          fill: false,
          tension: 0.4,
          pointStyle: "star",
          pointRadius: 5,
        },
      ],
    }
  }, [processedData])

  const options: ChartOptions<"line"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom" as const,
          labels: {
            color: "#dbfce7",
            padding: 20,
            font: {
              size: 10,
            },
          },
        },
        tooltip: {
          mode: "index" as const,
          intersect: false,
          callbacks: {
            label: (context) => `${context.dataset.label}: ${context.raw}%`,
          },
          titleFont: { size: 14 },
          bodyFont: { size: 12 },
          boxPadding: 5,
          usePointStyle: true,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#dbfce7",
            font: {
              size: 12,
            },
          },
          grid: { color: "#282828", borderDash: [4, 4] },
        },
        y: {
          ticks: {
            color: "#dbfce7",
            stepSize: 25,
            font: {
              size: 12,
            },
          },
          min: 0,
          max: 100,
          grid: { color: "#282828", borderDash: [4, 4] },
        },
      },
    }),
    []
  )

  return (
    <div className="relative min-h-[400px] w-full p-2 pt-5 lg:p-4">
      <p className="absolute top-1 right-2 text-sm text-green-200 italic lg:-top-2 lg:-right-2">AcuaNet</p>
      <Line
        data={chartData}
        options={options}
      />
    </div>
  )
}

export default Chart
