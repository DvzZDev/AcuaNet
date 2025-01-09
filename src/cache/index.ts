import { createClient } from "redis"

if (!process.env.REDIS_PASSWORD) {
  throw new Error("REDIS_PASSWORD is not set")
}

const apiKey = process.env.REDIS_PASSWORD

const CacheClient = createClient({
  username: "default",
  password: apiKey,
  socket: {
    host: "redis-10299.c293.eu-central-1-1.ec2.redns.redis-cloud.com",
    port: 10299,
  },
})

export default CacheClient
