import { withServerClient } from "@/db/server"
import Userinfo from "./Userinfo"

export default async function UserInfoData() {
  const userData = await withServerClient(async (supabase) => {
    const { data, error } = await supabase.auth.getUser()

    if (error || !data?.user) {
      console.error("Error fetching user:", error)
      return null
    }

    console.log(data.user.user_metadata)
    return data.user.user_metadata
  })

  return <Userinfo data={userData} />
}
