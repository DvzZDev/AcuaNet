import { createSvClient } from "@/db/server"

export async function GetUserFavorites(userId: string | null) {
  if (!userId) {
    return []
  }

  const supabase = await createSvClient()

  const { data, error } = await supabase.from("favorite_reservoirs").select("favorites").eq("user_id", userId).single()

  if (error || !data) {
    console.error("Error fetching favorites:", error)
    return []
  }

  return Array.isArray(data.favorites) ? data.favorites : []
}
