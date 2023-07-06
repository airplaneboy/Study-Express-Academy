// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    esmExternals: 'loose', // <-- add this
    serverComponentsExternalPackages: ['mongoose'], // <-- and this
  },

  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };
    return config;
  },
};

export default million.next(nextConfig);
