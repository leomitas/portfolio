/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'i.postimg.cc' }],
  },
  distDir: 'dist',
  target: 'server',
}

export default nextConfig
