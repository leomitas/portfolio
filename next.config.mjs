/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'i.postimg.cc' }],
  },
  distDir: 'dist',
  target: 'server',
  experimental: {
    routesManifest: true,
  },
}

export default nextConfig
