"use client"

import { cn } from "@/lib/utils"
import type { SubscriptionType } from "@/types"

interface SubscriptionBadgeProps {
  subscriptionType: SubscriptionType
  showIcon?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function SubscriptionBadge({
  subscriptionType,
  showIcon = false,
  size = "sm",
  className,
}: SubscriptionBadgeProps) {
  if (subscriptionType === "free") return null

  const sizeClasses = {
    sm: "text-[8px] px-2 py-1",
    md: "text-xs px-3 py-1.5",
    lg: "text-sm px-4 py-2",
  }

  const gradientClasses = {
    pro: "from-purple-300 via-purple-500 to-purple-900",
    lifetime: "from-amber-200 via-amber-400 to-amber-600",
  }

  const textClasses = {
    pro: "text-purple-100",
    lifetime: "text-amber-950",
  }

  const label = {
    pro: "AN Pro",
    lifetime: "AN Lifetime",
  }

  const badgeType = subscriptionType === "lifetime" ? "lifetime" : "pro"

  const glowStyle = {
    pro: {
      boxShadow: "0 0 15px rgba(139, 92, 246, 0.6), 0 0 30px rgba(139, 92, 246, 0.3)",
    },
    lifetime: {
      boxShadow: "0 0 15px rgba(245, 158, 11, 0.6), 0 0 30px rgba(245, 158, 11, 0.3)",
    },
  }

  return (
    <div
      className={cn(
        "relative flex w-fit items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-br leading-none font-semibold transition-all duration-300 hover:scale-105",
        gradientClasses[badgeType],
        textClasses[badgeType],
        sizeClasses[size],
        className
      )}
      style={glowStyle[badgeType]}
    >
      <p className="relative z-10 leading-none">{label[badgeType]}</p>

      {showIcon && (
        <div
          className={cn(
            "relative z-10 h-2 w-2 animate-pulse rounded-full",
            badgeType === "pro" ? "bg-purple-200" : "bg-amber-300"
          )}
        />
      )}
    </div>
  )
}
