/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever', // 삭제된 페이지
        destination: '/products', // redirect 시켜줄 페이지
        // 영원히 옮겨진 페이지이므로, 사용자를 redirect 시키며,
        // 308 status를 보내주며, 브라우저가 안심하고 해당 내용을 캐시할 수 있도록 하며,
        // 다음부터 사용자가 삭제된 페이지로오면 자동으로 redirect 시켜주도록
        permanent: true,
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/Kody',
        destination: '/about/me',
      },
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ]
  },
}

module.exports = nextConfig
