'use client'
import EmbalseGrafico from './Grafico'
import { delay, motion, useScroll } from 'framer-motion'
import Image from 'next/image'

function BentoDist(props) {
  const cuenca = props.data
  const cuencaid = props.params.url.cuencaid
  const decodedCuencaid = decodeURIComponent(cuencaid)
  const decodedCuencaidNM = decodedCuencaid
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  const resCuenca = cuenca.find((cuenca) => cuenca.cuenca === decodedCuencaidNM)
  const delays = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]

  return (
    <div className="mx-4 flex min-h-full w-full flex-col gap-4 sm:grid sm:w-[40rem] sm:grid-cols-8 sm:grid-rows-8 lg:h-[40rem] lg:w-[60rem]">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', duration: 0.5 }}
        key="agua"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1, transition: { delay: delays[0] } },
        }}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        className="order-1 flex justify-center rounded-lg sm:col-span-2 sm:row-span-3 sm:rounded-lg sm:bg-slate-700"
      >
        <article className="flex h-[14rem] w-[14rem] flex-col items-center justify-around rounded-lg bg-slate-700 px-4 sm:h-auto sm:w-auto sm:bg-transparent">
          <h1 className="text-4xl text-[#e9ead6] sm:text-2xl lg:text-4xl">Agua</h1>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            <span className="text-6xl font-black sm:text-4xl lg:text-6xl">
              {resCuenca.embalsada}
            </span>
            <span className="text-xl">hm³</span>
          </div>
          <h1 className="text-4xl text-[#e9ead6] sm:text-2xl lg:text-4xl">Embalsada</h1>
        </article>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', duration: 0.5 }}
        key="agua"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1, transition: { delay: delays[1] } },
        }}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        className="order-2 flex justify-center sm:col-span-2 sm:row-span-3 sm:rounded-lg sm:bg-slate-700"
      >
        <article className="flex h-[14rem] w-[14rem] flex-col items-center justify-around rounded-lg bg-slate-700 px-4 sm:h-full sm:w-auto sm:bg-transparent">
          <h1 className="text-4xl text-[#e9ead6] sm:text-2xl lg:text-4xl">Capacidad</h1>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            <span className="text-6xl font-black sm:text-4xl lg:text-6xl">
              {resCuenca.capacidad}
            </span>
            <span className="text-xl">hm³</span>
          </div>
          <h1 className="text-4xl text-[#e9ead6] sm:text-2xl lg:text-4xl">Total</h1>
        </article>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', duration: 0.5 }}
        key="agua"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1, transition: { delay: delays[2] } },
        }}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        className="order-3 col-span-2 row-span-3 flex justify-center rounded-lg sm:order-6"
      >
        <EmbalseGrafico porcentaje={resCuenca.porcentaje_embalsada} />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', duration: 0.5 }}
        key="agua"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1, transition: { delay: delays[3] } },
        }}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        className="order-4 flex justify-center sm:col-span-2 sm:row-span-3"
      >
        <article className="flex h-[14rem] w-[14rem] flex-col items-center justify-around rounded-lg bg-slate-700 px-4 sm:h-full">
          <h1 className="text-4xl text-[#e9ead6] sm:text-2xl lg:text-4xl">Variacion</h1>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            <span className="text-6xl font-black sm:text-4xl lg:text-6xl">
              {resCuenca.variacion}
            </span>
            <span className="text-xl">hm³</span>
          </div>
          <h1 className="text-center text-4xl text-[#e9ead6] sm:text-2xl lg:text-4xl">
            Sem. Anterior
          </h1>
        </article>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', duration: 0.5 }}
        key="agua"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1, transition: { delay: delays[4] } },
        }}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        className="order-5 flex justify-center sm:col-span-2 sm:row-span-3"
      >
        <article className="flex h-[14rem] w-[14rem] flex-col items-center justify-around rounded-lg bg-slate-700 px-4 sm:h-full">
          <h1 className="text-4xl text-[#e9ead6] sm:text-2xl lg:text-4xl">Variacion</h1>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            <span className="text-6xl font-black sm:text-4xl lg:text-6xl">
              {resCuenca.porcentaje_variacion}
            </span>
            <span className="text-xl">hm³</span>
          </div>
          <h1 className="text-center text-4xl text-[#e9ead6] sm:text-2xl lg:text-4xl">
            Sem. Anterior
          </h1>
        </article>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', duration: 0.5 }}
        key="agua"
        variants={{
          initial: { opacity: 0, scale: 0 },
          animate: { opacity: 1, scale: 1, transition: { delay: delays[5] } },
        }}
        initial="initial"
        viewport={{ once: true }}
        whileInView="animate"
        className="relative order-6 col-span-4 row-span-4 flex justify-center"
      >
        <div className="relative col-span-4 row-span-4 flex h-[14rem] w-[14rem] justify-center overflow-visible rounded-lg bg-slate-700 sm:h-full sm:w-full">
          <Image
            src={resCuenca.foto}
            alt={`Foto sobre la cuenca hidrográfica del ${cuenca}`}
            layout="fill"
            priority
            className="rounded-lg"
          />
        </div>
      </motion.div>

      <motion.div
        whileInView="animate"
        whileHover="hover"
        key="agua"
        variants={{
          initial: { opacity: 0, scale: 0 },
          hover: { scale: 1.1, transition: { delay: 0 } },
          animate: { opacity: 1, scale: 1, transition: { delay: delays[6] } },
        }}
        initial="initial"
        transition={{ type: 'spring' }}
        viewport={{ once: true }}
        className="order-7 flex justify-center sm:col-span-2 sm:row-span-3"
      >
        <article className="flex h-[14rem] w-[14rem] flex-col items-center justify-around rounded-lg bg-slate-700 px-4 sm:h-full">
          <h1 className="text-4xl text-[#e9ead6] sm:text-2xl lg:text-4xl">Embalses</h1>
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            <div className="animate-wiggle animate-infinite">
              <svg
                height="100px"
                width="100px"
                viewBox="0 0 512 512"
                fill="#ffffff"
                stroke="#ffffff"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  strokeWidth={0}
                />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <style type="text/css">{' .st0{fill:#ffd700;} '}</style>
                  <g>
                    <path
                      className="st0"
                      d="M470.968,180.987c-18.105-25.756-49.441-38.015-80.18-31.464V85.769C390.788,38.475,352.312,0,305.018,0 H206.98c-47.285,0-85.761,38.475-85.761,85.769v63.754c-30.688-6.585-62.058,5.666-80.214,31.498 c-9.295,13.206-14.228,28.771-14.228,44.959c0,15.071,4.319,29.726,12.49,42.395l0.869,1.337l0.928,1.295l150.01,207.799 C206.146,499.62,230.402,512,256.004,512c25.594,0,49.849-12.38,64.87-33.125l150.06-207.868l0.929-1.295l0.869-1.337 c8.17-12.67,12.49-27.324,12.49-42.395C485.222,209.784,480.298,194.227,470.968,180.987z M421.416,235.258L271.408,443.057 c-3.579,4.942-9.304,7.873-15.404,7.873s-11.834-2.93-15.412-7.873L90.582,235.258c-1.824-2.828-2.734-6.057-2.734-9.278 c0-3.45,1.048-6.892,3.118-9.84c4.012-5.708,11.084-8.401,17.866-6.808l73.458,17.159V85.769c0-13.64,11.05-24.698,24.69-24.698 h98.038c13.64,0,24.699,11.058,24.699,24.698v140.722l73.442-17.159c6.799-1.584,13.861,1.099,17.874,6.808 c2.079,2.948,3.118,6.39,3.118,9.84C424.152,229.201,423.24,232.43,421.416,235.258z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <h1 className="text-4xl text-[#e9ead6] sm:text-2xl lg:text-4xl">Cuenca</h1>
        </article>
      </motion.div>
    </div>
  )
}

export default BentoDist
