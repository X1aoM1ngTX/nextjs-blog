import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // 已禁用静态导出，使用 Vercel 服务器部署
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
