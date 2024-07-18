'use client'
import { Link } from 'next-view-transitions'
import { motion, spring } from 'framer-motion'

function BentoCuencas(props) {
  const cuencas = props.data
  const delays = [
    0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6,
  ]

  function getColor(porcentaje) {
    if (porcentaje >= 80) {
      return 'bg-blue-200 text-blue-900 font-bold text-[18px]'
    } else if (porcentaje >= 60) {
      return 'bg-green-200 text-green-900 font-bold text-[18px]'
    } else if (porcentaje >= 40) {
      return 'bg-yellow-200 text-yellow-900 font-bold text-[18px]'
    } else if (porcentaje >= 20) {
      return 'bg-orange-200 text-orange-950 font-bold text-[18px]'
    } else {
      return 'bg-red-200 text-red-900 font-bold text-[18px]'
    }
  }

  return (
    <section className="flex h-full justify-center bg-bgcolor">
      <div className="m-10 mt-2 grid min-h-[40rem] w-[65rem] grid-cols-1 grid-rows-none gap-4 text-center md:grid-cols-2 lg:grid-cols-4">
        {cuencas.map((cuenca, index) => (
          <>
            <Link href={`/cuencas/${cuenca.cuenca}`}>
              <motion.div
                initial="initial"
                variants={{
                  hover: {
                    scale: 1.1,
                    transition: { duration: 0.1 },
                  },
                  initial: { opacity: 0, y: -100 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    viewport: { once: true },
                    transition: {
                      delay: index * 0.1,
                      duration: 0.1,
                      type: 'spring',
                      stiffness: 100,
                    },
                  },
                }}
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                className={`flex h-full cursor-pointer flex-col content-center items-center justify-center whitespace-normal rounded-md bg-opacity-70 p-1 text-[1.52rem] ${getColor(cuenca.porcentaje_embalsada)}`}
                key={cuenca.cuenca}
              >
                <div className="flex flex-col content-center items-center justify-center p-2">
                  <p>{cuenca.cuenca.replace(/_/g, ' ').replace(/-/g, ' ')}</p>
                  <p>{`${cuenca.porcentaje_embalsada} %`} </p>
                  <p>
                    {`${cuenca.porcentaje_embalsada} hm³`} de {`${cuenca.capacidad} hm³`}{' '}
                  </p>
                </div>
              </motion.div>
            </Link>
          </>
        ))}
      </div>
    </section>
  )
}

export default BentoCuencas
