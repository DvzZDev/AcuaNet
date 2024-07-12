import { FetchCuencas } from '@/lib/data'
import BentoDist from './BentoDist'
async function BentoDataUnique(params) {
  const cuenca = await FetchCuencas()
  return (
    <BentoDist
      params={params}
      data={cuenca}
    />
  )
}

export default BentoDataUnique
