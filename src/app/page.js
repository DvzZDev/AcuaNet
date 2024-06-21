import Intro from '@/components/Intro'
import Bento from '@/components/Bento'
import Fuentes from '@/components/Fuentes'
import SkeletonBento from '@/skeletons/'
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
      <SkeletonBento />
    </>
  )
}
