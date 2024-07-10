import { Suspense } from 'react'
import EmbalseData from '@/components/embalses/EmbalseData'
import SkeeltonBentoEmbalseDist from '@/components/skeletons/SkeeltonBentoEmbalseDist'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export function generateMetadata({ params }) {
  return {
    title: `${params.embalseid.charAt(0).toUpperCase()}${params.embalseid.slice(1)} - AcuaNet`,
    description: `Consulta las mediciones hidrograficas en el embalse de ${params.embalseid}`,
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
