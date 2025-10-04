"use client"

import { UserData } from "@/types"
import { UserStoryIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function AccountBanner({ userdata }: { userdata?: UserData }) {
  return (
    <div className="z-50 mr-8 ml-auto flex items-center gap-3 border-b border-emerald-200 pb-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-200">
        {userdata?.avatar_url || userdata?.picture ? (
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={userdata?.avatar_url || userdata?.picture}
            alt="User avatar"
            referrerPolicy="no-referrer"
          />
        ) : (
          <HugeiconsIcon
            icon={UserStoryIcon}
            size={24}
            color="#059669"
            strokeWidth={1.5}
          />
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-['BlackRolmer'] text-base font-semibold text-gray-800">
            {userdata?.full_name || userdata?.name || "Usuario"}
          </span>
          <div className="w-fit rounded-full bg-gradient-to-br from-purple-300 to-purple-900 p-1 text-[8px] font-semibold text-purple-100">
            <p className="leading-none">AN Pro</p>
          </div>
        </div>
        <span className="font-['BlackRolmer'] text-sm text-gray-600">{userdata?.email || "usuario@ejemplo.com"}</span>
      </div>
    </div>
  )
}
