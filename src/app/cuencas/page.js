import Intro from '@/components/cuencas/intro'
import Bento from '@/components/cuencas/bento'
import { Suspense } from 'react'
import SkeletonBento from '@/skeletons/BentoSkeletonCuencas'

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
