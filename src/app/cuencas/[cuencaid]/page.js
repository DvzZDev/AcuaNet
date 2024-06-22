import { FetchCuencas, FetchEmbalses } from '@/lib/data'
import BentoDist from '@/components/cuencas/BentoDist'
import Divider from '@/components/cuencas/Divider'

async function Page({ params }) {
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
          <BentoDist {...resCuenca} />
        </div>
      </section>
    </>
  )
}

export default Page
