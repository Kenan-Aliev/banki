const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
const nextConfig = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: false,
      swcMinify: true,
      env: {
        NEXT_PUBLIC_API_URL: 'http://83.220.174.249:5345',
      },
      images: {
        domains: ['83.220.174.249', '127.0.0.1','api.vsebanki.kg'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'vsebanki.kg',
          },
        ],
      },
    }
  }

  return {
    reactStrictMode: false,
    swcMinify: true,
    env: {
      NEXT_PUBLIC_API_URL: 'http://83.220.174.249:5345',
      SKIP_BUILD_STATIC_GENERATION: false,
    },
    images: {
      domains: ['83.220.174.249', '127.0.0.1'],
    },
  }
}

module.exports = nextConfig
