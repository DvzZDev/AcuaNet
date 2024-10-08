import { FetchEmbalses } from "@/lib/data"
import TitleEmb from "./TitleEmb"
import Divider from "../cuencas/Divider"
import EmbalseContent from "./EmbalseContent"
import NotFound from "@/app/not-found"

export const revalidate = 60
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

async function EmbalseData({ url }: { url: { embalseid: string } }) {
  const embalse = await FetchEmbalses()
  const decodedEmbalseid = decodeURIComponent(url.embalseid)
  const resEmbalse = embalse.find(
    (embalse: { nombre_embalse: string }) =>
      embalse.nombre_embalse.toLowerCase() === decodedEmbalseid.toLowerCase()
  )

  if (!resEmbalse) {
    return <NotFound />
  }

  return (
    <>
      <TitleEmb data={resEmbalse} />
      <Divider />
      <EmbalseContent data={resEmbalse} />
    </>
  )
}

export default EmbalseData
