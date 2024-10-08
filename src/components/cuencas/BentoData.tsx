import BentoCuencas from "./BentoCuencas"
import { FetchCuencas } from "@/lib/data"
import type { Cuenca } from "@/types/BentoTypes"

export const revalidate = 60
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

async function BentoData() {
  const cuencas = await FetchCuencas()

  return <BentoCuencas data={cuencas as Cuenca} />
}

export default BentoData
