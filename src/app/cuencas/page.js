import Intro from '@/components/cuencas/IntroCuencas'
import Bento from '@/components/cuencas/BentoCuencas'
import { Suspense } from 'react'
import SkeletonCuencas from '@/components/skeletons/SkeletonCuencas'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

function page() {
  return (
    <section className='mt-10'>
      <Intro title={'Cuencas Hidrográficas'} />
      <Suspense fallback={<SkeletonCuencas />}>
        <Bento />
      </Suspense>
    </section>
  )
}

export default page
