import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/image/**',
      },
    ],
  },
  // Empty turbopack config to silence warning (path aliases work by default)
  turbopack: {},
  // Enable if you want to use standalone output for deployment
  // output: 'standalone',
};

export default nextConfig;
