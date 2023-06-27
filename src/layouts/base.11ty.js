// Components
const header = require('../components/header');
const mask = require('../components/mask');
const state = require('../components/state');

// Utilities
const inlineCss = require('../utilities/css');

const base = {
  render: async ({ config, metadata, content }) => {
    return /* html */ `
    <!doctype html>
    <html ⚡ lang="${config.language}" class="${config.dark ? 'dark' : ''}">
      <head>
        <!-- META -->
        <meta charset="utf-8" />
        <meta name="generator" content="eleventy" />
        <meta name="viewport" content="width=device-width" />
        <!-- BASIC SEO -->
        <meta name="description" content="Descripcion" />
        <title>Titulo</title>
        <!-- OG -->
        <!-- PRELOAD -->
        <link rel="preload" href="/static/fonts/lato-regular.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="/static/fonts/lato-bold.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" as="script" href="https://cdn.ampproject.org/v0.js">
        <link rel="preload" as="script" href="https://cdn.ampproject.org/v0/amp-script-0.1.js">
        <!-- AMP -->
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
        <script async custom-element="amp-script" src="https://cdn.ampproject.org/v0/amp-script-0.1.js"></script>
        <!-- STYLES -->
        <style amp-custom>${await inlineCss('style.css')}</style>
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
        <!-- CANONICAL -->
        <link rel="canonical" href="." />
      </head>
      <body>
        ${header(metadata)}
        <main>
          ${content}
        </main>
        ${mask()}
        ${state()}
      </body>
    </html>
    `;
  },
};

module.exports = base;
