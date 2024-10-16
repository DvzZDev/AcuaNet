"use client"
import "react-multi-carousel/lib/styles.css"
import { motion } from "framer-motion"
import Image from "next/image"

function Fuentes() {
  return (
    <section
      id="fuentes"
      className="flex h-auto flex-col items-center justify-center gap-6 bg-[#275e56] py-12 text-white"
    >
      <motion.h4
        initial="initial"
        variants={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        whileInView="animate"
        viewport={{ once: true, amount: 0.8 }}
        className="text-center text-[30px] leading-none text-white sm:text-[50px]"
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
        className="text-center text-[20px] text-white sm:text-[25px]"
      >
        Datos actualizdos cada 24 horas.
      </motion.h4>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-16">
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
