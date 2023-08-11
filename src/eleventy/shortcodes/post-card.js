const calendar = require('../../svgs/calendar');
const clock = require('../../svgs/clock');
const getReadingTime = require('../../utilities/reading-time');

const postCard = function ({ data, content, url }, texts, showCategory = true) {
  const readingTime = getReadingTime(content);
  const { image, info, collections } = data;
  const { title, date, category } = info;
  const { categoryBySlug } = collections;
  const categoryInfo = categoryBySlug[category];
  return /* html */ `
    <article class="post-card">
      <a href="${url}" title="${title}" class="post-card__image">
        <amp-img
          alt="${title}"
          src="${this.src(image, true)}"
          srcset="${this.srcSet(image, true)}"
          width="600"
          height="480"
          layout="responsive">
          <amp-img
            fallback
            alt="${title}"
            src="${this.src(image)}"
            srcset="${this.srcSet(image)}"
            width="600"
            height="480"
            layout="responsive">
          </amp-img>
        </amp-img>
      </a>
      ${
        showCategory
          ? /* html */ `<a class="post-card__category" href="/${category}/" title="${categoryInfo.data.seo.title}">${categoryInfo.data.seo.title}</a>`
          : ''
      }
      <section class="post-card__content">
        <h2><a href="${url}" title="${title}">${title}</a></h2>
        <div class="post-card__info">
          <p>${calendar()} ${this.date(date, true)}</p>
          <p>
          ${clock()} ${readingTime}
          ${readingTime === 1 ? texts.readingTime.short.singular : texts.readingTime.short.plural}
          </p>
        </div>
      </section>
    </article>
  `;
};

module.exports = postCard;
