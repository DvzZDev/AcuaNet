import { FetchCuencas, FetchEmbalses } from '@/lib/data'
import BentoDist from '@/components/cuencas/BentoDist'
import Divider from '@/components/cuencas/Divider'
import SkeletonBentoDist from '@/components/skeletons/SkeletonBentoDinst'
import { Suspense } from 'react'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

async function Page({ params }) {
  console.log(params)
  const cuenca = await FetchCuencas()
  const embalses = await FetchEmbalses()
  const { cuencaid } = params
  const decodedCuencaid = decodeURIComponent(cuencaid)

  const resCuenca = cuenca.find((cuenca) => cuenca.cuenca === decodedCuencaid)
  const resEmbalses = embalses.filter(
    (embalse) => embalse.nombre_cuenca === decodedCuencaid
  )

  return (
    <>
      <div className="justify-center">
        <h1 className="mb-2 text-center font-telma text-[2.5rem] text-textprimary sm:mt-10 sm:text-6xl">
          {resCuenca.cuenca}
        </h1>
        <Divider />
      </div>

      <div className="bg-[#070922]"></div>

      <section className="flex h-full items-center justify-center bg-[#070922] sm:h-[80svh]">
        <div className="min-h-full">
          <Suspense fallback={<SkeletonBentoDist />}>
            <BentoDist url={params} />
          </Suspense>
        </div>
      </section>
    </>
  )
}

export default Page
