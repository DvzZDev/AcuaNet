import { createSvClient } from "@/db/server"
import { UserData } from "@/types"
import { Suspense } from "react"
import AccountBanner from "./AccountBanner"
import UpperBarClient from "./UpperBarClient"

export default async function UpperBar() {
  const supabase = await createSvClient()

  const { data, error } = await supabase.auth.getUser()
  const user = data?.user || null

  return (
    <div className="flex h-20 w-full items-center bg-emerald-50 p-3">
      <UpperBarClient />
      <Suspense fallback={<div>Loading user info...</div>}>
        <AccountBanner userdata={user?.user_metadata as UserData} />
      </Suspense>
    </div>
  )
}
