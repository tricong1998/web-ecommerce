const nextTranslate = require('next-translate');

module.exports = {
  compress: false, // should delegate this to nginx instead
  // i18n: {
  //   locales: ['en', 'ms'],
  //   defaultLocale: 'en',
  // },
  poweredByHeader: false,
  publicRuntimeConfig: {
    // Will be available to both server and browser
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    ipay88HostedCheckoutUrl: process.env.IPAY88_HOSTED_CHECKOUT_URL,
    browserNewRelicAppId: process.env.BROWSER_NEW_RELIC_APP_ID,
    browserNewRelicLicenseKey: process.env.BROWSER_NEW_RELIC_LICENSE_KEY,
    browserNewRelicEnabled: process.env.BROWSER_NEW_RELIC_ENABLED,
  },

  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },

  ...nextTranslate(),
};
