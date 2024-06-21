import Intro from '@/components/cuencas/IntroCuencas'
import Bento from '@/components/cuencas/BentoCuencas'
import { Suspense } from 'react'
import SkeletonBento from '@/components/BentoSkeletonCuencas'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

function page() {
  return (
    <>
      <Intro />
      <Suspense fallback={<SkeletonBento />}>
        <Bento />
      </Suspense>
    </>
  )
}

export default page
