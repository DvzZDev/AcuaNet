import React from 'react'
import { FetchCuencas } from '@/lib/data'

async function Title(url) {
  const cuenca = await FetchCuencas()
  const cuencaid = url.url.cuencaid
  const decodedCuencaid = decodeURIComponent(cuencaid)
  const resCuenca = cuenca.find((cuenca) => cuenca.cuenca === decodedCuencaid)

  return (
    <div className="justify-center">
      <h1 className="mb-2 text-center font-telma text-[2.5rem] text-textsecondary sm:mt-10 sm:text-6xl">
        {resCuenca.cuenca.replace(/_/g, ' ')}
      </h1>
    </div>
  )
}

export default Title
