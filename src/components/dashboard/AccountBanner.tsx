"use client"

import { UserData } from "@/types"

export default function AccountBanner({ userdata }: { userdata?: UserData }) {
  return (
    <div className="mr-7 ml-auto flex items-center gap-2">
      <img
        src={userdata?.avatar_url}
        alt="User Avatar"
        className="h-16 w-16 rounded-full border border-emerald-300 object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col gap-1">
        <p className="font-['BlackRolmer'] text-xl">
          {userdata?.full_name
            ?.split(" ")
            .map((name, index) => (index === 0 ? name : index === 1 ? name : ""))
            .filter(Boolean)
            .join(" ")}
        </p>
        <div className="w-fit rounded-full bg-gradient-to-br from-purple-300 to-purple-900 px-2 py-1 text-[10px] font-semibold text-purple-100">
          <p>AN Pro</p>
        </div>
      </div>
    </div>
  )
}
