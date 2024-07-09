import Intro from '@/components/cuencas/IntroCuencas'
import Tabledata from '@/components/pluviometros/Tabledata'
import SkeletonPluviometros from '@/components/skeletons/SkeletonPluviometros'
import { Suspense } from 'react'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export const metadata = {
  title: 'Pluviómetros - AcuaNet',
  description:
    'Conoce más sobre los pluviómetros de España y cómo se gestionan los recursos hídricos en cada uno de ellos',
}

function page() {
  return (
    <section className="mt-5">
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
