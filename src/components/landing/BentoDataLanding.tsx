import {
  FetchCuencas,
  FetchCuencaVariacion,
  FetchEmbalsesVariacion,
  FetchEsp,
  FetchPluvis,
} from "../../lib/data"
import Bento from "./Bento"

import { Cuencas } from "db/queries/select"
const cuencas = await Cuencas()
console.log(cuencas)

async function BentoDataLandin() {
  const cuencas = await FetchCuencas()
  const variacionCuencas = await FetchCuencaVariacion()
  const variacionEmbalses = await FetchEmbalsesVariacion()
  const esp = await FetchEsp()
  const pluvis = await FetchPluvis()

  return (
    <Bento
      cuencas={cuencas}
      variacionCuencas={variacionCuencas}
      variacionEmbalses={variacionEmbalses}
      esp={esp}
      pluvis={pluvis}
    />
  )
}

export default BentoDataLandin
