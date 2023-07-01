/** @type {import("next").NextConfig} */

export default {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },

    ]
  },
  i18n: {
    locales: ["en", "ps_AF"],
    defaultLocale: "en",
  },
}
