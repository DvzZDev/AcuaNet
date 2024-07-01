import { FetchPluvisGlob, FetchEmbalses } from '@/lib/data'
import TablePluvis from './TablePluvis'

export const revalidate = 60
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

async function Tabledata() {
  const data = await FetchPluvisGlob()
  return (
    <div className="flex justify-center">
      <TablePluvis data={data} />
    </div>
  )
}

export default Tabledata
