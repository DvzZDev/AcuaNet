import Close from "@/components/dashboard/close"
import { createClient } from "@/db/server"
import { redirect } from "next/navigation"

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }

  return (
    <div className="h-svh bg-emerald-50">
      <p>Hello {data.user.email}</p>
      <Close />
    </div>
  )
}
