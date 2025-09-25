"use client"
import { Search02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function UpperBarClient() {
  return (
    <div className="flex items-center">
      <div className="ml-6 flex h-fit w-[25rem] items-center gap-3 rounded-full border border-emerald-200 bg-white p-2">
        <HugeiconsIcon icon={Search02Icon} />
        <input
          placeholder="Buscar embalse..."
          className="h-fit w-full"
        ></input>
      </div>
    </div>
  )
}
