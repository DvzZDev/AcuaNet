import { getAllUserCaches } from "@/db/queriesServer/select"
import { Suspense } from "react"
import LastPinMap from "../LastPinMap.tsx/LastPinMapDynamic"
import GalleryResumeClient from "./GalleryResumeClient"

export default async function GalleryResume() {
  const allCaches = await getAllUserCaches()
  const recentCaches = allCaches.slice(0, 4)
  const lastPin = allCaches.length > 0 ? allCaches[0] : null

  return (
    <section className="flex h-auto flex-col gap-6 lg:flex-row">
      <div className="flex md:w-1/2 flex-col gap-4 overflow-hidden">
        <h1 className="font-['BlackRolmer'] text-3xl md:text-4xl text-emerald-900">Tus capturas</h1>
        <Suspense fallback={<div>Cargando embalses favoritos...</div>}>
          <GalleryResumeClient recentCaches={recentCaches} />
        </Suspense>
      </div>
      <div className="flex md:w-1/2 flex-col gap-4 overflow-hidden">
        <h1 className="font-['BlackRolmer'] text-3xl md:text-4xl text-emerald-900">Ultimo Pín</h1>
        <Suspense fallback={<div>Cargando embalses favoritos...</div>}>
          <LastPinMap reportData={lastPin ? [lastPin] : []} />
        </Suspense>
      </div>
    </section>
  )
}
