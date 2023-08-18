const home = {
  data: {
    permalink: '/admin/index.html',
  },
  render: function ({ config, collections, locale }) {
    const { homePage } = collections;
    const texts = locale[config.language] || locale.en;
    return /* html */ `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="noindex" />
          <title>${texts.cms.label}${homePage.data.seo.title ? /* html */ ` | ${homePage.data.seo.title}` : ''}</title>
        </head>
        <body>
          <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
        </body>
      </html>
    `;
  },
};

module.exports = home;
