import CatchMapComponent from "@/components/dashboard/CatchMap/CatchMapComponent"
import { createSvClient } from "@/db/server"
import { redirect } from "next/navigation"

export default async function CatchMap() {
  const supabase = await createSvClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }

  return (
    <div className="h-full">
      <CatchMapComponent  />
    </div>
  )
}
