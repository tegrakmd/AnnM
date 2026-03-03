import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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
        hostname: "cdn.sanity.io",
      },

      {
        protocol: "https",
        hostname: "pro.tailark.com",
        pathname: "/**",
      },
    ],
  },
};
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

export default withMDX(nextConfig);
