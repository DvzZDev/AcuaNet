import Divider from "@/components/cuencas/Divider"
import OpenWeather from "@/components/weather/openWeather"

export default function page() {
  return (
    <>
      <div className="justify-center">
        <h1 className="mb-2 text-center font-NecoBold text-[2.5rem] text-textsecondary sm:mt-10 sm:text-6xl">
          Tiempo
        </h1>
        <Divider />
        <div className="h-screen bg-[#070922] pb-10">
          <OpenWeather />
        </div>
      </div>
    </>
  )
}
