'use client'
import '@fontsource-variable/comfortaa'
import { Link } from 'next-view-transitions'
import { motion } from 'framer-motion'

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

function Bento(props) {
  const cuencas = props.cuencas
  const variacionCuencas = props.variacionCuencas
  const variacionEmbalses = props.variacionEmbalses
  const esp = props.esp
  const pluvis = props.pluvis

  const variants = (i) => ({
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: 'spring', stiffness: 100, delay: i * 0.1 },
    },
  })

  const variantss = (index) => ({
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 50, delay: index * 0.1 },
    },
  })

  return (
    <section className="flex min-h-full flex-col items-center justify-center bg-gradient-to-t from-bgcolor via-bgcolor to-transparent py-8 lg:h-full lg:py-0">
      <h1 className="pb-7 text-center font-telmaBlack text-6xl font-black text-textsecondary">
        Resumen Global
      </h1>
      {/* Div Global */}
      <div className="mx-4 my-8 flex flex-col justify-center gap-7 lg:m-0 lg:grid lg:h-[46rem] lg:w-[60rem] lg:grid-cols-10 lg:grid-rows-2 lg:gap-3">
        {/* Primera Col */}
        <motion.div
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 100 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, type: 'spring', stiffness: 100 },
            },
          }}
          whileInView="animate"
          viewport={{ once: true, margin: '-70px' }}
          className="col-span-4 row-span-1 flex justify-center text-wrap rounded-lg bg-[#0a0d30] bg-opacity-90 backdrop-blur-sm animate-once animate-ease-in-out lg:col-span-4"
        >
          {esp.map((españa, index) => (
            <div
              key={españa.id}
              className="flex h-full w-full flex-col content-center justify-evenly rounded-lg text-center"
            >
              <h2 className="text-6xl text-[#7387f9]">Reserva</h2>
              <span
                className={`inline-block font-telmaRegular text-[9rem] font-bold leading-none ${españa.porcentaje_embalsado > 50 ? 'text-green-500' : 'text-red-500'}`}
              >
                {`${españa.porcentaje_embalsado}`}
                <strong className="text-[3rem]">%</strong>
              </span>
              <h2 className="text-6xl text-[#7387f9]">Nacional</h2>
            </div>
          ))}
        </motion.div>

        {/*   Segunda col */}
        <motion.div
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 100 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, type: 'spring', stiffness: 100 },
            },
          }}
          whileInView="animate"
          viewport={{ once: true, margin: '-70px' }}
          id="bd2"
          className="col-span-6 row-span-1 flex min-h-full min-w-full content-center justify-center rounded-lg bg-[#0a0d30] bg-opacity-90 p-2 backdrop-blur-sm"
        >
          <div
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 100 },
              animation: {
                opacity: 100,
                y: 0,
                transition: { duration: 1, type: 'spring', stiffness: 100 },
              },
              whileInView: 'animate',
              viewport: { once: true },
            }}
            className="grid h-full w-full grid-cols-2 grid-rows-8 gap-2 text-center lg:grid-cols-4 lg:grid-rows-4"
          >
            {cuencas.map((cuenca, index) => (
              <Link
                href={`/cuencas/${cuenca.cuenca}`}
                key={cuenca.id_cuenca}
              >
                <motion.div
                  key={index}
                  initial="initial"
                  variants={variants(index)}
                  whileInView="animate"
                  viewport={{ once: true, margin: '200px' }}
                  whileHover={{ scale: 1.1 }}
                  className={`flex h-full flex-col content-center items-center justify-center whitespace-normal rounded-md bg-opacity-90 p-1 hover:scale-110 ${getColor(cuenca.porcentaje_embalsada)}`}
                >
                  <div className="flex flex-col content-center items-center justify-center">
                    <p className="text-[18px]">
                      {cuenca.cuenca.replace(/_/g, ' ').replace(/-/g, ' ')}
                    </p>
                    <p className="text-[18px]">{`${cuenca.porcentaje_embalsada} %`}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Tercera Col */}
        <motion.div
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 100 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, type: 'spring', stiffness: 100 },
            },
          }}
          whileInView="animate"
          viewport={{ once: true, margin: '-70px' }}
          className="col-span-6 rounded-lg bg-[#0a0d30] bg-opacity-90 backdrop-blur-sm"
        >
          <h1 className="p-2 text-center text-2xl font-normal text-[#7387f9]">
            Pluviometros últimas horas (l/m2)
          </h1>
          <div className="flex flex-col content-center justify-center px-2 text-[15px] lg:text-[16px]">
            <table className="text-textprimary">
              <thead className="text-left text-[#47ff63ab]">
                <motion.tr
                  initial="initial"
                  variants={variants(0)}
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <th className="px-1">Pluviometro</th>
                  <th className="px-1 text-right">Prov</th>
                  <th className="px-1 text-right">1h</th>
                  <th className="px-1 text-right">6h</th>
                  <th className="px-1 text-right">12h</th>
                  <th className="px-1 text-right">24h</th>
                </motion.tr>
              </thead>
              <tbody>
                {pluvis.map((pluvi, index) => (
                  <motion.tr
                    variants={variantss(index)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="hover:scale-105 hover:text-[#0b92e4]"
                    key={pluvi.id_pluviometro}
                  >
                    <td className="p-1">{pluvi.nombre}</td>
                    <td className="p-1 text-right">{pluvi.provincia}</td>
                    <td className="p-1 text-right">{pluvi.h1}</td>
                    <td className="p-1 text-right">{pluvi.h6}</td>
                    <td className="p-1 text-right">{pluvi.h12}</td>
                    <td className="p-1 text-right">{pluvi.h24}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Cuarta Coluna */}
        <motion.div
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 100 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, type: 'spring', stiffness: 100 },
            },
          }}
          whileInView="animate"
          viewport={{ once: true, margin: '-70px' }}
          className="col-span-4 rounded-lg bg-[#0a0d30] bg-opacity-90 backdrop-blur-sm"
        >
          <h1 className="p-2 text-center text-2xl font-normal text-[#7387f9]">
            Mayor Variacion Semanal
          </h1>
          <div className="flex flex-col content-center justify-center px-3">
            {/* Primera Tabla */}
            <table className="mb-1 w-full text-[16px]">
              <thead className="text-[16px] font-extrabold text-[#47ff63ab]">
                <motion.tr
                  initial="initial"
                  variants={variants(0)}
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <th className="text-left">Cuenca</th>
                  <th className="text-right">%</th>
                </motion.tr>
              </thead>
              <tbody className="text-textprimary">
                {variacionCuencas.map((variacion, index) => (
                  <motion.tr
                    variants={variantss(index)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="hover:scale-105 hover:text-[#0b92e4]"
                    key={variacion.cuenca}
                  >
                    <td>
                      <Link href={`/cuencas/${variacion.cuenca}`}>
                        <p>{variacion.cuenca.replace(/_/g, ' ')}</p>
                      </Link>
                    </td>
                    <td className="w-[50%] text-right lg:w-auto">{`${variacion.porcentaje_variacion}`}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            {/* Segunda Tabla */}
            <table className="w-full p-3 text-[16px]">
              <caption className="text-left text-[16px] font-extrabold text-[#47ff63ab]">
                Embalse
              </caption>
              <tbody className="text-textprimary">
                {variacionEmbalses.map((variacion, index) => (
                  <motion.tr
                    variants={variantss(index)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="hover:scale-105 hover:text-[#0b92e4]"
                    key={variacion.nombre_embalse}
                  >
                    <td>{variacion.nombre_embalse}</td>
                    <td className="text-right">{`${variacion.variacion_ultima_semanapor}`}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Bento
