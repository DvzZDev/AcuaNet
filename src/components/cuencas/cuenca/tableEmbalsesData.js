import React from 'react'
import TableEmbalses from './tableEmbalses'
import { FetchEmbalses } from '@/lib/data'

async function TableEmbalsesData(url) {
  const embalse = await FetchEmbalses()
  const cuencaid = url.url.cuencaid
  const decodedCuencaid = decodeURIComponent(cuencaid)
  const resEmbalse = embalse.filter(
    (elemento) => (elemento.nombre_cuenca = decodedCuencaid)
  )

  return (
    <section className="mb-10 mt-20 md:mt-0">
      <div>
        <TableEmbalses
          dataFetched={resEmbalse}
          link={decodedCuencaid}
        />
      </div>
    </section>
  )
}

export default TableEmbalsesData