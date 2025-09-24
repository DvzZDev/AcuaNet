import { createClient } from "@/db/server"
import { redirect } from "next/navigation"

export default async function CatchMap() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }

  return (
    <div className="h-full bg-purple-100 p-4">
      <p>CatchMap page for {data.user.email}</p>
    </div>
  )
}
