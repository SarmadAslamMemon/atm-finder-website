import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Ensure trailing slashes are handled cleanly for canonical SEO
  trailingSlash: false,
  // Power headers for security & caching
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
    {
      source: "/.well-known/assetlinks.json",
      headers: [
        { key: "Content-Type", value: "application/json" },
        { key: "Access-Control-Allow-Origin", value: "*" },
      ],
    },
  ],
};

export default nextConfig;
