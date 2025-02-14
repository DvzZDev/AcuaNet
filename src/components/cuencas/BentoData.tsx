import BentoCuencas from "./BentoCuencas"
import { GetCuencas } from "@/db/queries/select"

async function BentoData() {
  const cuencas = await GetCuencas()
  console.log(cuencas)
  return <BentoCuencas data={cuencas} />
}

export default BentoData
