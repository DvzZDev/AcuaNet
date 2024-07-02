import Intro from '@/components/cuencas/IntroCuencas'
import Tabledata from '@/components/pluviometros/Tabledata'
import SkeletonPluviometros from '@/components/skeletons/SkeletonPluviometros'
import { Suspense } from 'react'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

function page() {
  return (
    <section className='mt-10'>
      <Intro title={'Pluviómetros'} />
      <section className="flex justify-center bg-bgcolor">
        <Suspense fallback={<SkeletonPluviometros />}>
          <Tabledata />
        </Suspense>
      </section>
    </section>
  )
}

export default page
