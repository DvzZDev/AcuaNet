export function checkEnvironmentConfig() {
  const requiredEnvVars = ["NEXT_PUBLIC_WEATHER_API_KEY"]

  const missingVars = requiredEnvVars.filter((varName) => !process.env[varName])

  if (missingVars.length > 0) {
    console.error("❌ Missing required environment variables:", missingVars)
    console.error("Please check your .env.local file and ensure all required variables are set.")
    return false
  }

  console.log("✅ All required environment variables are configured")
  return true
}

export function logEnvironmentInfo() {
  console.log("🌍 Environment info:")
  console.log("- NODE_ENV:", process.env.NODE_ENV)
  console.log("- Weather API Key configured:", !!process.env.NEXT_PUBLIC_WEATHER_API_KEY)
}
