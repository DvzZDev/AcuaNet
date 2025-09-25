import { createSvClient } from "@/db/server"
import { redirect } from "next/navigation"

export default async function Account() {
  const supabase = await createSvClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }

  return (
    <div className="ml-64 h-svh bg-blue-100 p-4">
      <p>Account page for {data.user.email}</p>
    </div>
  )
}
