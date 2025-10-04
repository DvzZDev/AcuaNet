import { getAllUserCaches } from "@/db/queriesServer/select"
import { Suspense } from "react"
import CatchMapDynamic from "./CatchMapDynamic"
import RecentCatches from "./RecentCatches"

export default async function CatchMapComponent() {
  const allCaches = await getAllUserCaches()
  const recentCaches = allCaches.slice(0, 4)

  return (
    <section className="flex h-auto w-full flex-col gap-6">
      <div className="flex w-full flex-col gap-6">
        <h1 className="font-['BlackRolmer'] text-3xl text-emerald-900 md:text-4xl">Último Pin</h1>
        <Suspense fallback={<div>Cargando mapa...</div>}>
          <CatchMapDynamic reportData={recentCaches} />
        </Suspense>
        <Suspense fallback={<div>Cargando capturas...</div>}>
          <RecentCatches reportData={recentCaches} />
        </Suspense>
      </div>
    </section>
  )
}
