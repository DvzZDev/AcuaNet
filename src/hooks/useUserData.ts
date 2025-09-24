import { createClient } from "@/db/client"
import { UserData } from "@/types/index"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export function useUserData() {
  const [hasSession, setHasSession] = useState<boolean | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const checkSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()
        console.log("Session check:", session ? "Session exists" : "No session", session)
        setHasSession(!!session)
      } catch (error) {
        console.error("Error checking session:", error)
        setHasSession(false)
      }
    }

    void checkSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state change:", event, session ? "Session exists" : "No session", session)
      setHasSession(!!session)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  return useQuery({
    queryKey: ["user-data"],
    queryFn: async (): Promise<UserData | null> => {
      try {
        const { data, error } = await supabase.auth.getUser()

        console.log("Supabase getUser response:", data, error)

        if (error) {
          console.error("Error fetching user:", error)
          return null
        }

        if (!data?.user) {
          console.log("No user found in response")
          return null
        }

        console.log("User metadata:", data.user.user_metadata)
        return data.user.user_metadata as UserData
      } catch (error) {
        console.error("Exception in queryFn:", error)
        return null
      }
    },
    enabled: hasSession === true,
    staleTime: 1000 * 60 * 5,
    retry: (failureCount, error) => {
      if (error?.message?.includes("AuthSessionMissingError") || error?.message?.includes("session missing")) {
        return false
      }
      return failureCount < 3
    },
  })
}
