import TableEmbalses from "./tableEmbalses"
import { GetEmbalses } from "db/queries/select"
import type { Embalses } from "@/types/Types"

async function TableEmbalsesData({ url }: { url: { cuencaid: string } }) {
  const embalse = await GetEmbalses()
  const cuencaid = url.cuencaid
  const decodedCuencaid = decodeURIComponent(cuencaid)
  const resEmbalse = embalse.filter(
    (emb: Embalses) =>
      emb.nombre_cuenca ??
      ""
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
