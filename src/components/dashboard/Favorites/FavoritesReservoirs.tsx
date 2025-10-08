import { getFavSection } from "@/db/queriesServer/select"
import { createSvClient } from "@/db/server"
import type { SubscriptionType } from "@/types"
import { Suspense } from "react"
import FavoriteZReservoirsClient from "./FavoriteZReservoirsClient"

interface FavoritesReservoirsDataProps {
  subscriptionType: SubscriptionType
}

export default async function FavoritesReservoirsData({ subscriptionType }: FavoritesReservoirsDataProps) {
  const supabase = await createSvClient()
  const userData = await supabase.auth.getUser()
  const favSection = await getFavSection(userData.data.user?.id || "")

  return (
    <section className="flex flex-col gap-4">
      <h1 className="font-['BlackRolmer'] text-3xl text-emerald-900 lg:text-4xl">Embalses Favoritos</h1>
      <Suspense fallback={<div>Cargando embalses favoritos...</div>}>
        <FavoriteZReservoirsClient
          favorite_reservoirs={favSection}
          subscriptionType={subscriptionType}
        />
      </Suspense>
    </section>
  )
}
