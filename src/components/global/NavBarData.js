import { FetchEmbalses } from '@/lib/data'
import Navbar from './Navbar'
import { Suspense } from 'react'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

async function NavBarData() {
  const embalses = await FetchEmbalses()
  return <Navbar data={embalses} />
}

function App() {
  return (
    <Suspense fallback={<></>}>
      <NavBarData />
    </Suspense>
  )
}

export default App
