import TableEmbalses from "./tableEmbalses"
import { FetchEmbalses } from "@/lib/data"
import type { Embalses } from "@/types/BentoTypes"

async function TableEmbalsesData({ url }: { url: { cuencaid: string } }) {
  const embalse = await FetchEmbalses()
  const cuencaid = url.cuencaid
  const decodedCuencaid = decodeURIComponent(cuencaid)
  const resEmbalse = embalse.filter(
    (elemento: Embalses) =>
      elemento.nombre_cuenca
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ /g, "_") === decodedCuencaid
  )

  return (
    <section className="mb-10 mt-20 md:mt-0">
      <TableEmbalses
        dataFetched={resEmbalse}
        link={decodedCuencaid}
      />
    </section>
  )
}

export default TableEmbalsesData
