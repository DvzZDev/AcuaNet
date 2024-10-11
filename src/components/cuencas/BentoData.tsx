import BentoCuencas from "./BentoCuencas"
import { GetCuencas } from "db/queries/select"

export const revalidate = 60
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

async function BentoData() {
  const cuencas = await GetCuencas()
  return <BentoCuencas data={cuencas} />
}

export default BentoData
