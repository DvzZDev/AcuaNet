import Gallery from "@/components/dashboard/CatchGallery/Gallery"
import { getAllUserCaches } from "@/db/queriesServer/select"
import { Suspense } from "react"

export default async function CatchGallery() {
  const catches = await getAllUserCaches()

  return (
     <section className="flex h-auto w-full flex-col gap-6">
      <div className="flex w-full flex-col gap-6">
        <h1 className="font-['BlackRolmer'] text-3xl text-emerald-900 md:text-4xl">Catch Gallery</h1>
        <Suspense fallback={<div>Loading gallery...</div>}>
          <Gallery reportData={catches} />
        </Suspense>
      </div>
    </section>
  )
}
