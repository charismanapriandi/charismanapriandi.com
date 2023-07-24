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
    G_TAG: process.env.G_TAG,
  },
  images: {
    domains: ['localhost', 'd33wubrfki0l68.cloudfront.net', 'mobx.js.org'],
  }
}

module.exports = nextConfig