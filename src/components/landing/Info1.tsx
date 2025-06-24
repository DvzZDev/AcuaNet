"use client"

import { useInView } from "react-intersection-observer"
import ImageRef from "./ImageRef"

export default function Info1() {
  const [ref1, inView1] = useInView({ threshold: 0.5, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.5, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.5, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.5, triggerOnce: true })
  const [ref5, inView5] = useInView({ threshold: 0.5, triggerOnce: true })
  const [ref6, inView6] = useInView({ threshold: 0.5, triggerOnce: true })
  const [titleRef, titleInView] = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <section className="section4bg relative flex h-fit items-center justify-center px-6 py-10 md:h-screen">
      <div className="flex w-fit flex-col items-center gap-7 md:gap-16 xl:-mr-[25rem] 2xl:-mr-[40rem]">
        <h2
          ref={titleRef}
          className={`${titleInView && "animate-fade-in-right opacity-100"} w-fit rounded-2xl bg-black/25 p-3 text-left text-4xl font-semibold text-emerald-200 opacity-0 backdrop-blur-2xl md:text-5xl lg:text-6xl`}
        >
          Toda la información a un <span className="glow2 text-[#93ffb7]">clic</span>
        </h2>
        <div className="flex w-full flex-col items-center justify-center gap-6 md:grid md:w-fit md:grid-cols-2 md:gap-x-14">
          <div
            ref={ref1}
            className={`${inView1 && "animate-fade-in opacity-100"} order-1 col-span-1 flex h-[8.5rem] w-[20rem] flex-col items-center justify-center gap-5 rounded-xl bg-blue-600/40 opacity-0 backdrop-blur-md transition-all hover:scale-105`}
          >
            <div className="rounded-full bg-blue-500 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </div>
            <h3 className="text-xl text-blue-100 md:text-xl">Busca tu embalse favorito</h3>
          </div>
          <div
            ref={ref2}
            className={`${inView2 && "animate-fade-in opacity-100"} order-2 col-span-1 flex h-[8.5rem] w-[20rem] flex-col items-center justify-center gap-5 rounded-xl bg-blue-300/50 opacity-0 backdrop-blur-md transition-all hover:scale-105`}
          >
            <img
              src="/orellanas.png"
              alt="Orellanas"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div
            ref={ref3}
            className={`${inView3 && "animate-fade-in opacity-100"} order-4 col-span-1 flex h-[8.5rem] w-[20rem] flex-col items-center justify-center gap-5 rounded-xl bg-blue-300/20 opacity-0 backdrop-blur-md transition-all hover:scale-105 md:order-3`}
          >
            <img
              src="/data.png"
              alt="Orellanas"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
          <div
            ref={ref4}
            className={`${inView4 && "animate-fade-in opacity-100"} order-3 col-span-1 flex h-[8.5rem] w-[20rem] flex-col items-center justify-center gap-5 rounded-xl bg-green-700/40 opacity-0 backdrop-blur-md transition-all hover:scale-105 md:order-4`}
          >
            <div className="rounded-full bg-green-500 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                <path d="M9 17v-5" />
                <path d="M12 17v-1" />
                <path d="M15 17v-3" />
              </svg>
            </div>
            <h3 className="text-xl text-green-100 md:text-xl">Interpreta los datos</h3>
          </div>

          <div
            ref={ref5}
            className={`${inView5 && "animate-fade-in opacity-100"} order-5 col-span-1 flex h-[8.5rem] w-[20rem] flex-col items-center justify-center gap-5 rounded-xl bg-purple-500/40 opacity-0 backdrop-blur-md transition-all hover:scale-105`}
          >
            <div className="rounded-full bg-purple-500 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M16 9v6a5 5 0 0 1 -10 0v-4l3 3" />
                <path d="M16 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M16 5v-2" />
              </svg>
            </div>
            <h3 className="text-xl text-purple-100 md:text-xl">Saca un pepino</h3>
          </div>
          <div
            ref={ref6}
            className={`${inView6 && "animate-fade-in opacity-100"} order-6 col-span-1 flex h-[8.5rem] w-[20rem] flex-col items-center justify-center gap-5 rounded-xl bg-green-300/20 opacity-0 backdrop-blur-md transition-all hover:scale-105`}
          >
            <img
              src="/yo22.webp"
              alt="Orellanas"
              className="h-full w-full rounded-xl object-cover object-[center_40%]"
            />
          </div>
        </div>
        <ImageRef
          id="@dvzz.dev"
          link="https://www.instagram.com/dvzz.dev/"
        />
      </div>
    </section>
  )
}
