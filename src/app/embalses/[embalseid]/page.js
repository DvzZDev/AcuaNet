import { Suspense } from 'react'
import EmbalseData from '@/components/embalses/EmbalseData'
import SkeeltonBentoEmbalseDist from '@/components/skeletons/SkeeltonBentoEmbalseDist'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export function generateMetadata({ params }) {
  return {
    title: `${params.embalseid} - AcuaNet`,
    description: `Embalse  ${params.embalseid}`,
  }
}

async function Page({ params }) {
  return (
    <Suspense fallback={<SkeeltonBentoEmbalseDist />}>
      <EmbalseData url={params} />
    </Suspense>
  )
}

export default Page
