const siteWebmanifest = {
  data: {
    permalink: '/site.webmanifest',
  },
  render: function ({ collections }) {
    const { homePage, branding } = collections;
    const { seo } = homePage.data;
    return `{
  "name": "${seo.title}",
  "short_name": "${seo.title}",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "${branding.colors.primary}",
  "background_color": "#333333",
  "display": "standalone"
}`;
  },
};

module.exports = siteWebmanifest;
