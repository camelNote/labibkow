/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['192.168.1.78'],
  images: {
    unoptimized: true,
  },
}


module.exports = nextConfig
