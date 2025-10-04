import { SunCloud02Icon } from "@hugeicons/core-free-icons"
import ChipTitle from "./ChipTitle"

export default function Coments({ coments }: { coments: string }) {
  return (
    <div className="flex mt-5 flex-col gap-3">
      <ChipTitle
        icon={SunCloud02Icon}
        title="Meterología"
        bg="bg-[#064e3b]"
        borderColor="border-emerald-400"
        iconColor="#5ee9aa"
        textColor="text-emerald-300"
      />
      <div className="bg-sky-200 w-full rounded-2xl p-3 xl:w-[20.5vw]">{coments}</div>
    </div>
  )
}
