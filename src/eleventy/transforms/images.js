const { JSDOM } = require('jsdom');
const speedyConfig = require('../../../speedy.config');
const imagesConfig = speedyConfig.images;

const images = function (content, outputPath) {
  if (outputPath && outputPath.endsWith('.html') && !outputPath.includes('/admin/')) {
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const images = document.querySelectorAll('img');

    if (images.length === 0) return content;

    for (const image of images) {
      const src = image.getAttribute('src');
      const alt = image.getAttribute('alt');
      const path = imagesConfig.dist.replace('./.11ty', '');

      if (src.startsWith('/')) {
        const split = src.split('.');
        const format = split[split.length - 1];
        const toFormat = src.replace(format, 'webp');

        const defaultSrcPath = `${path}${imagesConfig.default}/`;
        const defaultWebpSrcPath = `${path}${imagesConfig.webp.name}/${imagesConfig.webp.default}/`;

        let srcSet = '';
        let webpSrcSet = '';
        let defaultSrc = src.replace('/', defaultSrcPath);
        let defaultWebpSrc = toFormat.replace('/', defaultWebpSrcPath);

        for (const size of imagesConfig.sizes) {
          const imagePath = `${path}${imagesConfig.webp.name}/${size.name}${src} ${size.width}w`;
          srcSet = srcSet !== '' ? `${srcSet}, ${imagePath}` : imagePath;
        }

        for (const size of imagesConfig.webp.sizes) {
          const imagePath = `${path}${imagesConfig.webp.name}/${size.name}${toFormat} ${size.width}w`;
          webpSrcSet = webpSrcSet !== '' ? `${webpSrcSet}, ${imagePath}` : imagePath;
        }

        const ampWebp = document.createElement('amp-img');
        ampWebp.setAttribute('alt', alt);
        ampWebp.setAttribute('src', defaultWebpSrc);
        ampWebp.setAttribute('srcset', webpSrcSet);
        ampWebp.setAttribute('width', imagesConfig.webp.sizes[0].width);
        ampWebp.setAttribute('height', imagesConfig.webp.sizes[0].height);
        ampWebp.setAttribute('layout', 'responsive');

        const ampFallback = document.createElement('amp-img');
        ampFallback.setAttribute('fallback', '');
        ampFallback.setAttribute('alt', alt);
        ampFallback.setAttribute('src', defaultSrc);
        ampFallback.setAttribute('srcset', srcSet);
        ampFallback.setAttribute('width', imagesConfig.sizes[0].width);
        ampFallback.setAttribute('height', imagesConfig.sizes[0].height);
        ampFallback.setAttribute('layout', 'responsive');

        ampWebp.appendChild(ampFallback);

        image.parentElement.replaceWith(ampWebp);
      }
    }

    return dom.serialize();
  }
  return content;
};

module.exports = images;
