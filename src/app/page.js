import Intro from '@/components/landing/Intro'
import Bento from '@/components/landing/Bento'
import Fuentes from '@/components/landing/Fuentes'
import SkeletonBento from '@/components/skeletons/BentoSkeleton'
import AboutLanding from '@/components/landing/AboutLanding'

import { Suspense } from 'react'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default function Home() {
  return (
    <>
      <Intro />
      <Suspense fallback={<SkeletonBento />}>
        <Bento />
      </Suspense>
      <Fuentes />
      <AboutLanding />
    </>
  )
}
