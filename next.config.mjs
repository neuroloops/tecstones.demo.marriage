/** @type {import("next").NextConfig} */

export default {
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
}
