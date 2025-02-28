"use client"

import NumberFlow from "@number-flow/react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function EstadoActual({
  agua_embalsada,
  agua_embalsadapor,
  capacidad_total,
  cota,
  pais,
  variacion_ultima_semana,
  variacion_ultima_semanapor,
}: {
  agua_embalsada: number
  agua_embalsadapor: number
  capacidad_total: number
  cota: number
  pais: string
  variacion_ultima_semana: number
  variacion_ultima_semanapor: number
}) {
  const { ref, inView } = useInView({
    threshold: 0.8,
  })

  const [valoresAnimados, setValoresAnimados] = useState({
    agua_embalsada: 0,
    agua_embalsadapor: 0,
    capacidad_total: 0,
    cota: 0,
    variacion_ultima_semana: 0,
    variacion_ultima_semanapor: 0,
  })

  useEffect(() => {
    if (inView) {
      setValoresAnimados({
        agua_embalsada,
        agua_embalsadapor,
        capacidad_total,
        cota,
        variacion_ultima_semana,
        variacion_ultima_semanapor,
      })
    }
  }, [inView, agua_embalsada, agua_embalsadapor, capacidad_total, cota, variacion_ultima_semana, variacion_ultima_semanapor])

  return (
    <>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-green-950">Datos semanales</h2>
        <div className="w-fit rounded-full bg-blue-200 px-2 py-[2px] text-xs">
          <p>Datos contrastados</p>
        </div>
      </div>

      <section
        ref={ref}
        className="h-fit w-full rounded-lg border border-green-900/30 bg-green-100 p-2"
      >
        {/* Agua Embalsada */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-10 lg:gap-32">
          <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
            <div className="rounded-xs bg-green-400/50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-droplets"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M4.072 20.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
                <path d="M16.072 20.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
                <path d="M10.072 10.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
              </svg>
            </div>

            <div className="flex w-full flex-col gap-2">
              <p className="text-lg leading-none font-semibold text-[#3d7764]">Agua Embalsada</p>
              <p className="text-3xl font-black text-green-950">
                <NumberFlow
                  suffix="hm³"
                  value={valoresAnimados.agua_embalsada}
                  willChange={true}
                />
              </p>
              <div className="relative h-3 w-full rounded-full bg-green-950">
                <div
                  className="relative h-3 rounded-full bg-[#1ca077]"
                  style={{ width: `${agua_embalsadapor}%` }}
                ></div>
              </div>
              <p className="text-sm font-semibold text-green-950">
                <NumberFlow value={valoresAnimados.agua_embalsadapor} /> <span className="text-[#3d7764]">% capacidad total</span>
              </p>
            </div>
          </div>
          {/* Capacidad Total */}
          <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
            <div className="rounded-xs bg-green-400/50 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
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
                <path d="M17 3l4 4l-14 14l-4 -4z" />
                <path d="M16 7l-1.5 -1.5" />
                <path d="M13 10l-1.5 -1.5" />
                <path d="M10 13l-1.5 -1.5" />
                <path d="M7 16l-1.5 -1.5" />
              </svg>
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="text-lg leading-none font-semibold text-[#3d7764]">Capacidad Total</p>
              <p className="text-3xl font-black text-green-950">
                <NumberFlow
                  suffix="hm³"
                  value={valoresAnimados.capacidad_total}
                />{" "}
              </p>
            </div>
          </div>

          {pais === "España" ? (
            <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
              <div className="rounded-xs bg-green-400/50 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mountain"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                </svg>
              </div>
              <div className="flex w-full flex-col gap-2">
                <p className="text-lg leading-none font-semibold text-[#3d7764]">Nivel (Cota)</p>
                <p className="text-3xl font-black text-green-950">
                  {cota > 0 ? (
                    <>
                      <NumberFlow
                        suffix="msnm"
                        value={valoresAnimados.cota}
                      />
                    </>
                  ) : (
                    "N/D"
                  )}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
              <div className="rounded-xs bg-green-400/50 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
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
                  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h16" />
                  <path d="M8 14v4" />
                  <path d="M12 14v4" />
                  <path d="M16 14v4" />
                </svg>
              </div>
              <div className="flex w-full flex-col gap-2">
                <p className="text-lg leading-none font-semibold text-[#3d7764]">Cambios Semanales</p>
                <p className="text-3xl font-black text-green-950">
                  <NumberFlow
                    suffix="hm³"
                    value={valoresAnimados.variacion_ultima_semana}
                  />
                </p>
                <p className="text-sm font-semibold text-[#3d7764]">
                  <NumberFlow value={valoresAnimados.variacion_ultima_semanapor} />% capacidad total
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
