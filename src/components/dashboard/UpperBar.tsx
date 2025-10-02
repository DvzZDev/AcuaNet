import { createSvClient } from "@/db/server"
import { UserData } from "@/types"
import { Suspense } from "react"
import AccountBanner from "./AccountBanner"
import UpperBarCliMob from "./UpperBarCliMob"
import UpperBarCliPc from "./UpperBarCliPc"

export default async function UpperBar() {
  const supabase = await createSvClient()

  const { data, error } = await supabase.auth.getUser()
  const user = data?.user || null

  return (
    <>
      <div className="hidden h-20 w-full items-center bg-emerald-50 p-3 md:flex">
        <UpperBarCliPc />
        <Suspense fallback={<div>Loading user info...</div>}>
          <AccountBanner userdata={user?.user_metadata as UserData} />
        </Suspense>
      </div>
      <div className="flex md:hidden">
        <UpperBarCliMob userData={user?.user_metadata as UserData} />
      </div>
    </>
  )
}
