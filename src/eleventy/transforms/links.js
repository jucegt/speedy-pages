const { JSDOM } = require('jsdom');
const speedy = require('../../../speedy.config');

const links = function (content, outputPath) {
  if (outputPath && outputPath.endsWith('.html') && !outputPath.includes('/admin/')) {
    const dom = new JSDOM(content);
    const document = dom.window.document;
    const anchors = document.querySelectorAll('a');

    if (anchors.length === 0) return content;

    for (const anchor of anchors) {
      const url = anchor.getAttribute('href');
      const title = anchor.getAttribute('title');
      const content = anchor.innerHTML;

      if (
        !url.startsWith('/') &&
        !url.startsWith('#') &&
        !url.startsWith('mailto:') &&
        !url.startsWith('tel:') &&
        !url.includes(speedy.url)
      ) {
        const externalAnchor = document.createElement('a');
        externalAnchor.setAttribute('href', url);
        if (title) externalAnchor.setAttribute('title', title);
        externalAnchor.setAttribute('rel', 'noopener noreferrer');
        externalAnchor.setAttribute('target', '_blank');
        externalAnchor.innerHTML = content;

        anchor.replaceWith(externalAnchor);
      }
    }
    return dom.serialize();
  }

  return content;
};

module.exports = links;
