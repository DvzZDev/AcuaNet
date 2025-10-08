import CatchMapDynamic from "@/components/dashboard/CatchMap/CatchMapDynamic"
import RecentCatches from "@/components/dashboard/CatchMap/RecentCatches"
import CatchMapSkl from "@/components/skeletonsV2/CatchMap/CatchMapSkl"
import RecentCatchesSkeleton from "@/components/skeletonsV2/CatchMap/RecentCatchesSkl"
import { getAllUserCaches } from "@/db/queriesServer/select"
import { Suspense } from "react"

export default async function CatchMap() {
  const allCaches = getAllUserCaches()
 
  return (
    <section className="flex mb-10 h-auto w-full flex-col gap-6">
      <div className="flex w-full flex-col gap-6">
        <h1 className="font-['BlackRolmer'] text-3xl text-emerald-900 md:text-4xl">Catch Map</h1>
        <Suspense fallback={<CatchMapSkl />}>
          <CatchMapDynamic allCaches={allCaches} />
        </Suspense>
        <h1 className="font-['BlackRolmer'] text-3xl text-emerald-900 md:text-4xl">Últimas capturas</h1>
        <Suspense fallback={<RecentCatchesSkeleton />}>
          <RecentCatches allCaches={allCaches} />
        </Suspense>
      </div>
    </section>
  )
}
