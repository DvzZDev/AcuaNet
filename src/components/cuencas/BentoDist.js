import Image from 'next/image'
import EmbalseGrafico from './Grafico'
function BentoDist({
  cuenca,
  embalsada,
  capacidad,
  variacion,
  porcentaje_embalsada,
  porcentaje_variacion,
  foto,
}) {
  return (
    <div className="mx-4 flex min-h-full w-[20rem] flex-col gap-4 sm:grid sm:w-[40rem] sm:grid-cols-8 sm:grid-rows-8 md:h-[40rem] md:w-[60rem]">
      {/* Primera Columna */}

      <div className="hover:scale-105 transition-all col-span-2 row-span-3 rounded bg-slate-700">
        <article className="flex h-[17rem] flex-col items-center justify-around px-4 sm:h-full">
          <h1 className="text-3xl text-[#e9ead6] sm:text-2xl md:text-3xl">Agua</h1>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            <span className="text-5xl font-black sm:text-4xl md:text-5xl">
              {embalsada}
            </span>
            <span className="text-md">hm³</span>
          </div>
          <h1 className="text-3xl text-[#e9ead6] sm:text-2xl md:text-3xl">Embalsada</h1>
        </article>
      </div>
      {/* Segunda Columna */}

      <div className="hover:scale-105 transition-all col-span-2 row-span-3 rounded bg-slate-700">
        <article className="flex h-[17rem] flex-col items-center justify-around px-4 sm:h-full">
          <h1 className="text-3xl text-[#e9ead6] sm:text-2xl md:text-3xl">Capacidad</h1>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            <span className="text-5xl font-black sm:text-4xl md:text-5xl">
              {capacidad}
            </span>
            <span className="text-md">hm³</span>
          </div>
          <h1 className="text-3xl text-[#e9ead6] sm:text-2xl md:text-3xl">Total</h1>
        </article>
      </div>
      {/* Tercera Columna */}

      <div className="hover:scale-105 transition-all col-span-2 row-span-3 rounded-lg bg-slate-700">
        <article className="flex h-[17rem] flex-col items-center justify-around px-4 sm:h-full">
          <h1 className="text-3xl text-[#e9ead6] sm:text-2xl md:text-3xl">Variacion</h1>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            <span className="text-5xl font-black sm:text-4xl md:text-5xl">
              {variacion}
            </span>
            <span className="text-md">hm³</span>
          </div>
          <h1 className="text-3xl text-[#e9ead6] sm:text-2xl md:text-3xl">
            Sem. Anterior
          </h1>
        </article>
      </div>
      {/* Cuarta Columna */}
      <div className="hover:scale-105 transition-all col-span-2 row-span-3 rounded-lg bg-slate-700">
        <div className="flex h-full items-center justify-center">
          <article className="flex h-[17rem] flex-col items-center justify-around px-4 sm:h-full">
            <h1 className="text-3xl text-[#e9ead6] sm:text-2xl md:text-3xl">
              Porcentaje
            </h1>
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              <span className="text-5xl font-black sm:text-4xl md:text-5xl">
                {porcentaje_variacion}
              </span>
              <span className="text-md">%</span>
            </div>
            <h1 className="text-3xl text-[#e9ead6] sm:text-2xl md:text-3xl">
              Sem. Anterior
            </h1>
          </article>
        </div>
      </div>
      {/* Quinta Columna */}

      <div className="hover:scale-105 transition-all col-span-2 row-span-3 rounded-lg bg-slate-700">
        <EmbalseGrafico porcentaje={porcentaje_embalsada} />
      </div>
      {/* Sexta Columna */}

      <div className="relative col-span-4 row-span-4 overflow-hidden rounded-lg bg-slate-700 hover:scale-125 transition-all ">
        <Image
          src={foto}
          alt={`Foto sobre la cuenca hidrográfica del ${cuenca}`}
          layout="fill"
        />
      </div>
      {/* Septima Columna */}

      <div className="hover:scale-105 transition-all col-span-2 row-span-3 rounded-lg bg-slate-700">
        <article className="flex h-[17rem] flex-col items-center justify-around px-4 sm:h-full">
          <h1 className="text-3xl text-[#e9ead6] sm:text-2xl md:text-3xl">Embalses</h1>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            <div className="animate-wiggle animate-infinite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <circle
                  cx="256"
                  cy="256"
                  r="247.83"
                  fill="#89EBFF"
                ></circle>
                <path
                  fill="#557714"
                  d="M89.875 119.446L41.277 242.383 138.472 242.383z"
                ></path>
                <path
                  fill="#2DB8D4"
                  d="M47.152 307.745C70.393 401.491 155.214 471.149 256 471.149s185.607-69.658 208.848-163.404L256 296.851 47.152 307.745z"
                ></path>
                <path
                  fill="#557714"
                  d="M464.854 307.745a214.672 214.672 0 005.446-32.681H41.702a214.549 214.549 0 005.446 32.681h417.706z"
                ></path>
                <path
                  fill="#405A0F"
                  d="M200.624 119.446L152.028 242.383 249.222 242.383z"
                ></path>
                <path
                  fill="#557714"
                  d="M311.376 119.446L262.778 242.383 359.972 242.383z"
                ></path>
                <path
                  fill="#405A0F"
                  d="M422.125 119.446L373.528 242.383 470.723 242.383z"
                ></path>
                <circle
                  cx="256"
                  cy="73.532"
                  r="32.681"
                  fill="#FFD170"
                ></circle>
                <g fill="#03242B">
                  <path d="M437.019 74.981C388.668 26.628 324.38 0 256 0S123.332 26.628 74.981 74.981C26.628 123.332 0 187.62 0 256s26.628 132.668 74.981 181.019C123.332 485.372 187.62 512 256 512s132.668-26.628 181.019-74.981C485.372 388.668 512 324.38 512 256s-26.628-132.668-74.981-181.019zM256 495.66C123.851 495.66 16.34 388.15 16.34 256S123.851 16.34 256 16.34 495.66 123.851 495.66 256 388.149 495.66 256 495.66z"></path>
                  <path d="M425.896 340.426a8.17 8.17 0 00-8.17-8.17H192.318a8.17 8.17 0 000 16.34h225.407a8.17 8.17 0 008.171-8.17zM167.807 340.426a8.17 8.17 0 00-8.17-8.17H94.276a8.17 8.17 0 000 16.34h65.362a8.17 8.17 0 008.169-8.17zM116.183 381.277H307.91a8.17 8.17 0 000-16.34H116.183a8.17 8.17 0 000 16.34zM230.441 397.617a8.17 8.17 0 000 16.34h129.634a8.17 8.17 0 000-16.34H230.441z"></path>
                  <path d="M464.848 299.574H47.152a8.17 8.17 0 00-7.93 10.137c12.682 51.131 43.354 96.394 86.367 127.45a8.17 8.17 0 109.566-13.248c-37.015-26.726-64.17-64.783-77.28-107.999h396.26C427.852 403.02 347.83 462.979 256 462.979c-33.077 0-64.714-7.619-94.032-22.643a8.169 8.169 0 00-10.997 3.545 8.169 8.169 0 003.545 10.997c31.646 16.218 65.79 24.442 101.484 24.442 50.832 0 98.752-16.708 138.582-48.318 38.636-30.662 66.406-73.738 78.197-121.291a8.167 8.167 0 00-1.496-7 8.169 8.169 0 00-6.435-3.137zM470.31 266.894h-40.014v-16.34h40.427a8.17 8.17 0 007.597-11.174l-48.598-122.937a8.17 8.17 0 00-15.196 0l-37.804 95.634a8.17 8.17 0 0015.196 6.008l30.207-76.413 36.584 92.542h-63.594a8.17 8.17 0 000 16.34h18.841v16.34h-94.411v-16.34h40.427a8.17 8.17 0 007.597-11.174l-48.598-122.937a8.17 8.17 0 00-15.196 0l-37.804 95.634a8.17 8.17 0 0015.196 6.008l30.207-76.413 36.584 92.542h-63.594a8.17 8.17 0 000 16.34h18.841v16.34h-94.41v-16.34h40.427a8.17 8.17 0 007.597-11.174l-48.598-122.937a8.17 8.17 0 00-15.196 0l-37.804 95.634a8.17 8.17 0 0015.196 6.008l30.207-76.413 36.584 92.542h-63.594a8.17 8.17 0 000 16.34h18.841v16.34h-94.41v-16.34h40.427a8.17 8.17 0 007.597-11.174L97.473 116.443a8.17 8.17 0 00-15.196 0L33.68 239.38a8.17 8.17 0 007.597 11.174h40.427v16.34H41.689a8.17 8.17 0 000 16.34H470.31a8.17 8.17 0 000-16.34zM89.875 141.67l36.582 92.542H53.292l36.583-92.542z"></path>
                  <path d="M256 114.383c22.526 0 40.851-18.325 40.851-40.851S278.526 32.681 256 32.681s-40.851 18.325-40.851 40.851 18.325 40.851 40.851 40.851zm0-65.362c13.516 0 24.511 10.995 24.511 24.511S269.516 98.043 256 98.043s-24.511-10.995-24.511-24.511S242.484 49.021 256 49.021z"></path>
                </g>
              </svg>
            </div>
          </div>
          <h1 className="text-3xl text-[#e9ead6] sm:text-2xl md:text-3xl">Cuenca</h1>
        </article>
      </div>
    </div>
  )
}

export default BentoDist
