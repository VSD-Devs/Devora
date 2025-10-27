/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression
  compress: true,
  // Generate ETags for better caching
  generateEtags: true,
  // Enable powered by header removal for security
  poweredByHeader: false,
  // Strict mode for better React practices
  reactStrictMode: true,
  // Trailing slash for better SEO consistency
  trailingSlash: false,
  // Optimize script loading strategy
  scriptLoader: 'off',
  // Enable SWC minification for faster builds
  swcMinify: true,
  // Optimize CSS
  cssOptimization: true,
  async headers() {
    return [
      {
        source: '/.*\\.(jpg|jpeg|gif|png|webp|svg|ico)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Expires',
            value: new Date(Date.now() + 31536000 * 1000).toUTCString(),
          },
        ],
        regex: true,
      },
      {
        source: '/blog/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/case-studies/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
