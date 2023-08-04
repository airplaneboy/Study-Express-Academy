// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // typescript: { ignoreBuildErrors: true },
  eslint: {
    dirs: ['pages', 'utils', 'app', 'models', 'components', 'lib', 'src'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  async redirects() {
    return [
      {
        source: '/user',
        destination: '/user/dashboard',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        hostname: '**.googleusercontent.com',
      },
      {
        hostname: 'flagcdn.com/**',
      },
      {
        hostname: 'tailwindui.com/**',
      },
    ],
  },
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['mongoose'],
  },

  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };

    // config.module.rules.push(
    //   {
    //     test: /\.svg$/i,
    //     issuer: /\.[jt]sx?$/,
    //     use: ['@svgr/webpack'],
    //   },
    //   {
    //     test: /\.svg$/i,
    //     type: 'asset',
    //     resourceQuery: /url/, // *.svg?url
    //   },
    //   {
    //     test: /\.svg$/i,
    //     issuer: /\.[jt]sx?$/,
    //     resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    //     use: ['@svgr/webpack'],
    //   }
    // );

    return config;
  },
};

export default million.next(nextConfig);
