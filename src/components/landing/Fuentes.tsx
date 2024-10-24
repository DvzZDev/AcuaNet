"use client"
import "react-multi-carousel/lib/styles.css"
import Image from "next/image"

function Fuentes() {
  return (
    <section
      id="fuentes"
      className="flex h-auto flex-col items-center justify-center bg-[#275e56] py-8 text-white md:py-12"
    >
      <h4 className="text-center text-[2.3rem] font-bold leading-none text-green-100 sm:text-[50px]">
        Fuentes Oficiales
      </h4>
      <h4 className="mt-3 text-center text-[20px] text-green-200">
        Datos actualizdos cada 24 horas.
      </h4>
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
