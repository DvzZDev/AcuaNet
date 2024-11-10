import TitleEmb from "./TitleEmb"
import { GetEmbalses } from "db/queries/select"
import Divider from "../cuencas/Divider"
// import EmbalseContent from "./EmbalseContent"
import NotFound from "@/app/not-found"
import EmbalsesDashboard from "./EmbalsesDashboard"
import FavButton from "./FavButton"

export const revalidate = 60
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

interface EmbalseDataProps {
  url: {
    embalseid: string
  }
}

async function EmbalseData({ url }: EmbalseDataProps) {
  const embalses = await GetEmbalses()
  const decodedEmbalseid = decodeURIComponent(url.embalseid)
  const resEmbalse = embalses.find(
    (embalse) => embalse.nombre_embalse.toLowerCase() === decodedEmbalseid.toLowerCase()
  )

  if (!resEmbalse) {
    return <NotFound />
  }

  return (
    <>
      <TitleEmb data={resEmbalse} />
      <Divider />
      <EmbalsesDashboard data={resEmbalse} />
      <FavButton url={url} />
    </>
  )
}

export default EmbalseData
