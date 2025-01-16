"use client"

import { useInView } from "react-intersection-observer"
import ImageRef from "@/components/landing/ImageRef"

export default function Info2() {
  const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true })
  const [titleRef, titleInView] = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <section className="section2bg relative flex h-fit items-center justify-center px-6 py-10 md:h-screen">
      <div className="flex w-[45rem] flex-col gap-7 md:gap-16 xl:-ml-[30rem] 2xl:-ml-[50rem]">
        <h2
          ref={titleRef}
          className={`${titleInView && "animate-fade-in-right opacity-100"} w-fit rounded-2xl bg-black/25 p-3 text-left text-4xl font-black text-emerald-200 opacity-0 backdrop-blur-2xl md:text-5xl lg:text-6xl`}
        >
          Preocúpate de pescar, <span className="glow2 text-[#93ffb7]">AcuaNet</span> hace el resto.
        </h2>
        <article
          ref={ref1}
          className={`${inView1 && "animate-fade-in opacity-100 animate-delay-700 md:animate-delay-0"} rounded-xl bg-black/20 p-5 text-lg leading-relaxed md:leading-relaxed text-emerald-50 opacity-0 backdrop-blur-lg md:text-xl`}
        >
          Nosotros te proporcionamos toda la información necesaria y relevante para tu jornada de pesca, desde los niveles de los
          embalses, hasta el pronóstico del tiempo y las condiciones de pesca en tu zona favorita.
          <br />
          <br />
          Todo en un mismo sitio con una interfaz clara, visual y lo más importante sin anuncios molestos.
          <br />
          <br />
          Todos los datos que encuentres en AcuaNet provienen de fuentes oficiales y actualizados.
          <br />
          <br />
          <div className="flex items-center gap-5">
            <img
              src="/miteco.webp"
              alt="Ministerio para la Transición Ecológica y el Reto Demográfico"
              className="h-4 w-auto md:h-8"
            />
            <img
              src="/sahi.webp"
              alt="Sistema Automático de Información Hidrológica"
              className="h-4 w-auto md:h-8"
            />
            <img
              src="/ECM.png"
              alt="Sistema Automático de Información Hidrológica"
              className="h-4 w-auto md:h-7"
            />
          </div>
        </article>
        <ImageRef
          id="@san_fru"
          link="https://www.instagram.com/san_fru/"
        />
      </div>
    </section>
  )
}
