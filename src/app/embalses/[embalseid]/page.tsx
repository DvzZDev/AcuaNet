import TitleEmb from "@/components/embalses/TitleEmb"
import { GetEmbalses } from "db/queries/select"
import Divider from "@/components/cuencas/Divider"
import NotFound from "@/app/not-found"
import FavButton from "@/components/embalses/FavButton"
import IntroCuencas from "@/components/embalses/Dashboard/IntroCuencas"
import EstadoActual from "@/components/embalses/Dashboard/EstadoActual"
import HistorialCambios from "@/components/embalses/Dashboard/HistorialCambios"
import LunarCalendar from "@/components/lunar/lunarcal"
import GetCoordinates from "@/lib/GetCoordinates"

import dynamicInport from "next/dynamic"
import { Suspense } from "react"
import GetWeather from "@/lib/GetWeather"
import TableWeather from "@/components/weather/TableWeather"

const DynamicMap = dynamicInport(() => import("@/components/embalses/Dashboard/MapEmb"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

export const revalidate = 60
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

export function generateMetadata({ params }: { params: { embalseid: string } }) {
  return {
    title: `${params.embalseid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.embalseid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
    description: `Información sobre el embalse de ${params.embalseid.replace(/%20/g, " ")}`,

    openGraph: {
      title: `${params.embalseid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.embalseid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
      description: `Información sobre el embalse de ${params.embalseid.replace(/%20/g, " ")}`,
      url: `https://acuanet.es/embalses/${params.embalseid}`,
      siteName: "AcuaNet",
      images: [
        {
          url: "https://i.imgur.com/LQvr7AX.png",
          width: 800,
          height: 600,
        },
        {
          url: "https://i.imgur.com/LQvr7AX.png",
          width: 1800,
          height: 1600,
          alt: "Og image from AcuaNet",
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${params.embalseid.replace(/%20/g, " ").charAt(0).toUpperCase()}${params.embalseid.replace(/%20/g, " ").slice(1).toLowerCase()} - AcuaNet`,
      description: `Información sobre el embalse de ${params.embalseid.replace(/%20/g, " ")}`,
      creator: "@_DvzZ_",
      images: ["https://i.imgur.com/LQvr7AX.png"],
    },
  }
}

async function Page({ params }: { params: { embalseid: string } }) {
  const decodedEmbalseid = decodeURIComponent(params.embalseid)
  const coords = GetCoordinates(decodedEmbalseid)
  const embalses = GetEmbalses()

  const [coordsData, embalsesData] = await Promise.all([coords, embalses])

  const weatherData = coordsData ? await GetWeather(coordsData.lat, coordsData.lon) : null

  const resEmbalse = embalsesData.find((embalse) => embalse.nombre_embalse.toLowerCase() === decodedEmbalseid.toLowerCase())

  if (!resEmbalse) {
    return <NotFound />
  }

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
    cota,
  } = resEmbalse

  return (
    <>
      <TitleEmb data={resEmbalse} />
      <Divider />
      <FavButton url={{ embalseid: decodedEmbalseid }} />
      <main className="flex h-full justify-center bg-green-50 px-6 pb-14 pt-4 text-black">
        <section className="flex w-[70rem] flex-col gap-7">
          <Suspense fallback={<p>Loading...</p>}>
            <IntroCuencas
              nombre_cuenca={nombre_cuenca || "No disponible"}
              fecha_modificacion={fecha_modificacion ? new Date(fecha_modificacion) : new Date()}
            />
          </Suspense>
          <Suspense fallback={<p>Loading...</p>}>
            <EstadoActual
              agua_embalsada={agua_embalsada || 0}
              agua_embalsadapor={agua_embalsadapor || 0}
              capacidad_total={capacidad_total || 0}
              cota={cota || 0}
            />
          </Suspense>
          <Suspense fallback={<p>Loading...</p>}>
            <HistorialCambios
              variacion_ultima_semana={variacion_ultima_semana || 0}
              variacion_ultima_semanapor={variacion_ultima_semanapor || 0}
              misma_semana_ultimo_año={misma_semana_ultimo_año || 0}
              misma_semana_ultimo_añopor={misma_semana_ultimo_añopor || 0}
              misma_semana_10años={misma_semana_10años || 0}
              misma_semana_10añospor={misma_semana_10añospor || 0}
            />
          </Suspense>
          {coordsData && (
            <Suspense fallback={<p>Loading...</p>}>
              <DynamicMap coords={coordsData} />
            </Suspense>
          )}
          {weatherData && (
            <Suspense fallback={<p>Loading...</p>}>
              <TableWeather data={weatherData} />
            </Suspense>
          )}

          <h3 className="text-2xl font-black text-green-950">Calendario Lunar</h3>
          <section className="h-fit w-full rounded-lg border border-green-900/30 bg-green-100 p-2">
            <Suspense fallback={<p>Loading...</p>}>
              <LunarCalendar />
            </Suspense>
          </section>
        </section>
      </main>
    </>
  )
}

export default Page
