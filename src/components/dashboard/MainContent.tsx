"use client"

import { cn } from "@/lib/utils"
import useSidebarStore from "@/store/useSidebarStore"

export default function MainContent({ children }: { children: React.ReactNode }) {
  const isExpanded = useSidebarStore((state) => state.isExpanded)

  return (
    <div className={cn("flex flex-1 flex-col transition-all duration-300 ease-in-out", isExpanded ? "ml-64" : "ml-20")}>
      {children}
    </div>
  )
}
