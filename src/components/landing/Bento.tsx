"use client"
import "@fontsource-variable/comfortaa"
import { Link } from "next-view-transitions"
import { motion } from "framer-motion"
import type { BentoProps } from "@/types"
import { getMoonPhase } from "@/lib/GetMoonPhase"
import { translateMoonPhase } from "@/lib/TranslateMoon"
import { getColor } from "@/lib/ColorEsp"
import { colorReserva } from "@/lib/ColorReserva"

function Bento(props: BentoProps) {
  const cuencas = props.cuencas
  const variacionCuencas = props.variacionCuencas
  const variacionEmbalses = props.variacionEmbalses
  const esp = props.esp

  const variants = (i: number) => ({
    initial: { opacity: 0, y: 100 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, type: "spring", stiffness: 100, delay: i * 0.1 },
    },
  })

  const variantss = (i: number) => ({
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 50, delay: i * 0.1 },
    },
  })

  return (
    <section className="flex min-h-full flex-col items-center justify-center bg-gradient-to-t from-bgcolor via-bgcolor to-transparent py-8 lg:h-full lg:py-0">
      <h1 className="text-center font-NecoBold text-[40px] font-black text-textsecondary sm:text-[50px] md:pb-7">
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
              transition: { duration: 1, type: "spring", stiffness: 100 },
            },
          }}
          whileInView="animate"
          viewport={{ once: true, margin: "-70px" }}
          className="animate-once animate-ease-in-out col-span-4 row-span-1 flex justify-center text-wrap rounded-lg bg-[#0a0d30] bg-opacity-90 backdrop-blur-sm lg:col-span-4"
        >
          {esp.map((españa) => (
            <div
              key={españa.id}
              className="flex h-full w-full flex-col content-center justify-evenly rounded-lg text-center"
            >
              <h2 className="text-6xl font-bold text-[#7387f9]">Reserva</h2>
              <p
                className={`mb-4 inline-block text-[9rem] font-bold leading-none ${colorReserva(españa.porcentaje_embalsado)}`}
              >
                {`${españa.porcentaje_embalsado}`}
                <strong className="text-[3rem]">%</strong>
              </p>
              <h2 className="text-6xl font-bold text-[#7387f9]">Nacional</h2>
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
              transition: { duration: 1, type: "spring", stiffness: 100 },
            },
          }}
          whileInView="animate"
          viewport={{ once: true, margin: "-70px" }}
          id="bd2"
          className="col-span-6 row-span-1 flex min-h-full min-w-full content-center justify-center rounded-lg bg-[#0a0d30] bg-opacity-90 p-2 backdrop-blur-sm"
        >
          <motion.div
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, type: "spring", stiffness: 100 },
              },
            }}
            whileInView="animate"
            viewport={{ once: true }}
            className="grid h-full w-full grid-cols-2 grid-rows-8 gap-2 text-center lg:grid-cols-4 lg:grid-rows-4"
          >
            {cuencas.map((cuenca, index) => (
              <Link
                href={`/cuencas/${cuenca.cuenca}`}
                key={cuenca.cuenca}
              >
                <motion.div
                  whileTap={{ scale: 0.9, rotate: -10, transition: { duration: 0.2 } }}
                  key={index}
                  initial="initial"
                  variants={variants(index)}
                  whileInView="animate"
                  viewport={{ once: true, margin: "200px" }}
                  whileHover={{ scale: 1.1 }}
                  className={`flex h-full flex-col content-center items-center justify-center whitespace-normal rounded-md bg-opacity-90 p-1 ${getColor(cuenca.porcentaje_embalsada ?? 0)}`}
                >
                  <div className="flex flex-col content-center items-center justify-center">
                    <p className="text-[18px]">
                      {cuenca.cuenca.replace(/_/g, " ").replace(/-/g, " ")}
                    </p>
                    <p className="text-[18px]">{`${cuenca.porcentaje_embalsada ?? 0} %`}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Tercera Col */}
        <motion.div
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 100 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, type: "spring", stiffness: 100 },
            },
          }}
          whileInView="animate"
          viewport={{ once: true, margin: "-70px" }}
          className="relative col-span-6 overflow-hidden rounded-lg bg-[#0a0d30] bg-opacity-90 backdrop-blur-sm"
        >
          <h1 className="absolute left-1/2 z-10 -translate-x-1/2 transform p-2 text-center text-xl font-bold text-yellow-500 md:text-3xl">
            {translateMoonPhase()}
          </h1>
          <video
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src={getMoonPhase()}
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Cuarta Coluna */}
        <motion.div
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 100 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, type: "spring", stiffness: 100 },
            },
          }}
          whileInView="animate"
          viewport={{ once: true, margin: "-70px" }}
          className="col-span-4 rounded-lg bg-[#0a0d30] bg-opacity-90 backdrop-blur-sm"
        >
          <h1 className="p-2 text-center text-3xl font-bold text-[#7387f9]">
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
                    key={variacion.cuenca}
                    whileHover={{
                      backgroundColor: "#7184f5",
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9, rotate: -10, transition: { duration: 0.2 } }}
                  >
                    <td>
                      <Link href={`/cuencas/${variacion.cuenca}`}>
                        <p>
                          {variacion.cuenca ? variacion.cuenca.replace(/_/g, " ") : ""}
                        </p>
                      </Link>
                    </td>
                    <td className="w-[50%] text-right lg:w-auto">{`${variacion.porcentaje_variacion}`}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
            {/* Segunda Tabla */}
            <table className="w-full p-3 text-[16px]">
              <caption className="text-left text-[16px] font-bold text-[#47ff63ab]">
                Embalse
              </caption>
              <tbody className="text-textprimary">
                {variacionEmbalses.map((variacion, index) => (
                  <motion.tr
                    variants={variantss(index)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    key={variacion.nombre_embalse}
                    whileHover={{
                      backgroundColor: "#7184f5",
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9, rotate: -10, transition: { duration: 0.2 } }}
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
