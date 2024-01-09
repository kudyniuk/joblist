/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['shared-ui'],
  experimental: {
    optimizePackageImports: ['@kudyniuk/components']
  }
};

module.exports = nextConfig;
