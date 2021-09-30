const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  i18n: {
    locales: ['en', 'vn'],
    defaultLocale: 'en',
  },
})
module.exports = withNextra()
