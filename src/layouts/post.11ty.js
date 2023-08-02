const getReadingTime = require('../utilities/reading-time');

const post = {
  data: {
    layout: 'base',
  },
  render: function ({ content, info, image }) {
    const readingTime = getReadingTime(content);
    return /* html */ `
      <p><a href="/${info.category}/">${info.category}</a></p>
      <h1>${info.title}</h1>
      <p>${info.author} - ${this.date(info.date)} - ${readingTime} minutos de lectura</p>
      <p>${info.excerpt}</p>
      <amp-img
        alt="${info.title}"
        src="${this.src(image, true)}"
        srcset="${this.srcSet(image, true)}"
        width="400"
        height="300"
        layout="responsive">
        <amp-img
          fallback
          alt="${info.title}"
          src="${this.src(image)}"
          srcset="${this.srcSet(image)}"
          width="400"
          height="300"
          layout="responsive">
        </amp-img>
      </amp-img>
      ${content}
    `;
  },
};

module.exports = post;
