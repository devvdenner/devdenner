import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.devdenner.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
