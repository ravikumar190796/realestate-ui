/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

   // ✅ IMPORTANT: Disable ESLint blocking production build
   eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig

