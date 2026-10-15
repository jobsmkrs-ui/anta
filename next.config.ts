import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev preview uses "standalone" (Node.js server).
  // For STATIC deployment (Cloudflare Pages / Netlify / GitHub Pages / S3):
  //   - Use the pre-built static ZIP: download/AntA-website-static-deploy.zip
  //   - OR change this to `output: "export"` + `images: { unoptimized: true }` + `trailingSlash: true`
  // Full guide: download/DEPLOYMENT-GUIDE.md
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
