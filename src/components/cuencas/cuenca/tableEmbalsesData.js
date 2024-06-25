import React from 'react'
import TableEmbalses from './tableEmbalses'
import { FetchEmbalses } from '@/lib/data'

async function TableEmbalsesData(url) {
  const embalse = await FetchEmbalses()
  const cuencaid = url.url.cuencaid
  const decodedCuencaid = decodeURIComponent(cuencaid)
  const cuencaCrop = decodedCuencaid.replace(/_/g, ' ')
  const resEmbalse = embalse.filter((elemento) => elemento.nombre_cuenca === cuencaCrop)

  return (
    <section className="mt-20 mb-10 md:mt-0">
      <div>
        <TableEmbalses dataFetched={resEmbalse} />
      </div>
    </section>
  )
}

export default TableEmbalsesData
