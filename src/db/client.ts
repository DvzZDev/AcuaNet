import { createBrowserClient } from "@supabase/ssr"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const createClient = () => {
  return createBrowserClient(supabaseUrl, supabaseKey)
}

// Para compatibilidad con código existente
export const supabase = createClient()
export const db = supabase
