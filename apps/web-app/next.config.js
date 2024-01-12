/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],
  experimental: {
    optimizePackageImports: ['@kudyniuk/components']
  }
};

module.exports = nextConfig;
