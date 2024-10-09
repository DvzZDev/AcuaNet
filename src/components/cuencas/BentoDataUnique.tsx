import { FetchCuencas } from "@/lib/data"
import BentoDist from "./BentoDist"
import { Cuenca } from "@/types/BentoTypes"
async function BentoDataUnique(params: { url: { cuencaid: string } }) {
  const cuenca = await FetchCuencas()
  return (
    <BentoDist
      params={params}
      data={cuenca as unknown as Cuenca[]}
    />
  )
}

export default BentoDataUnique
