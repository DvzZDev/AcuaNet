import Close from "@/components/dashboard/Close"
import { createSvClient } from "@/db/server"
import { redirect } from "next/navigation"

export default async function Dashboard() {
  const supabase = await createSvClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }

  return (
    <div className="h-full bg-green-100 p-4">
      <p>Hello {data.user.email}</p>
      <Close />
    </div>
  )
}
