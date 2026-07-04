import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.sanity.io",
      "cdn.jsdelivr.net",
      "raw.githubusercontent.com",
    ],
  },
};

export default nextConfig;
