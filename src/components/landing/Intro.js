import '@fontsource-variable/onest'
import Type from './Type'
import nombreEmbalses from '../../lib/nombresEmbalses.json'
import Image from "next/legacy/image"

async function Intro() {
  const datares = nombreEmbalses
  return (
    <section className="containerr flex h-screen flex-col items-center">
      <div className="mb-6 mt-4 flex w-[3rem] max-w-xs animate-fade-up justify-center sm:mt-24 sm:w-[5rem]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Capa 1"
          viewBox="96.65 47.91 306.7 404.17"
          style={{ width: '100%', height: 'auto' }}
        >
          <defs>
            <linearGradient
              id="blueGradient"
              x1="0%"
              x2="100%"
              y1="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#09f"
              ></stop>
              <stop
                offset="100%"
                stopColor="#8942b0"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#blueGradient)"
            d="M249.68 452.08c-111.28.37-181.47-105.13-141.88-191.97 21.39-46.91 50.2-89.63 79.48-132.4 17.2-25.12 35.41-49.47 54.43-73.42 7.15-9 10.92-8.08 17.67.25 44.66 55.06 83.31 113.52 118.12 174.15 6.9 12.01 12.7 24.7 17.51 37.55 33.2 88.81-36.22 186.38-145.34 185.84zm-58.9-303.35c10.34 1.27 20.59 2.81 30.8 4.87 11.2 2.26 21.97 11.95 33.88 6.68 18.2-8.06 36.73-12.76 59.37-9.31-20.33-26.6-35.4-52.77-54.67-76.6-8.64-10.69-12.31-8.69-19.66.52-18.68 23.4-34.89 48.18-50.82 73.14l-1.35 2.16c.81-.49 1.63-.97 2.44-1.46zm180.13 221.02c-38.31 15.09-72.02 9.06-103.49-16.18-23.37-18.75-48.64-35.58-73.78-52.37-15.21-10.16-32.8-15.38-52.08-13.33-18.82 2.01-38.03 18.9-35.08 33 6.51 31.09 18.45 60.01 44.06 82.99 67.83 60.84 181.85 45.39 223.79-30.63.42-1.27.85-2.53 1.27-3.8-1.56.11-3.13.21-4.69.32zm17.15-83.01c-1.14-12.2-5.88-21.53-10.59-30.85-17.92-35.43-37.97-43.84-79.04-32.77-43.04 11.6-78.46 35.98-116.35 57.61 13.06 8.04 25.42 14.86 36.84 22.83 33.2 23.16 32.8 23.07 64.61-1.7 30.68-23.89 63.62-38.49 104.54-15.12zm-34.86-.54c-27.98-.13-45.93 11.25-62.71 25.09-9.28 7.65-26.98 15.51-26.45 22.34.84 10.83 18.82 14.44 29.65 21.01 30.67 18.58 56.61 16.94 82.34-5.98 11.89-10.59 19.86-23.08 13.37-38.9-6.89-16.78-21.74-23.12-36.19-23.56zm-207.58-74.55c34.64-9.39 64.87.32 94.59 13.02 5.03 2.15 9.66 4.65 16.07 1.96 15.02-6.32 30.49-11.75 47.79-18.3-27.02-14.13-48.48-32.81-76.03-42.47-28.24-9.91-48.91-3.49-64.85 19.73-5.6 8.15-11.04 16.39-17.56 26.08zm-32.48 75.88c20.96-16.04 45.7-6.75 64.9-18.39 18.34-11.12 37.42-21.23 56.55-31.99-57.45-37.93-106.34-19.04-121.45 50.38zm239.53-76.82c-24.56-49.1-50.41-60.93-88.04-39.72 27.58 16.2 51.78 36.54 88.04 39.72z"
            className="cls-1"
          ></path>
          <path
            fill="url(#blueGradient)"
            d="M397.91 300.46l-1.89 1.17c.35-.58.69-1.16 1.04-1.73l.85.56z"
            className="cls-1"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col xl:w-[60%]">
        <strong className="mb-4 w-full animate-fade-up text-center font-telmaRegular text-[64px] leading-none text-textsecondary animate-delay-100 sm:text-[5rem]">
          AcuaNet
        </strong>

        <h1 className="h-auto max-w-80 animate-fade-up px-4 text-center text-[33px] text-[#fbffb8] animate-delay-200 sm:max-w-full sm:text-[40px] lg:text-[3rem]">
          Consulta las mediciones hidrograficas de España en un solo
          <span className="text-[33px] font-bold text-textsecondary sm:text-[40px] lg:text-[3rem]">
            {' '}
            click
          </span>
        </h1>
      </div>
      <div className="animate-fade-up animate-delay-300">
        <Type data={datares} />
      </div>
      <div className="mt-24 h-[15rem] w-[12rem] animate-jump-in opacity-90 animate-delay-500">
        <Image
          src="/guss.webp"
          alt="image from a separator"
          width={500}
          height={500}
          layout="responsive"
          objectFit="cover"
          draggable={false}
          className="animate-pulse animate-duration-2000 animate-infinite"
        />
      </div>
    </section>
  )
}

export default Intro
