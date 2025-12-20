/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // PERFORMANCE BOOST
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // IMAGE OPTIMIZATION
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },
  
  // COMPRESSION
  compress: true,
  
  // EXPERIMENTAL FEATURES FOR SPEED
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  // POWEREDBY HEADER REMOVAL
  poweredByHeader: false,
};

module.exports = nextConfig;
