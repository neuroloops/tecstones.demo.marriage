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
  // i18n: {
  //   locales: ["en", "ps_AF"],
  //   defaultLocale: "en",
  // },
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: '3000',

    //   },
    //   {
    //     protocol: 'http',
    //     hostname: 'localhost',
    //     port: '3000',
    //   },


    // ],
    domains: ['assets.tina.io', 'i.pravatar.cc', 'localhost:3000']
  },
  eslint: {
    dirs: ['tina', 'src'],
  },
}


export default config