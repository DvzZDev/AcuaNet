"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import ChartDataLabels from "chartjs-plugin-datalabels"

// Registra los componentes de Chart.js y el plugin de Data Labels
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

// Asegúrate de que la configuración global no muestre la leyenda
ChartJS.defaults.plugins.legend.display = false

const EmbalseGrafico = ({ porcentaje }) => {
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
        anchor: "center",
        align: "center",
        offset: -10,
        font: {
          weight: "bold",
          size: 20,
        },
        formatter: function (value) {
          return value.toFixed(0)
        },
      },
    },
  }

  return (
    <div className="relative my-3 flex h-[14rem] w-[14rem] items-center justify-center rounded-lg bg-slate-700 sm:my-0 sm:h-full sm:w-full">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-5xl font-black text-transparent sm:text-2xl lg:text-5xl">
        {`${porcentaje.toFixed(0)}`}
        <span className="text-xl font-black">%</span>
      </span>

      <div className="flex h-[12rem] w-[12rem] items-center justify-center sm:h-[7.8rem] sm:w-[7.8rem] lg:h-[12rem] lg:w-[12rem]">
        <Doughnut
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default EmbalseGrafico
