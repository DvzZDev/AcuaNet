/* eslint-disable react-hooks/rules-of-hooks */

import OpenWeather from "@/components/weather/openWeather"

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
      <h1 className="mb-2 text-center font-NecoBold text-[2.5rem] text-textsecondary sm:mt-10 sm:text-6xl">
        {place}
      </h1>
      <OpenWeather
        lat={lat}
        lon={lon}
      />
    </div>
  )
}
