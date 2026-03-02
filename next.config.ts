import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/myportofolio',
  assetPrefix: '/myportofolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
