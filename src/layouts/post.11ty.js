const getReadingTime = require('../utilities/reading-time');
const calendar = require('../svgs/calendar');
const clock = require('../svgs/clock');

const post = {
  data: {
    layout: 'base',
  },
  render: function ({ content, info, image, collections }) {
    const { authors } = collections;
    const author = authors.find((author) => author.data.title === info.author);
    const readingTime = getReadingTime(content);
    return /* html */ `
      <article class="post">
        <section class="post__header">
          <a class="post__category" href="/${info.category}/">${info.category}</a>
          <h1 class="post__title">${info.title}</h1>
          <p class="post__info">
            <span>
              <amp-img
                alt="${info.author}"
                src="${this.photo(author.data.photo)}"
                width="24"
                height="24"
                layout="responsive">
              </amp-img>
              ${info.author}
            </span>
            <span>${calendar()} ${this.date(info.date)}</span>
            <span>${clock()} ${readingTime} minutos de lectura</span>
          </p>
          <p class="post__excerpt">${info.excerpt}</p>
          <amp-img
            class="post__image"
            alt="${info.title}"
            src="${this.src(image, true)}"
            srcset="${this.srcSet(image, true)}"
            width="600"
            height="480"
            layout="responsive">
            <amp-img
              fallback
              alt="${info.title}"
              src="${this.src(image)}"
              srcset="${this.srcSet(image)}"
              width="600"
              height="480"
              layout="responsive">
            </amp-img>
          </amp-img>
        </section>
        <section class="post__body">
          <div class="post__content">
            ${content}
          </div>
          <div class="post__ads">
            Anuncios
          </div>
        </section>
      </article>
    `;
  },
};

module.exports = post;
