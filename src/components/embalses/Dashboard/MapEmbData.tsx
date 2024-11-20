import GetCoordinates from "@/lib/GetCoordinates"
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("@/components/embalses/Dashboard/MapEmb"), {
  ssr: false,
})

export default async function MapEmbData({ pathname }: { pathname: string }) {
  const coords = await GetCoordinates(pathname)
  if (!coords) {
    return <div>Error: Coordinates not found</div>
  }
  return <DynamicMap coords={coords} />
}
