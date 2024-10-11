import { GetCuencas } from "db/queries/select"
import BentoDist from "./BentoDist"
import { Cuenca } from "@/types"
async function BentoDataUnique(params: { url: { cuencaid: string } }) {
  const cuenca = await GetCuencas()
  return (
    <BentoDist
      params={params}
      data={cuenca as unknown as Cuenca[]}
    />
  )
}

export default BentoDataUnique
