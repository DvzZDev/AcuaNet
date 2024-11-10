"use client"
import Divider from "@/components/cuencas/Divider"
import ButtonUp from "@/components/lunar/up"
import LunarCalendarMov from "@/components/lunar/LunarCalMov"

export default function page() {
  return (
    <>
      <div className="justify-center">
        <h1 className="mt-4 text-center text-[2.5rem] font-bold text-green-100 sm:mb-2 sm:mt-10 sm:text-6xl xl:mb-0">
          Calendário Lunar
        </h1>
        <Divider />
        <div className="bg-green-50 pb-10">
          <LunarCalendarMov />
        </div>
        <ButtonUp />
      </div>
    </>
  )
}
