/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove 'output: "export"' as it's not supported in Next.js 12
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        crypto: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;