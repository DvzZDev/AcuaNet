import React from 'react'
import { FetchCuencas } from '@/lib/data'

async function Title(url) {
  const cuenca = await FetchCuencas()
  const cuencaid = url.url.cuencaid.replace(/-/g, '_')
  const decodedCuencaid = decodeURIComponent(cuencaid)
  const decodedCuencaidNM = decodedCuencaid
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  const resCuenca = cuenca.find((cuenca) => cuenca.cuenca === decodedCuencaidNM)

  return (
    <div className="justify-center">
      <h1 className="font-telma mb-2 text-center text-[2.5rem] text-textsecondary sm:mt-10 sm:text-6xl">
        {resCuenca.cuenca.replace(/_/g, ' ')}
      </h1>
    </div>
  )
}

export default Title
