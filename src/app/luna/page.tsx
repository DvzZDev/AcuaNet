"use client"
import Divider from "@/components/cuencas/Divider"
import LunarCalendar from "@/components/lunarcal"

export default function page() {
  return (
    <>
      <div className="justify-center">
        <h1 className="mb-2 text-center font-NecoBold text-[2.5rem] text-textsecondary sm:mt-10 sm:text-6xl">
          Calendário Lunar
        </h1>
        <Divider />
        <div className="bg-[#070922] pb-10">
          <LunarCalendar />
        </div>
      </div>
    </>
  )
}
