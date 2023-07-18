const home = {
  data: {
    permalink: '/admin/index.html',
  },
  render: function ({ collections }) {
    const { seo } = collections;
    return /* html */ `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="noindex" />
          <title>Content Manager | ${seo.title}</title>
        </head>
        <body>
          <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
        </body>
      </html>
    `;
  },
};

module.exports = home;
