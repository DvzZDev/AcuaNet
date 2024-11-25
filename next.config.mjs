const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
      {
        protocol: "https",
        hostname: "media.giphy.com",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
      },
    ],
  },
  experimental: {
    cssChunking: "loose",
  },
}

export default nextConfig
