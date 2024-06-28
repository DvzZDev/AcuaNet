import { FetchEmbalses } from '@/lib/data'
import Navbar from './Navbar'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

async function NavBarData() {
  const embalses = await FetchEmbalses()
  return <Navbar data={embalses} />
}

export default NavBarData
