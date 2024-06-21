import { FetchCuencas } from '@/lib/data'
import React from 'react'

async function Page({ params }) {
  const data = await FetchCuencas()
  const { cuencaid } = params
  const decodedCuencaid = decodeURIComponent(cuencaid)

  const result = data.find((item) => item.cuenca === decodedCuencaid)

  return (
    <>
      <div className="flex justify-center">
        <h1 className="mb-2 text-center font-telma text-[2.5rem] text-textprimary sm:mt-10 sm:text-6xl">
          {result.cuenca}
        </h1>
      </div>

      <div className="h-screen bg-[#070922]">
        <h1></h1>
        <h1>{result.capacidad}</h1>
        <h1>{result.emabalsada}</h1>
        <h1>{result.variacion}</h1>
        <h1>{result.porcentaje_variacion}</h1>
        <h1>{result.porcentaje_embalsada}</h1>
      </div>
    </>
  )
}

export default Page
