/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ['192.168.1.78'],
  // Pin the workspace root so Turbopack does not pick up the package-lock.json
  // that lives in C:\Users\labib (outside this repo).
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
