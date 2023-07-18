/** @type {import("next").NextConfig} */

const config = {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin',
      },

    ]
  },
  i18n: {
    locales: ["en", "ps_AF"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',

      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',

      },
    ],
  },
  eslint: {
    dirs: ['tina', 'src'],
  },
}


export default config