"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import ChartDataLabels from "chartjs-plugin-datalabels"

// Registra los componentes de Chart.js y el plugin de Data Labels
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

// Asegúrate de que la configuración global no muestre la leyenda
ChartJS.defaults.plugins.legend.display = false

const EmbalseGrafico = ({ porcentaje }: { porcentaje: number }) => {
  const data = {
    labels: ["Embalsada", "Restante"],
    datasets: [
      {
        data: [porcentaje, 100 - porcentaje],
        backgroundColor: ["#0046FF", "#0E0034"],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true, // Cambiado a false para permitir ajustar la altura y anchura
    plugins: {
      datalabels: {
        color: "#e9ead6",
        anchor: "center" as const,
        align: "center" as const,
        offset: -10 as const,
        font: {
          weight: "bold" as const,
          size: 17,
        },
        formatter: function (value: number) {
          return value.toFixed(0)
        },
      },
    },
  }

  return (
    <div className="relative flex h-fit w-[14rem] items-center justify-center rounded-lg bg-slate-700 p-3 sm:my-0 sm:h-full sm:w-full">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-4xl font-black text-transparent sm:text-2xl md:text-5xl lg:text-5xl">
        {`${porcentaje.toFixed(0)}`}
        <span className="text-xl font-black">%</span>
      </span>

      <div className="flex h-[8rem] w-[8rem] items-center justify-center sm:h-[7.8rem] sm:w-[7.8rem] lg:h-[12rem] lg:w-[12rem]">
        <Doughnut
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default EmbalseGrafico
