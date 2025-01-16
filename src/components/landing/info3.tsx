"use client"

import { useInView } from "react-intersection-observer"
import ImageRef from "./ImageRef"

export default function Info3() {
  const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true })
  const [titleRef, titleInView] = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <section className="section3bg relative flex h-fit items-center justify-center px-6 py-12 md:h-screen">
      <div className="flex w-[45rem] flex-col gap-7 md:gap-16 xl:-mr-[30rem] 2xl:-mr-[50rem]">
        <h2
          ref={titleRef}
          className={`${titleInView && "animate-fade-in-right opacity-100"} w-fit rounded-2xl bg-black/25 p-3 text-left text-4xl font-black text-emerald-200 opacity-0 backdrop-blur-xl md:text-5xl lg:text-6xl`}
        >
          Necesitamos tu <span className="glow2 text-[#93ffb7]">ayuda.</span>
        </h2>
        <article
          ref={ref1}
          className={`${inView1 && "animate-fade-in opacity-100 animate-delay-700 md:animate-delay-0"} rounded-xl bg-black/25 p-5 text-lg leading-relaxed text-emerald-50 opacity-0 backdrop-blur-lg md:text-xl md:leading-relaxed`}
        >
          La construcción de AcuaNet ha sido un proyecto personal que ha llevado mucho tiempo y esfuerzo. Por eso te
          agradeceríamos que compartieras esta web con todos los pescadores a los que conozcas. Así juntos podremos hacer de esta
          web una herramienta en el día a día de todos los pescadores.
          <br />
          <br />
          También puedes ayudarnos a mejorar la web, si encuentras algún error o tienes alguna idea para mejorar la web,
          escríbenos a nuestro Instagram{" "}
          <a
            rel="noreferer noopener"
            target="blank"
            href="https://www.instagram.com/acuanet.es/"
            className="glow2 text-green-300"
          >
            @acuanet.es
          </a>{" "}
          y estaré encantado de escucharte.
        </article>
        <ImageRef
          id="@jaimetheangler"
          link="https://www.instagram.com/jaimetheangler/"
        />
      </div>
    </section>
  )
}
