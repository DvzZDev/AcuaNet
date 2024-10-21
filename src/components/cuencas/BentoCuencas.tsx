"use client"
import { Link } from "next-view-transitions"
import { motion } from "framer-motion"
import type { Cuenca } from "@/types"
import { ColorCuencas } from "@/lib/ColorCuencas"

const BentoCuencas = ({ data }: { data: Cuenca[] }) => {
  const cuencas = data

  return (
    <section className="flex h-full justify-center bg-green-50">
      <div className="m-10 mt-2 grid min-h-[33rem] w-[55rem] grid-cols-1 grid-rows-none gap-4 text-center md:grid-cols-2 lg:grid-cols-4">
        {cuencas.map((cuenca, index: number) => (
          <>
            <Link href={`/cuencas/${cuenca.cuenca}`}>
              <motion.div
                initial="initial"
                whileTap={{ scale: 0.9, rotate: -10, transition: { duration: 0.2 } }}
                variants={{
                  hover: {
                    scale: 1.1,
                    transition: { duration: 0.1 },
                  },
                  initial: { opacity: 0, y: -100 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.1,
                      type: "spring",
                      stiffness: 100,
                    },
                  },
                }}
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                className={`flex h-full cursor-pointer flex-col content-center items-center justify-center whitespace-normal rounded-md bg-opacity-70 p-1 ${ColorCuencas(cuenca.porcentaje_embalsada ?? 0)}`}
                key={cuenca.cuenca}
              >
                <div className="flex flex-col content-center items-center justify-center p-2">
                  <p className="text-base">
                    {cuenca.cuenca.replace(/_/g, " ").replace(/-/g, " ")}
                  </p>
                  <p className="text-base">{`${cuenca.porcentaje_embalsada} %`} </p>
                  <p className="text-sm">
                    {`${cuenca.porcentaje_embalsada} hm³`} de {`${cuenca.capacidad} hm³`}{" "}
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
