import { Suspense } from 'react'
import EmbalseData from '@/components/embalses/EmbalseData'
import SkeeltonBentoEmbalseDist from '@/components/skeletons/SkeeltonBentoEmbalseDist'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

async function page({ params }) {
  return (
    <Suspense fallback={<SkeeltonBentoEmbalseDist />}>
      <EmbalseData url={params} />
    </Suspense>
  )
}

export default page
