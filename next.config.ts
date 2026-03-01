import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // Added for the Shadcn avatar
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", // Added for the Shadcn avatar
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "pro.tailark.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
