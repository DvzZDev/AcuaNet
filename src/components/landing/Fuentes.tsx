"use client"
import "react-multi-carousel/lib/styles.css"
import { motion } from "framer-motion"
import Image from "next/image"

function Fuentes() {
  return (
    <section
      id="fuentes"
      className="flex h-auto flex-col items-center justify-center bg-[#275e56] py-8 md:py-12 text-white"
    >
      <motion.h4
        initial="initial"
        variants={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
        className="text-center text-[2.3rem] font-bold leading-none text-green-100 sm:text-[50px]"
      >
        Fuentes Oficiales
      </motion.h4>
      <motion.h4
        initial="initial"
        variants={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
        className="text-center text-[20px] text-green-200 mt-3"
      >
        Datos actualizdos cada 24 horas.
      </motion.h4>
      <div className="mt-8 flex flex-col gap-7 md:flex-row md:gap-16">
        <Image
          src="/aemet.webp"
          alt="Aemet España"
          width={200}
          height={200}
        />
        <Image
          src="/miteco.webp"
          alt="Aemet España"
          width={200}
          height={200}
        />
        <Image
          src="/sahi.webp"
          alt="Aemet España"
          width={200}
          height={200}
        />
      </div>
    </section>
  )
}

export default Fuentes
