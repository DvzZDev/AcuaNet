"use client"
import { Link } from "next-view-transitions"
import type { BentoProps } from "@/types"
import { getMoonPhase } from "@/lib/GetMoonPhase"
import { translateMoonPhase } from "@/lib/TranslateMoon"
import { getColor } from "@/lib/ColorEsp"
import { colorReserva } from "@/lib/ColorReserva"
import { InView } from "react-intersection-observer"

function Bento(props: BentoProps) {
  const cuencas = props.cuencas
  const variacionCuencas = props.variacionCuencas
  const variacionEmbalses = props.variacionEmbalses
  const esp = props.esp

  return (
    <section className="flex flex-col items-center justify-center bg-[#f1fbf7] bg-gradient-to-t py-5 md:py-10 lg:h-full">
      <h2 className="text-center text-[2.3rem] font-black leading-none text-[#1b7b6e] sm:mb-6 sm:text-[50px]">Resumen Global</h2>
      {/* Div Global */}
      <div className="mx-6 my-4 flex flex-col justify-center gap-7 md:my-8 lg:m-0 lg:grid lg:h-[46rem] lg:w-[60rem] lg:grid-cols-10 lg:grid-rows-2 lg:gap-3">
        {/* Primera Col */}
        <InView
          triggerOnce
          threshold={0.3}
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`col-span-4 row-span-1 flex justify-center text-wrap rounded-xl bg-[#114d45] bg-opacity-90 shadow-2xl shadow-[#114d45] backdrop-blur-sm transition-all lg:col-span-4 ${inView ? "opacity-100 duration-500 animate-in slide-in-from-left-52" : "opacity-0"}`}
            >
              {esp.map((españa) => (
                <div
                  key={españa.id}
                  className="flex h-full w-full flex-col content-center justify-evenly gap-3 rounded-xl text-center"
                >
                  <h2 className="text-3xl text-green-300 md:text-5xl">Reserva</h2>
                  <p
                    className={`inline-block text-6xl font-bold leading-none md:text-[8rem] ${colorReserva(españa.porcentaje_embalsado)}`}
                  >
                    {`${españa.porcentaje_embalsado}`}
                    <strong className="text-2xl md:text-[3rem]">%</strong>
                  </p>
                  <h2 className="text-3xl text-green-300 md:text-5xl">Nacional</h2>
                </div>
              ))}
            </div>
          )}
        </InView>

        {/* Segunda col */}
        <InView
          triggerOnce
          threshold={0.3}
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              id="bd2"
              className={`col-span-6 row-span-1 flex min-h-full min-w-full content-center justify-center rounded-xl bg-[#114d45] bg-opacity-90 p-2 shadow-2xl shadow-[#114d45] backdrop-blur-sm transition-all ${inView ? "opacity-100 duration-500 animate-in slide-in-from-right-52" : "opacity-0"}`}
            >
              <div className="grid h-full w-full grid-cols-2 grid-rows-8 gap-2 text-center lg:grid-cols-4 lg:grid-rows-4">
                {cuencas.map((cuenca, index) => (
                  <Link
                    href={`/cuencas/${cuenca.cuenca}`}
                    key={index}
                  >
                    <div
                      className={`flex h-full flex-col content-center items-center justify-center whitespace-normal rounded-md bg-opacity-90 p-1 transition-transform hover:scale-95 ${getColor(cuenca.porcentaje_embalsada ?? 0)}`}
                    >
                      <div className="flex flex-col content-center items-center justify-center">
                        <p className="text-sm md:text-[15px]">{cuenca.cuenca.replace(/_/g, " ").replace(/-/g, " ")}</p>
                        <p className="text-sm md:text-[15px]">{`${cuenca.porcentaje_embalsada ?? 0} %`}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </InView>

        {/* Tercera Col */}
        <InView
          triggerOnce
          threshold={0.3}
        >
          {({ inView, ref }) => (
            <a
              ref={ref}
              href="/luna"
              className={`relative col-span-6 overflow-hidden rounded-xl bg-[#114d45] bg-opacity-90 shadow-2xl shadow-[#114d45] backdrop-blur-sm transition-all ${inView ? "opacity-100 duration-500 animate-in slide-in-from-left-52" : "opacity-0"}`}
            >
              <h2 className="absolute left-1/2 z-10 w-full -translate-x-1/2 transform pt-3 text-center text-3xl text-yellow-500 md:pt-5 md:text-5xl">
                {translateMoonPhase()}
              </h2>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source
                  src={getMoonPhase()}
                  type="video/mp4"
                />
              </video>
            </a>
          )}
        </InView>

        {/* Cuarta Coluna */}
        <InView
          triggerOnce
          threshold={0.3}
        >
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`col-span-4 rounded-xl bg-[#114d45] bg-opacity-90 shadow-2xl shadow-[#114d45] backdrop-blur-sm transition-all ${inView ? "opacity-100 duration-500 animate-in slide-in-from-right-52" : "opacity-0"}`}
            >
              <h2 className="p-2 text-center text-3xl text-green-300">Mayor Variacion Semanal</h2>
              <div className="flex flex-col content-center justify-center px-3">
                {/* Primera Tabla */}
                <table className="mb-1 w-full text-[16px]">
                  <thead className="text-[16px] font-extrabold text-green-300">
                    <tr>
                      <th className="text-left">Cuenca</th>
                      <th className="text-right">%</th>
                    </tr>
                  </thead>
                  <tbody className="text-green-50">
                    {variacionCuencas.map((variacion) => (
                      <tr
                        className="hover:bg-green-500/20"
                        key={variacion.cuenca}
                      >
                        <td>
                          <Link href={`/cuencas/${variacion.cuenca}`}>
                            <p>{variacion.cuenca ? variacion.cuenca.replace(/_/g, " ") : ""}</p>
                          </Link>
                        </td>
                        <td className="w-[50%] text-right lg:w-auto">{`${variacion.porcentaje_variacion}`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Segunda Tabla */}
                <table className="w-full p-3 text-[16px]">
                  <caption className="text-left text-[16px] font-bold text-green-300">Embalse</caption>
                  <tbody className="text-green-50">
                    {variacionEmbalses.map((variacion, index) => (
                      <tr
                        className="hover:bg-green-500/20"
                        key={index}
                      >
                        <td>{variacion.nombre_embalse?.replace(/\b\w/g, (char) => char.toUpperCase())}</td>
                        <td className="text-right">{`${variacion.variacion_ultima_semanapor}`}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </InView>
      </div>
    </section>
  )
}

export default Bento
