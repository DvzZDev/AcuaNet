"use client"

import { useInView } from "react-intersection-observer"

export default function Info2() {
  const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true })
  const [titleRef, titleInView] = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <section className="section2bg flex h-fit items-center justify-center px-6 py-10 md:h-screen">
      <div className="flex w-[45rem] flex-col gap-12 md:gap-16 xl:-ml-[15rem] 2xl:-ml-[50rem]">
        <h2
          ref={titleRef}
          className={`${titleInView && "animate-fade-in-right opacity-100"} w-fit rounded-2xl bg-black/25 p-3 text-left text-4xl font-black text-emerald-200 opacity-0 backdrop-blur-2xl md:text-5xl lg:text-6xl`}
        >
          Preocúpate de pescar, <span className="glow2 text-[#93ffb7]">AcuaNet</span> se encarga del resto.
        </h2>
        <article
          ref={ref1}
          className={`${inView1 && "animate-fade-in opacity-100 animate-delay-700 md:animate-delay-0"} rounded-xl bg-black/20 p-5 text-lg text-emerald-50 opacity-0 backdrop-blur-lg`}
        >
          Nos encargamos de recopilar toda la información por ti, desde los niveles de los embalses hasta el pronóstico del
          tiempo, todo en una interfaz sencilla, rápida y fácil de usar.
          <br />
          <br />
          No pierdas tiempo buscando en diferentes páginas llenas de anuncios cuando puedes hacerlo todo en una sola.
        </article>
      </div>
    </section>
  )
}
