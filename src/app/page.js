import Header from '@/app/components/Header'
import Intro from '@/app/components/Intro'
import Bento from '@/app/components/Bento'
import Footer from './components/Footer'
import Fuentes from '@/app/components/Fuentes'
import SkeletonBento from './skeletrons/BentoSkeleton'
import { Suspense } from 'react'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Suspense fallback={<SkeletonBento />}>
        <Bento />
      </Suspense>
      <Fuentes />
      <Footer />
    </>
  )
}
