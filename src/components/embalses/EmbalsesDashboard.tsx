"use client"
import { Embalses } from "@/types"
import LunarCalendar from "../lunar/lunarcal"
import IntroCuencas from "./Dashboard/IntroCuencas"
import EstadoActual from "./Dashboard/EstadoActual"
import HistorialCambios from "./Dashboard/HistorialCambios"
import OpenWeather from "../weather/openWeather"
import { usePathname } from "next/navigation"

export default function EmbalsesDashboard({ data }: { data: Embalses }) {
  const {
    agua_embalsada,
    agua_embalsadapor,
    variacion_ultima_semana,
    capacidad_total,
    variacion_ultima_semanapor,
    fecha_modificacion,
    nombre_cuenca,
    misma_semana_10años,
    misma_semana_10añospor,
    misma_semana_ultimo_año,
    misma_semana_ultimo_añopor,
  } = data

  const pathname = usePathname().slice(10)

  return (
    <main className="flex h-full justify-center bg-green-50 px-6 pb-14 pt-4 text-black">
      <section className="flex w-[70rem] flex-col gap-7">
        <IntroCuencas
          nombre_cuenca={nombre_cuenca || "No disponible"}
          fecha_modificacion={
            fecha_modificacion ? new Date(fecha_modificacion) : new Date()
          }
        />

        <EstadoActual
          agua_embalsada={agua_embalsada || 0}
          agua_embalsadapor={agua_embalsadapor || 0}
          capacidad_total={capacidad_total || 0}
          cota={data.cota || 0}
        />
        <HistorialCambios
          variacion_ultima_semana={variacion_ultima_semana || 0}
          variacion_ultima_semanapor={variacion_ultima_semanapor || 0}
          misma_semana_ultimo_año={misma_semana_ultimo_año || 0}
          misma_semana_ultimo_añopor={misma_semana_ultimo_añopor || 0}
          misma_semana_10años={misma_semana_10años || 0}
          misma_semana_10añospor={misma_semana_10añospor || 0}
        />

        <h3 className="text-2xl font-black text-green-950">Predicción Meteorológica</h3>
        <OpenWeather pathname={pathname} />

        <h3 className="text-2xl font-black text-green-950">Calendario Lunar</h3>
        <section className="h-fit w-full rounded-lg border border-green-900/30 bg-green-100 p-2">
          <LunarCalendar />
        </section>
      </section>
    </main>
  )
}
