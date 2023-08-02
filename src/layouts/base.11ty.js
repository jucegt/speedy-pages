// Utilities
const inlineCss = require('../utilities/css');

const base = {
  render: async function ({ config, content, collections }) {
    const { navigation, categoriesList, footerPages, homePage, logo, socialMedia } = collections;
    const { multicolor, onecolor } = logo;
    const { seo } = homePage.data;
    return /* html */ `
    <!doctype html>
    <html ⚡ lang="${config.language}">
      <head>
        <!-- META -->
        <meta charset="utf-8" />
        <meta name="generator" content="eleventy" />
        <meta name="viewport" content="width=device-width" />
        <!-- BASIC SEO -->
        <meta name="description" content="${seo.description}" />
        <title>${seo.title}</title>
        <!-- OG -->
        <!-- PRELOAD -->
        <link rel="preload" as="font" href="/static/fonts/lato-regular.woff2" type="font/woff2" crossorigin>
        <link rel="preload" as="font" href="/static/fonts/lato-bold.woff2" type="font/woff2" crossorigin>
        <link rel="preload" as="image" href="/static/webp/md/11ty.webp" imagesrcset="/static/webp/md/11ty.webp 600w, /static/webp/lg/11ty.webp 1200w" />
        <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
        <!-- AMP -->
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
        <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
        <!-- STYLES -->
        <style amp-custom>${await inlineCss('style.css')}</style>
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
        <!-- CANONICAL -->
        <link rel="canonical" href="." />
      </head>
      <body>
        ${this.header(seo, multicolor.code, navigation)}
        <main class="content container">
          ${content}
        </main>
        ${this.footer(seo, onecolor.code, socialMedia, categoriesList, footerPages)}
        ${this.mask()}
        ${this.state()}
      </body>
    </html>
    `;
  },
};

module.exports = base;
