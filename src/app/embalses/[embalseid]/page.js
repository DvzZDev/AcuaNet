import { Suspense } from 'react'
import EmbalseData from '@/components/embalses/EmbalseData'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

async function page({ params }) {
  return (
    <Suspense fallback={<p>loading...</p>}>
      <EmbalseData url={params} />
    </Suspense>
  )
}

export default page
