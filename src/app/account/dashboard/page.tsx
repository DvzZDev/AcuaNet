import FavoritesReservoirsData from "@/components/dashboard/Favorites/FavoritesReservoirs"
import GalleryResume from "@/components/dashboard/Gallery/GalleryResume"

export default async function Dashboard() {
  return (
    <div className="h-full flex-col gap-5 flex overflow-hidden">
      <FavoritesReservoirsData />
      <div className="flex-row flex w-full">
      <GalleryResume />
      </div>
    </div>
  )
}
