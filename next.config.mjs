/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'i.postimg.cc' }],
  },
  distDir: 'dist',
  target: 'serverless',
  experimental: {
    routesManifest: true,
  },
}

export default nextConfig
