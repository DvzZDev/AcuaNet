import { Purchases } from "@revenuecat/purchases-js"

const WEB_BILLING_PUBLIC_API_KEY = "rcb_iHjnxaroeYvWqQMVOqiIcmoOiHyX" || ""

export async function InitRevenueCat(userId?: string) {
  if (typeof window === "undefined") {
    throw new Error("InitRevenueCat can only be called on the client side")
  }

  console.log("userId: " + userId)

  const appUserId = userId || Purchases.generateRevenueCatAnonymousAppUserId()

  const purchases = Purchases.configure({
    apiKey: WEB_BILLING_PUBLIC_API_KEY,
    appUserId,
  })

  console.log("RevenueCat initialized with user ID:", appUserId)

  const customerInfo = await Purchases.getSharedInstance().getCustomerInfo()

  console.log("Customer Info:", customerInfo)

  return purchases
}
