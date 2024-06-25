import React from 'react'
import TableEmbalses from './tableEmbalses'
import { FetchEmbalses } from '@/lib/data'

async function TableEmbalsesData(url) {
  const embalse = await FetchEmbalses()
  const cuencaid = url.url.cuencaid
  const decodedCuencaid = decodeURIComponent(cuencaid)
  const cuencaCrop = decodedCuencaid.replace(/_/g, ' ')
  const resEmbalse = embalse.filter(
    (elemento) => elemento.nombre_cuenca === cuencaCrop
  )
  console.log(resEmbalse)

  return (
    <section className="min-h-screen mt-20 md:mt-0">
      <div>
        <h1 className="text-center font-telma text-5xl text-textsecondary">Embalses</h1>
      </div>
      <div>
        <TableEmbalses dataFetched={resEmbalse} />
      </div>
    </section>
  )
}

export default TableEmbalsesData
