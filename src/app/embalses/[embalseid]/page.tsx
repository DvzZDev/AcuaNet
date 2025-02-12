import type { Embalses } from "@/types"
import TitleEmb from "@/components/embalses/TitleEmb"
import { GetHistoricalData, GetLiveData } from "@/db/queries/select"
import NotFound from "@/app/not-found"
import FavButton from "@/components/embalses/FavButton"
import IntroCuencas from "@/components/embalses/Dashboard/IntroCuencas"
import EstadoActual from "@/components/embalses/Dashboard/EstadoActual"
import HistorialCambios from "@/components/embalses/Dashboard/HistorialCambios"
import LunarCalendar from "@/components/lunar/lunarcal"
import { LastWeekVariation, GetCountry, getSameWeekLastYearCapacity, getSameWeekLast10YearsAverage } from "@/lib/DataEmbalses"
import LiveData from "@/components/embalses/Dashboard/LiveData"

// import GetCoordinates from "@/lib/GetCoordinates"
// import GetWeather from "@/lib/GetWeather"
import ButtonUp from "@/components/lunar/up"
// import MapEmbData from "@/components/embalses/Dashboard/MapDynamic"
// import TableWeather from "@/components/weather/TableWeather"
import Publi from "@/components/embalses/Dashboard/Publi"
import FilterHistoricalData from "@/lib/FilterHistoricalData"
import Chart from "@/components/embalses/Dashboard/Chart"
// import Names from "@/lib/nombresEmbalses.json"

interface PageProps {
  params: { embalseid: string }
}

async function Page({ params }: PageProps) {
  const { embalseid } = params
  const decodedEmbalseid = embalseid.replace(/-/g, " ")
  const embalses = (await GetHistoricalData(decodedEmbalseid)) as Embalses[]
  const pActual = embalses[0].porcentaje
  const LastWeek = LastWeekVariation(embalses.slice(0, 2))
  const lData = await GetLiveData(decodedEmbalseid)
  FilterHistoricalData({ data: embalses })
  const pais = GetCountry(decodedEmbalseid)
  const { vol: misma_semana_ultimo_año_vol, por: misma_semana_ultimo_año_por } = getSameWeekLastYearCapacity(embalses) || {
    vol: 0,
    por: 0,
  }
  const media_10_anos = getSameWeekLast10YearsAverage(embalses) || 0
  const actualVolume = embalses[0]?.volumen_actual || 0

  const diffMedia10 = actualVolume - media_10_anos
  const pctMedia10 = media_10_anos ? Number(((diffMedia10 / media_10_anos) * 100).toFixed(2)) : 0

  const resEmbalse = embalses

  if (!resEmbalse) {
    return <NotFound />
  }

  const { embalse, cuenca, fecha, capacidad_total, volumen_actual } = resEmbalse[0]

  return (
    <>
      <TitleEmb data={embalse} />
      <FavButton url={{ embalseid: decodedEmbalseid }} />
      <main className="flex justify-center bg-green-50 px-4 pt-4 pb-14 text-black">
        <section className="flex w-full max-w-[70rem] flex-col gap-7">
          <IntroCuencas
            nombre_cuenca={cuenca || "No disponible"}
            fecha_modificacion={fecha ? new Date(fecha) : new Date()}
            // weather={weatherData}
            // embalse={resEmbalse}
            cuenca={false}
          />

          <LiveData data={lData} />

          <EstadoActual
            agua_embalsada={volumen_actual || 0}
            agua_embalsadapor={pActual || 0}
            capacidad_total={capacidad_total || 0}
            cota={0}
            pais={"N/D"}
            variacion_ultima_semana={LastWeek.lastWeek || 0}
            variacion_ultima_semanapor={LastWeek.pctDifference || 0}
          />

          {pais === "España" ? (
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

          <h2 className="text-2xl font-black text-green-950">Datos Históricos</h2>
          <section className="h-fit items-center justify-center rounded-xl border border-green-700/50 bg-black lg:p-4 lg:pb-0">
            <Chart data={embalses} />
          </section>

          {/* {coordsData ? <MapEmbData coords={coordsData} /> : null} */}
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
          {/* {weatherData && <TableWeather data={weatherData} />} */}
          <h2 className="text-2xl font-black text-green-950">Calendario Lunar</h2>
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
