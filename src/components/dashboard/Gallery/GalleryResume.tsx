import { getAllUserCaches } from "@/db/queriesServer/select"
import LastPinMap from "../LastPinMap.tsx/LastPinMapDynamic"
import GalleryResumeClient from "./GalleryResumeClient"

export default async function GalleryResume() {
  const allCaches = await getAllUserCaches()
  const recentCaches = allCaches.slice(0, 4)
  const lastPin = allCaches.length > 0 ? allCaches[0] : null

  return (
    <section className="flex h-auto w-full flex-col gap-6 lg:flex-row">
      <div className="flex flex-col gap-4 overflow-hidden md:w-1/2">
        <h1 className="font-['BlackRolmer'] text-3xl text-emerald-900 md:text-4xl">Tus capturas</h1>
        <GalleryResumeClient recentCaches={recentCaches} />
      </div>
      <div className="flex flex-col gap-4 overflow-hidden md:w-1/2">
        <h1 className="font-['BlackRolmer'] text-3xl text-emerald-900 md:text-4xl">Ultimo Pín</h1>
        <LastPinMap reportData={lastPin ? [lastPin] : []} />
      </div>
    </section>
  )
}
