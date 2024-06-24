import Title from '@/components/cuencas/Title'
import Divider from '@/components/cuencas/Divider'
import BentoDist from '@/components/cuencas/BentoDist'
import SkeletonTitleCuencas from '@/components/skeletons/SkeletonTitleCuenca'
import SkeletonBentoDist from '@/components/skeletons/SkeletonBentoDinst'
import { Suspense } from 'react'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

async function Page({ params }) {
  return (
    <>
      <Suspense fallback={<SkeletonTitleCuencas />}>
        <Title url={params} />
      </Suspense>
      <Divider />
      <section className="flex h-full items-center justify-center bg-[#070922] sm:h-[60svh] lg:h-[80svh]">
        <div className="flex min-h-fit w-screen justify-center">
          <Suspense fallback={<SkeletonBentoDist />}>
            <BentoDist url={params} />
          </Suspense>
        </div>
      </section>
    </>
  )
}

export default Page
