"use client"

import { Calendar03FreeIcons, GoBackward10SecFreeIcons, OneCircleFreeIcons } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import NumberFlow from "@number-flow/react"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function HistorialCambios({
  variacion_ultima_semana,
  variacion_ultima_semanapor,
  misma_semana_ultimo_año,
  misma_semana_ultimo_añopor,
  misma_semana_10años,
  misma_semana_10añospor,
}: {
  variacion_ultima_semana: number
  variacion_ultima_semanapor: number
  misma_semana_ultimo_año: number
  misma_semana_ultimo_añopor: number
  misma_semana_10años: number
  misma_semana_10añospor: number
}) {
  const { ref, inView } = useInView({
    threshold: 0.8,
  })

  const [valoresAnimados, setValoresAnimados] = useState({
    variacion_ultima_semana: 0,
    variacion_ultima_semanapor: 0,
    misma_semana_ultimo_año: 0,
    misma_semana_ultimo_añopor: 0,
    misma_semana_10años: 0,
    misma_semana_10añospor: 0,
  })

  useEffect(() => {
    if (inView) {
      setValoresAnimados({
        variacion_ultima_semana,
        variacion_ultima_semanapor,
        misma_semana_ultimo_año,
        misma_semana_ultimo_añopor,
        misma_semana_10años,
        misma_semana_10añospor,
      })
    }
  }, [
    inView,
    variacion_ultima_semana,
    variacion_ultima_semanapor,
    misma_semana_ultimo_año,
    misma_semana_ultimo_añopor,
    misma_semana_10años,
    misma_semana_10añospor,
  ])

  return (
    <>
      <h2 className="font-['BlackRolmer'] text-3xl font-bold text-green-950">Historial de cambios</h2>

      <section
        ref={ref}
        className="h-fit w-full rounded-2xl border border-green-300 bg-emerald-50 p-2"
      >
        {/* Hace una semana */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-10 lg:gap-32">
          <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
            <div className="rounded-2xl bg-emerald-200 p-3">
              <HugeiconsIcon
                icon={Calendar03FreeIcons}
                size={35}
                color="#032e15"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="text-lg leading-none font-semibold text-[#3d7764]">Cambios Semanales</p>
              <p className="text-3xl font-black text-green-950">
                <NumberFlow
                  suffix="hm³"
                  value={valoresAnimados.variacion_ultima_semana}
                />
              </p>
              <p className="text-sm font-semibold text-[#032e15]">
                {" "}
                <NumberFlow value={valoresAnimados.variacion_ultima_semanapor} /> % variación total
              </p>
            </div>
          </div>
          {/* Hace un año */}
          <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
            <div className="rounded-2xl bg-emerald-200 p-3">
              <HugeiconsIcon
                icon={OneCircleFreeIcons}
                size={35}
                color="#032e15"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="text-lg leading-none font-semibold text-[#3d7764]">Hace un año</p>
              <p className="text-3xl font-black text-green-950">
                <NumberFlow
                  suffix="hm³"
                  value={valoresAnimados.misma_semana_ultimo_año}
                />{" "}
              </p>
              <p className="text-sm font-semibold text-[#032e15]">
                {" "}
                <NumberFlow value={valoresAnimados.misma_semana_ultimo_añopor} /> % capacidad total
              </p>
            </div>
          </div>
          {/* Hace 10 años */}
          <div className="flex w-full items-center gap-5 rounded-md p-2 md:w-1/3">
            <div className="rounded-2xl bg-emerald-200 p-3">
              <HugeiconsIcon
                icon={GoBackward10SecFreeIcons}
                size={35}
                color="#032e15"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="text-lg leading-none font-semibold text-[#3d7764]">Hace 10 años</p>
              <p className="text-3xl font-black text-green-950">
                <NumberFlow
                  suffix="hm³"
                  value={valoresAnimados.misma_semana_10años}
                />
              </p>
              <p className="text-sm font-semibold text-[#032e15]">
                <NumberFlow value={valoresAnimados.misma_semana_10añospor} /> % capacidad total
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
