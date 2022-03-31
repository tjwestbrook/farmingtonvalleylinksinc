/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com'],
  },
  source: '/:path*',
  headers: [{
    key: 'X-API-Key',
    value: DETA_PROJECT_KEY,
  }],
}

module.exports = nextConfig
