import Intro from '@/components/cuencas/IntroCuencas'
import Bento from '@/components/cuencas/BentoCuencas'
import { Suspense } from 'react'
import SkeletonCuencas from '@/components/cuencas/SkeletonCuencas'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

function page() {
  return (
    <>
      <Intro />
      <Suspense fallback={<SkeletonCuencas />}>
        <Bento />
      </Suspense>
    </>
  )
}

export default page
