import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // STATIC EXPORT — produces /out folder with index.html
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
