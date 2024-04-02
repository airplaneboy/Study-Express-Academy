// import million from 'million/compiler';
const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },

  // },
  typescript: { ignoreBuildErrors: true },
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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
      {
        hostname: 'cdn.sanity.io/**',
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

    return config;
  },
};

// export default million.next(nextConfig);
module.exports = withMDX(nextConfig);
