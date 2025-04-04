// Utilities
const inlineCss = require('../utilities/css');

const base = {
  render: async function ({
    config,
    locale,
    currentYear,
    content,
    collections,
    page,
    image,
    pageTitle,
    pageDescription,
    firstPostImage,
    ...rest
  }) {
    const texts = locale[config.language] || locale.en;
    const { navigation, categoriesList, branding, footerPages, homePage, socialMedia } = collections;
    const { multicolor, onecolor } = branding.logo;
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
        <title>${title ? `${title} | ${seo.title}` : seo.title}</title>
        <!-- OG -->
        <!-- PRELOAD -->
        <link rel="preload" fetchpriority="high" as="font" href="/static/fonts/lato-regular.woff2" type="font/woff2" crossorigin>
        <link rel="preload" fetchpriority="high" as="font" href="/static/fonts/lato-bold.woff2" type="font/woff2" crossorigin>
        ${
          preload
            ? /* html */ `
              <link
                rel="preload"
                fetchpriority="high"
                as="image"
                href="${this.src(preload, true)}"
                ${!firstPostImage ? `imagesrcset="${this.srcSet(preload, true)}"` : ''}
              />
        `
            : ''
        }
        <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
        <!-- AMP -->
        <meta name="amp-consent-blocking" content="amp-analytics,amp-auto-ads,amp-ad" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
        <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
        <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>
        <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
        <script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
        <script async custom-element="amp-consent" src="https://cdn.ampproject.org/v0/amp-consent-0.1.js"></script>
        <!-- STYLES -->
        <style amp-custom>
          ${await inlineCss('style.css')}
          ${
            branding.colors.primary && branding.colors.secondary
              ? /* css */ `
                :root {
                  --primary: ${branding.colors.primary};
                  --secondary: ${branding.colors.secondary};
                }
              `
              : ''
          }
        </style>
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
        <!-- CANONICAL -->
        <link rel="canonical" href="${config.url}${url}" />
        <!-- FAVICON -->
        <link rel="icon" type="image/png" href="/favicon.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <meta name="theme-color" content="#f33691">
      </head>
      <body>
        ${this.header(seo, multicolor?.code, navigation, url, texts.ui)}
        <main class="content container">
          ${content}
        </main>
        ${this.footer(seo, onecolor?.code, socialMedia, categoriesList, footerPages, texts.ui, currentYear)}
        ${this.search(texts.ui)}
        ${this.consent(config.language)}
        ${this.mask()}
        ${this.state()}
      </body>
    </html>
    `;
  },
};

module.exports = base;
