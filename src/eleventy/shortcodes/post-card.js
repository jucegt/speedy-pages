const calendar = require('../../svgs/calendar.js');
const clock = require('../../svgs/clock.js');

const postCard = function ({ data, content, url }, showCategory = true) {
  const words = this.parseHTML(content);
  const wordsPerMinute = 200;
  const wordsCount = words.split(/\s+/).length;
  const readingTime = Math.ceil(wordsCount / wordsPerMinute);
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
          width="400"
          height="300"
          layout="responsive">
          <amp-img
            fallback
            alt="${title}"
            src="${this.src(image)}"
            srcset="${this.srcSet(image)}"
            width="400"
            height="300"
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
          <p>${calendar()} ${this.date(date)}</p>
          <p>${clock()} ${readingTime} min</p>
        </div>
      </section>
    </article>
  `;
};

module.exports = postCard;
