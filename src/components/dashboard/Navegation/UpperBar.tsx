import { createSvClient } from "@/db/server"
import { SubscriptionType, UserData } from "@/types"
import { Suspense } from "react"
import AccountBanner from "./AccountBanner"
import UpperBarCliMob from "./UpperBarCliMob"
import UpperBarCliPc from "./UpperBarCliPc"

interface UpperBarProps {
  subscriptionType: SubscriptionType
}

export default async function UpperBar({ subscriptionType }: UpperBarProps) {
  const supabase = await createSvClient()

  const { data } = await supabase.auth.getUser()
  const user = data?.user || null

  return (
    <>
      <div className="relative z-[100] hidden h-20 w-full items-center bg-emerald-50 p-3 md:flex">
        <UpperBarCliPc />
        <Suspense fallback={<div>Loading user info...</div>}>
          <AccountBanner
            userdata={user?.user_metadata as UserData}
            subscriptionType={subscriptionType}
          />
        </Suspense>
      </div>
      <div className="relative z-[1100] flex md:hidden">
        <UpperBarCliMob userData={user?.user_metadata as UserData} />
      </div>
    </>
  )
}
