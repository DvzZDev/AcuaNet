"use client"

import { Analytics03Icon, DropletIcon, RulerIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import NumberFlow from "@number-flow/react"
import { motion, useInView as motionUseInView } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { twMerge } from "tailwind-merge"

export default function EstadoActual({
  agua_embalsada,
  agua_embalsadapor,
  capacidad_total,
  cota,
  variacion_ultima_semana,
  cota_date,
  variacion_ultima_semanapor,
  fecha_modificacion,
  pt,
}: {
  agua_embalsada: number
  agua_embalsadapor: number
  capacidad_total: number
  cota: number
  cota_date: Date | null
  variacion_ultima_semana: number
  variacion_ultima_semanapor: number
  fecha_modificacion: Date
  pt: boolean
}) {
  const { ref, inView } = useInView({
    threshold: 0.8,
  })

  const refM = useRef(null)
  const isInViewMotion = motionUseInView(refM, { once: true })

  const [valoresAnimados, setValoresAnimados] = useState({
    agua_embalsada: 0,
    agua_embalsadapor: 0,
    capacidad_total: 0,
    cota: 0,
    cota_date: null as Date | null,
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
        cota_date,
      })
    }
  }, [
    inView,
    agua_embalsada,
    agua_embalsadapor,
    cota_date,
    capacidad_total,
    cota,
    variacion_ultima_semana,
    variacion_ultima_semanapor,
  ])

  return (
    <>
      <div className="flex flex-col gap-1">
        <h2 className="font-['BlackRolmer'] text-3xl font-bold text-green-950">Datos semanales</h2>
        <div className="flex items-center gap-3">
          <div className="w-fit rounded-full bg-blue-200 px-2 py-[2px] text-xs">
            <p>Datos contrastados</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex w-fit items-center justify-center gap-1 rounded-full bg-cyan-200 px-2 py-[2px] text-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
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
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M4 11h16" />
                <path d="M11 15h1" />
                <path d="M12 15v3" />
              </svg>
              <p>
                Últ. Boletin{" "}
                {fecha_modificacion
                  ? new Date(fecha_modificacion).toLocaleString("es-ES", {
                      month: "short",
                      day: "numeric",
                    })
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        ref={ref}
        className="h-fit w-full rounded-2xl border border-green-300 bg-emerald-50 p-2"
      >
        {/* Agua Embalsada */}
        <div
          ref={refM}
          className={twMerge("grid grid-cols-1 justify-between gap-4 md:grid-cols-2", pt ? "lg:grid-cols-4" : "lg:grid-cols-3")}
        >
          <div className="flex w-full items-center gap-5 rounded-md p-2">
            <div className="rounded-2xl bg-emerald-200 p-3">
              <HugeiconsIcon
                icon={DropletIcon}
                size={35}
                color="#032e15"
              />
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
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInViewMotion ? { width: `${agua_embalsadapor}%` } : { width: 0 }}
                  transition={{ type: "spring", duration: 1 }}
                  className="relative h-3 rounded-full bg-[#a4f4cf]"
                ></motion.div>
              </div>
              <p className="text-sm font-semibold text-green-950">
                <NumberFlow value={valoresAnimados.agua_embalsadapor} /> <span className="text-[#032e15]">% capacidad total</span>
              </p>
            </div>
          </div>
          <div className="flex w-full items-center gap-5 rounded-md p-2">
            <div className="rounded-2xl bg-emerald-200 p-3">
              <HugeiconsIcon
                icon={RulerIcon}
                size={35}
                color="#032e15"
              />
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

          {pt && (
            <div className="flex w-full items-center gap-5 rounded-md p-2">
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

          {/* Nivel (Cota) - Condicional */}
          {cota != null && cota !== undefined && cota > 0 ? (
            <div className="flex w-full items-center gap-5 rounded-md p-2">
              <div className="rounded-2xl bg-emerald-200 p-3">
                <HugeiconsIcon
                  icon={Analytics03Icon}
                  size={35}
                  color="#032e15"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <p className="text-lg leading-none font-semibold text-[#3d7764]">Nivel (Cota)</p>
                <p className="text-3xl font-black text-green-950">
                  <NumberFlow
                    suffix="msnm"
                    value={valoresAnimados.cota}
                  />
                </p>
                {pt && valoresAnimados.cota_date && (
                  <p className="text-sm font-semibold text-[#3d7764]">
                    Últ. medición:{" "}
                    {new Date(valoresAnimados.cota_date).toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="flex w-full items-center gap-5 rounded-md p-2">
              <div className="rounded-2xl bg-emerald-200 p-3">
                <HugeiconsIcon
                  icon={Analytics03Icon}
                  size={35}
                  color="#032e15"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <p className="text-lg leading-none font-semibold text-[#3d7764] opacity-50">Nivel (Cota)</p>
                <p className="text-3xl font-black text-green-950 opacity-50">N/D</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
