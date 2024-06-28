import Intro from '@/components/cuencas/IntroCuencas'
import Tabledata from '@/components/embalses/TableData'
import { Suspense } from 'react'
import SkeletonTableEmbalse from '@/components/skeletons/SkeletonTableEmbalse'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

function page() {
  return (
    <>
      <Intro title={'Embalses'} />
      <section className="bg-bgcolor">
        <Suspense fallback={<SkeletonTableEmbalse />}>
          <Tabledata />
        </Suspense>
      </section>
    </>
  )
}

export default page