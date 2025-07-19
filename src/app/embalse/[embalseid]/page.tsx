import type { Embalses } from "@/types"
import TitleEmb from "@/components/embalses/TitleEmb"
import { GetHistoricalData, GetLiveData, GetManualCoords, GetPortugalData } from "@/db/queries/select"
import NotFound from "@/app/not-found"
import FavButton from "@/components/embalses/FavButton"
import IntroCuencas from "@/components/embalses/Dashboard/IntroCuencas"
import EstadoActual from "@/components/embalses/Dashboard/EstadoActual"
import HistorialCambios from "@/components/embalses/Dashboard/HistorialCambios"
import LunarCalendar from "@/components/lunar/lunarcal"
import { LastWeekVariation, GetCountry, getSameWeekLastYearCapacity, getSameWeekLast10YearsAverage } from "@/lib/DataEmbalses"
import LiveData from "@/components/embalses/Dashboard/LiveData"
import GetCoordinates from "@/lib/GetCoordinates"
import GetWeather from "@/lib/GetWeather"
import ButtonUp from "@/components/lunar/up"
import MapEmbData from "@/components/embalses/Dashboard/MapDynamic"
import TableWeather from "@/components/weather/TableWeather"
import Publi from "@/components/embalses/Dashboard/Publi"
import FilterHistoricalData from "@/lib/FilterHistoricalData"
import Chart from "@/components/embalses/Dashboard/Chart"

interface Coordinates {
  lat: number
  lon: number
  name: string
}

const formatReservoirName = (name: string): string => {
  const specialCases: Record<string, string> = {
    "torrejón-(tajo---tietar)": "Torrejón (Tajo - Tietar)",
    "tous---la-ribera": "Tous - La Ribera",
  }

  const normalizedName = name.toLowerCase().trim()
  return specialCases[normalizedName] || name.replace(/-/g, " ")
}

async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ embalseid: string }>
  searchParams: Promise<{ pt?: string }>
}) {
  const { embalseid } = await params
  const refinedEmbalseid = decodeURIComponent(embalseid)
  const { pt } = await searchParams

  const decodedEmbalseid = formatReservoirName(decodeURIComponent(embalseid))

  let resEmbalse
  let pActual = 0
  let LastWeek = { lastWeek: 0, pctDifference: 0 }
  let lData
  let pais
  let misma_semana_ultimo_año_vol = 0
  let misma_semana_ultimo_año_por = 0
  let media_10_anos = 0
  let pctMedia10 = 0
  let coordsData
  let weatherData

  if (pt) {
    resEmbalse = await GetPortugalData(decodedEmbalseid.toLowerCase())
    if (resEmbalse.length > 0) {
      coordsData = {
        lat: resEmbalse[0].lat,
        lon: resEmbalse[0].lon,
      } as Coordinates
      weatherData = await GetWeather(coordsData.lat, coordsData.lon)
    }
  } else {
    const MCoords = await GetManualCoords(refinedEmbalseid)

    if (MCoords[0].lat && MCoords[0].long) {
      coordsData = {
        lat: MCoords[0].lat,
        lon: MCoords[0].long,
      } as Coordinates
      console.log(MCoords)
    } else {
      coordsData = await GetCoordinates(decodedEmbalseid)
    }

    const embalses = (await GetHistoricalData(decodedEmbalseid)) as unknown as Embalses[]
    resEmbalse = embalses

    if (coordsData.lat && coordsData.lon) {
      weatherData = await GetWeather(coordsData.lat, coordsData.lon)
    }

    if (!resEmbalse) {
      return <NotFound />
    }

    pActual = embalses[0].porcentaje || 0
    LastWeek = LastWeekVariation(embalses.slice(0, 2))
    lData = await GetLiveData(decodedEmbalseid)
    FilterHistoricalData({ data: embalses })
    pais = GetCountry(decodedEmbalseid)

    const yearCapacity = getSameWeekLastYearCapacity(embalses)
    misma_semana_ultimo_año_vol = yearCapacity?.vol || 0
    misma_semana_ultimo_año_por = yearCapacity?.por || 0

    media_10_anos = getSameWeekLast10YearsAverage(embalses) || 0
    const capacidadTotal = embalses[0]?.capacidad_total || 1
    pctMedia10 = capacidadTotal ? Number(((media_10_anos / capacidadTotal) * 100).toFixed(2)) : 0
  }
  console.log(decodedEmbalseid)

  const {
    embalse,
    cuenca,
    fecha,
    capacidad_total,
    volumen_actual,
    porcentaje,
    variacion_ultima_semana,
    variacion_ultima_semanapor,
  } = resEmbalse[0]

  return (
    <>
      <TitleEmb
        data={
          pt
            ? embalse
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            : embalse
        }
      />
      <FavButton url={{ embalseid: decodedEmbalseid }} />
      <main className="flex justify-center bg-green-50 px-4 pt-4 pb-14 text-black">
        <section className="flex w-full max-w-[70rem] flex-col gap-7">
          <IntroCuencas
            nombre_cuenca={cuenca || "No disponible"}
            fecha_modificacion={fecha ? new Date(fecha) : new Date()}
            weather={weatherData}
            embalse={resEmbalse}
            cuenca={false}
          />
          {!pt && lData && lData.length > 0 ? <LiveData data={lData} /> : ""}

          <EstadoActual
            agua_embalsada={volumen_actual || 0}
            agua_embalsadapor={pActual ? pActual : porcentaje || 0}
            capacidad_total={capacidad_total || 0}
            cota={lData?.[0]?.cota ?? 0}
            pais={pais || "N/D"}
            fecha_modificacion={fecha ? new Date(fecha) : new Date()}
            variacion_ultima_semana={LastWeek.lastWeek ? LastWeek.lastWeek : variacion_ultima_semana || 0}
            variacion_ultima_semanapor={LastWeek.pctDifference ? LastWeek.pctDifference : variacion_ultima_semanapor || 0}
          />

          {!pt ? (
            <HistorialCambios
              variacion_ultima_semana={LastWeek.lastWeek || 0}
              variacion_ultima_semanapor={LastWeek.pctDifference || 0}
              misma_semana_ultimo_año={misma_semana_ultimo_año_vol || 0}
              misma_semana_ultimo_añopor={misma_semana_ultimo_año_por || 0}
              misma_semana_10años={media_10_anos || 0}
              misma_semana_10añospor={pctMedia10 || 0}
            />
          ) : (
            ""
          )}
          {!pt ? (
            <>
              <h2 className="text-2xl font-bold text-green-950">Datos Históricos</h2>
              <section className="h-fit items-center justify-center rounded-xl border border-green-700/50 bg-black lg:p-4 lg:pb-0">
                <Chart data={resEmbalse} />
              </section>
            </>
          ) : (
            ""
          )}
          {weatherData && <TableWeather data={weatherData} />}
          {coordsData?.lat ? <MapEmbData coords={coordsData} /> : null}
          <h2 className="text-2xl font-bold text-yellow-600">Patrocinadores y anuncios</h2>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-evenly rounded-xl bg-emerald-900/25 p-5 backdrop-blur-lg">
            <a
              href="https://www.agrbaits.es/"
              target="blank"
              className="flex items-center  transition-all hover:scale-105"
              style={{ aspectRatio: "auto" }}
            >
              <img
                src="/Sponspors/AGRBaits.webp"
                alt="AGR Baits"
                className="h-24 object-contain md:h-36"
                draggable="false"
                style={{ aspectRatio: "auto" }}
              />
            </a>
            <div className="mt-2 flex flex-1 flex-col md:flex-row items-center justify-center gap-4">
              <p className="rounded-xl bg-green-100 p-2 text-left font-semibold text-green-950 text-sm lg:text-base">
                La aplicación móvil de AcuaNet estará disponible a <strong>finales de verano</strong>. Actualmente se encuentra en
                su fase final de desarrollo.
              </p>
              <img
                className="h-auto w-52 rounded-xl object-contain"
                src="/CatchReport.png"
                alt="Catch Report Image Preview"
              />
              <video
                className="h-auto w-52 rounded-xl object-contain"
                src="/CatchGallery.mp4"
                autoPlay
                playsInline
                preload="auto"
                loop
                muted
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-green-950">Calendario Lunar</h2>
          <section className="h-fit w-full rounded-lg border border-green-900/30 bg-green-100 p-2">
            <LunarCalendar />
          </section>
          <Publi />
        </section>
        <ButtonUp />
      </main>
    </>
  )
}

export default Page
