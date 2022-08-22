// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   env: {
//     BASE_API_URL: process.env.BASE_API_URL,
//   },
//   images: {
//     domains: ['localhost'],
//     unoptimized: true,
//   }
// }

// module.exports = nextConfig

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
  },
  images: {
    domains: ['localhost'],
  }
}

module.exports = nextConfig