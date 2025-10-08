import FavoriteZReservoirsClient from "@/components/dashboard/Favorites/FavoriteZReservoirsClient"
import GalleryResumeClient from "@/components/dashboard/Gallery/GalleryResumeClient"
import LastPinMapDynamic from "@/components/dashboard/LastPinMap.tsx/LastPinMapDynamic"
import FavSectionSkl from "@/components/skeletonsV2/Resume/FavSectionSkl"
import GalleryResumeSkl from "@/components/skeletonsV2/Resume/GalleryResumeSkl"
import { checkSubscription } from "@/db/actions"
import { getAllUserCaches, getFavSection, getUserId } from "@/db/queriesServer/select"
import { Suspense } from "react"

export default async function Dashboard() {
  const userId = await getUserId()
  const subscriptionType = checkSubscription()
  const favSection = getFavSection(userId)
  const allCaches = getAllUserCaches()

  return (
    <div className="flex mb-10 min-h-screen flex-col gap-7 overflow-hidden md:gap-10">
      <section className="flex flex-col ">
        <h2 className="font-['BlackRolmer'] leading-none text-3xl text-emerald-900 lg:text-4xl">Embalses Favoritos</h2>
        <Suspense fallback={<FavSectionSkl />}>
          <FavoriteZReservoirsClient
            favorite_reservoirs={favSection}
            subscriptionType={subscriptionType}
          />
        </Suspense>
      </section>
      <div className="flex w-full flex-row">
        <section className="flex h-auto w-full flex-col gap-6 lg:flex-row">
          <div className="flex flex-col gap-4 overflow-hidden md:w-1/2">
            <h2 className="font-['BlackRolmer'] text-3xl text-emerald-900 md:text-4xl">Tus capturas</h2>
            <Suspense fallback={<GalleryResumeSkl />}>
              <GalleryResumeClient allCaches={allCaches} />
            </Suspense>
          </div>
          <div className="flex flex-col gap-4 overflow-hidden md:w-1/2">
            <h2 className="font-['BlackRolmer'] text-3xl text-emerald-900 md:text-4xl">Ultimo Pín</h2>
            <LastPinMapDynamic allCatches={allCaches} />
          </div>
        </section>
      </div>
    </div>
  )
}
