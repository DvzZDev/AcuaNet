'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

// Registra los componentes de Chart.js y el plugin de Data Labels
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

// Asegúrate de que la configuración global no muestre la leyenda
ChartJS.defaults.plugins.legend.display = false

const EmbalseGrafico = ({ porcentaje }) => {
  const data = {
    labels: ['Embalsada', 'Restante'],
    datasets: [
      {
        data: [porcentaje, 100 - porcentaje],
        backgroundColor: ['#09f', '#070922'],
        hoverBackgroundColor: ['#235b80', '#f18d4e'],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true, // Cambiado a false para permitir ajustar la altura y anchura
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        font: {
          weight: 'bold',
          size: 16,
        },
        formatter: function (value) {
          return value.toFixed(2) + '%'
        },
      },
    },
  }

  return (
    <div className="relative flex sm:h-full w-full items-center justify-center my-3 sm:my-0">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-xl font-black text-transparent sm:text-sm lg:text-xl">
        {`${porcentaje.toFixed(2)} %`}
      </span>

      <div className="flex h-[15rem] w-[15rem] items-center justify-center sm:h-[7.8rem] sm:w-[7.8rem] lg:h-[12rem] lg:w-[12rem]">
        <Doughnut
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default EmbalseGrafico
