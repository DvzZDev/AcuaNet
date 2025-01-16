"use client"

import { useInView } from "react-intersection-observer"

export default function Info4() {
  const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true })
  const [titleRef, titleInView] = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <section className="section5bg relative flex h-fit items-center justify-center px-6 py-12">
      <div className="flex w-[45rem] flex-col items-center justify-center gap-7 md:gap-16">
        <h2
          ref={titleRef}
          className={`${titleInView && "animate-fade-in-right opacity-100"} w-fit rounded-2xl bg-black/25 p-3 text-center text-4xl font-black text-emerald-200 opacity-0 backdrop-blur-xl md:text-5xl lg:text-6xl`}
        >
          Nuestros <span className="glow2 text-[#93ffb7]">Patrocinadores.</span>
        </h2>
        <div
          ref={ref1}
          className={`${inView1 && "animate-fade-in opacity-100 animate-delay-700 md:animate-delay-0"} flex flex-wrap gap-3 rounded-xl bg-black/25 p-5 opacity-0 backdrop-blur-lg`}
        >
          <a
            href="https://www.agrbaits.es/"
            target="blank"
            className="transition-all hover:scale-105"
          >
            <img
              src="/Sponspors/AGRBaits.webp"
              alt="AGR Baits"
              className="h-28 md:h-36"
              draggable="false"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
