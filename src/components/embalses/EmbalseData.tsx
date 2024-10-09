import { FetchEmbalses } from "@/lib/data"
import TitleEmb from "./TitleEmb"
import Divider from "../cuencas/Divider"
import EmbalseContent from "./EmbalseContent"
import NotFound from "@/app/not-found"
import { Embalses } from "@/types/BentoTypes"

export interface Embalse {
  id_embalse: number
  fecha_modificacion: string
  nombre_embalse: string
  nombre_cuenca: string
  agua_embalsada: number
  agua_embalsadapor: number
  variacion_ultima_semana: number
  variacion_ultima_semanapor: number
  capacidad_total: number
  misma_semana_ultimo_año: number
  misma_semana_ultimo_añopor: number
  misma_semana_10años: number
  misma_semana_10añospor: number
}

export const revalidate = 60
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

interface EmbalseDataProps {
  url: {
    embalseid: string
  }
}

async function EmbalseData({ url }: EmbalseDataProps) {
  const embalses = await FetchEmbalses()
  const decodedEmbalseid = decodeURIComponent(url.embalseid)
  const resEmbalse = embalses.find(
    (embalse) => embalse.nombre_embalse.toLowerCase() === decodedEmbalseid.toLowerCase()
  )

  if (!resEmbalse) {
    return <NotFound />
  }

  return (
    <>
      <TitleEmb data={resEmbalse as { nombre_embalse: string }} />
      <Divider />
      <EmbalseContent data={resEmbalse as Embalses} />
    </>
  )
}

export default EmbalseData
