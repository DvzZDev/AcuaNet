/* eslint-disable react-hooks/rules-of-hooks */

import Divider from "@/components/cuencas/Divider"
import OpenWeather from "@/components/weather/openWeather"
import WeatherSkeleton from "@/components/skeletons/WeatherSkeleton"
import { Suspense } from "react"

export const revalidate = 60
export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

export default function page({
  searchParams,
}: {
  searchParams: { lat: string; lon: string; place: string }
}) {
  const lat = searchParams.lat
  const lon = searchParams.lon
  const place = searchParams.place
  return (
    <div className="justify-center">
      <h1 className="mt-4 text-center text-[2.5rem] font-bold text-green-100 sm:mb-2 sm:mt-10 sm:text-6xl xl:mb-0">
        {place}
      </h1>
      <Divider />
      <Suspense fallback={<WeatherSkeleton />}>
        <OpenWeather
          lat={lat}
          lon={lon}
        />
      </Suspense>
    </div>
  )
}
