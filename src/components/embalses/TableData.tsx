import { GetEmbalses } from "db/queries/select"
import Table from "@/components/embalses/TableEmbalsesGlob"

async function Tabledata() {
  const embalses = await GetEmbalses()
  return (
    <div className="flex justify-center">
      <Table props={embalses} />
    </div>
  )
}

export default Tabledata
