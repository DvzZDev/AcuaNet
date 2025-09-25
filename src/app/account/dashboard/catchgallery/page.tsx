import { createSvClient } from "@/db/server"
import { redirect } from "next/navigation"

export default async function CatchGallery() {
  const supabase = await createSvClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }

  return (
    <div className="h-full bg-orange-100 p-4">
      <p>CatchGallery page for {data.user.email}</p>
    </div>
  )
}
