import { FetchCuencas } from "@/lib/data"
import BentoDist from "./BentoDist"
async function BentoDataUnique(params: { url: { cuencaid: string } }) {
  const cuenca = await FetchCuencas()
  return (
    <BentoDist
      params={params}
      data={cuenca}
    />
  )
}

export default BentoDataUnique
