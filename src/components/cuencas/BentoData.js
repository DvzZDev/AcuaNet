import BentoCuencas from './BentoCuencas'
import { FetchCuencas } from '@/lib/data'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

async function BentoData() {
  const cuencas = await FetchCuencas()

  return <BentoCuencas data={cuencas} />
}

export default BentoData
