import { RevenueCatResponse, SubscriptionType } from "@/types"

export function getSubscriptionType(data: RevenueCatResponse): SubscriptionType {
  const { entitlements, non_subscriptions } = data.subscriber

  // 1. Si tiene non_subscriptions → lifetime
  if (Object.keys(non_subscriptions).length > 0) {
    return "lifetime"
  }

  // 2. Si tiene entitlements activos → pro
  const hasActiveEntitlement = Object.values(entitlements).some((entitlement) => {
    // Sin fecha de expiración = lifetime/activo permanente
    if (!entitlement.expires_date) return true

    // Verificar que no haya expirado
    return new Date(entitlement.expires_date) > new Date()
  })

  if (hasActiveEntitlement) {
    return "pro"
  }

  // 3. Si no tiene nada activo → free
  return "free"
}

