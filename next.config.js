/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      layoutRaw: true,
    },
  },
}

module.exports = nextConfig
