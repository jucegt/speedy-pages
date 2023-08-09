// Utilities
const inlineCss = require('../utilities/css');

const base = {
  render: async function ({
    config,
    content,
    collections,
    page,
    image,
    pageTitle,
    pageDescription,
    firstPostImage,
    ...rest
  }) {
    const { navigation, categoriesList, ui, footerPages, homePage, logo, socialMedia } = collections;
    const { multicolor, onecolor } = logo;
    const { seo } = homePage.data;
    const { url } = page;
    const preload = image || firstPostImage || null;
    const title = rest?.seo?.title || pageTitle;
    const description = rest?.seo?.description || pageDescription || seo.description;
    return /* html */ `
    <!doctype html>
    <html ⚡ lang="${config.language}" [class]="menu || search || query ? 'disable-scroll' : ''">
      <head>
        <!-- META -->
        <meta charset="utf-8" />
        <meta name="generator" content="eleventy" />
        <meta name="viewport" content="width=device-width" />
        <!-- BASIC SEO -->
        <meta name="description" content="${description}" />
        <title>${title ? `${title} - ${seo.title}` : seo.title}</title>
        <!-- OG -->
        <!-- PRELOAD -->
        <link rel="preload" as="font" href="/static/fonts/lato-regular.woff2" type="font/woff2" crossorigin>
        <link rel="preload" as="font" href="/static/fonts/lato-bold.woff2" type="font/woff2" crossorigin>
        ${
          preload
            ? /* html */ `
              <link
                rel="preload"
                as="image"
                href="${this.src(preload, true)}"
                imagesrcset="${this.srcSet(preload, true)}"
              />
        `
            : ''
        }
        <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
        <!-- AMP -->
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
        <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
        <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>
        <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
        <!-- STYLES -->
        <style amp-custom>
          ${await inlineCss('style.css')}
          :root {
            --primary: ${ui.colors.primary};
            --secondary: ${ui.colors.secondary};
          }
        </style>
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
        <!-- CANONICAL -->
        <link rel="canonical" href="${config.url}${url}" />
      </head>
      <body>
        ${this.header(seo, multicolor.code, navigation, url)}
        <main class="content container">
          ${content}
        </main>
        ${this.footer(seo, onecolor.code, socialMedia, categoriesList, footerPages)}
        ${this.search()}
        ${this.mask()}
        ${this.state()}
      </body>
    </html>
    `;
  },
};

module.exports = base;
