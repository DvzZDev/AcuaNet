import TitleEmb from "@/components/embalses/TitleEmb"
import { GetEmbalses } from "@/db/queries/select"
import NotFound from "@/app/not-found"
import FavButton from "@/components/embalses/FavButton"
import IntroCuencas from "@/components/embalses/Dashboard/IntroCuencas"
import EstadoActual from "@/components/embalses/Dashboard/EstadoActual"
import HistorialCambios from "@/components/embalses/Dashboard/HistorialCambios"
import LunarCalendar from "@/components/lunar/lunarcal"
import GetCoordinates from "@/lib/GetCoordinates"
import GetWeather from "@/lib/GetWeather"
import ButtonUp from "@/components/lunar/up"
import MapEmbData from "@/components/embalses/Dashboard/MapDynamic"
import TableWeather from "@/components/weather/TableWeather"

export async function generateMetadata(props: { params: Promise<{ embalseid: string }> }) {
  const params = await props.params
  const embalseName = params.embalseid.replace(/%20/g, " ")
  const embalseFormatted = `${embalseName.charAt(0).toUpperCase()}${embalseName.slice(1).toLowerCase()}`

  return {
    title: `Embalse de ${embalseFormatted} - Planifica tu jornada de pesca`,
    description: `Consulta información detallada sobre el embalse de ${embalseName}, incluyendo niveles de agua, pronóstico meteorológico y datos útiles para tus salidas de pesca en tiempo real.`,
    keywords: `${embalseName}, embalse de ${embalseName} , pesca de black bass, pesca de lucio, black bass, lucio, pesca deportiva, ${embalseName} pesca, pesca en ${embalseName}, pesca blackbass ${embalseName}, pesca lucio ${embalseName}, acuanet`,
    alternates: {
      canonical: `/embalses/${params.embalseid}`,
    },
    openGraph: {
      title: `Embalse de ${embalseFormatted} - Planifica tu jornada de pesca con AcuaNet`,
      description: `Consulta los niveles de agua, condiciones meteorológicas y más sobre el embalse de ${embalseName}, con datos actualizados para planificar tu jornada de pesca.`,
      url: `https://acuanet.es/embalses/${params.embalseid}`,
      siteName: "AcuaNet",
      images: [
        {
          url: "https://i.imgur.com/LQvr7AX.png",
          width: 800,
          height: 600,
          alt: "OpenGrah AcuaNet",
        },
        {
          url: "https://i.imgur.com/LQvr7AX.png",
          width: 1800,
          height: 1600,
          alt: "OpenGrah AcuaNet",
        },
      ],
      locale: "es_ES",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${embalseFormatted} - Planifica tu jornada de pesca con AcuaNet`,
      description: `Accede a información completa sobre el embalse de ${embalseName}, con datos en tiempo real sobre niveles de agua y pronósticos para pescadores.`,
      creator: "@_DvzZ_",
      images: ["https://i.imgur.com/LQvr7AX.png"],
    },
  }
}

async function Page(props: { params: Promise<{ embalseid: string }> }) {
  const params = await props.params
  const decodedEmbalseid = decodeURIComponent(params.embalseid)
  const embalses = GetEmbalses()
  const embalsesData = await embalses
  const resEmbalse = embalsesData.find((embalse) => embalse.nombre_embalse.toLowerCase() === decodedEmbalseid.toLowerCase())

  if (!resEmbalse) {
    return <NotFound />
  }

  let coordsData
  let weatherData

  if (resEmbalse?.lat === null || resEmbalse?.lon === null) {
    const coords = GetCoordinates(decodedEmbalseid).catch((error) => {
      console.error("Error recuperando las coordenadas", error)
    })
    coordsData = await coords
    weatherData = coordsData ? await GetWeather(coordsData.lat, coordsData.lon) : undefined
  } else {
    weatherData = await GetWeather(resEmbalse.lat, resEmbalse.lon)
    coordsData = { lat: resEmbalse.lat, lon: resEmbalse.lon, name: resEmbalse.nombre_embalse }
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
    pais,
  } = resEmbalse

  return (
    <>
      <TitleEmb data={resEmbalse} />
      <FavButton url={{ embalseid: decodedEmbalseid }} />
      <main className="flex justify-center bg-green-50 px-6 pb-14 pt-4 text-black">
        <section className="flex w-[70rem] flex-col gap-7">
          <IntroCuencas
            nombre_cuenca={nombre_cuenca || "No disponible"}
            fecha_modificacion={fecha_modificacion ? new Date(fecha_modificacion) : new Date()}
            weather={weatherData}
            embalse={resEmbalse}
            cuenca={false}
          />
          <EstadoActual
            agua_embalsada={agua_embalsada || 0}
            agua_embalsadapor={agua_embalsadapor || 0}
            capacidad_total={capacidad_total || 0}
            cota={cota || 0}
            pais={pais || "N/D"}
            variacion_ultima_semana={variacion_ultima_semana || 0}
            variacion_ultima_semanapor={variacion_ultima_semanapor || 0}
          />
          {pais === "España" ? (
            <HistorialCambios
              variacion_ultima_semana={variacion_ultima_semana || 0}
              variacion_ultima_semanapor={variacion_ultima_semanapor || 0}
              misma_semana_ultimo_año={misma_semana_ultimo_año || 0}
              misma_semana_ultimo_añopor={misma_semana_ultimo_añopor || 0}
              misma_semana_10años={misma_semana_10años || 0}
              misma_semana_10añospor={misma_semana_10añospor || 0}
            />
          ) : (
            ""
          )}

          {coordsData ? <MapEmbData coords={coordsData} /> : null}
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl bg-emerald-900/25 p-5 backdrop-blur-lg">
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

          {weatherData && <TableWeather data={weatherData} />}
          <h2 className="text-2xl font-black text-green-950">Calendario Lunar</h2>
          <section className="h-fit w-full rounded-lg border border-green-900/30 bg-green-100 p-2">
            <LunarCalendar />
          </section>
        </section>
        <ButtonUp />
      </main>
    </>
  )
}

export default Page
