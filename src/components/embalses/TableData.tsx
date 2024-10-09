import { FetchEmbalses } from "@/lib/data"
import Table from "@/components/embalses/TableEmbalsesGlob"

async function Tabledata() {
  const embalses = await FetchEmbalses()
  return (
    <div className="flex justify-center">
      <Table props={Array.isArray(embalses) ? embalses : [embalses]} />
    </div>
  )
}

export default Tabledata
