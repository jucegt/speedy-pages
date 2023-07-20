const calendar = require('../../svgs/calendar.js');
const clock = require('../../svgs/clock.js');

const postCard = function ({ data, content, url }) {
  const words = this.parseHTML(content);
  const wordsPerMinute = 300;
  const wordsCount = words.length;
  const readingTime = Math.ceil(wordsCount / wordsPerMinute);
  const { featuredimage, title, date } = data;
  return /* html */ `
    <article class="post-card">
      <a href="${url}" title="${title}" class="post-card__image">
        <amp-img
          alt="${title}"
          src="${this.src(featuredimage, true)}"
          srcset="${this.srcSet(featuredimage, true)}"
          width="400"
          height="300"
          layout="responsive">
          <amp-img
            fallback
            alt="${title}"
            src="${this.src(featuredimage)}"
            srcset="${this.srcSet(featuredimage)}"
            width="400"
            height="300"
            layout="responsive">
          </amp-img>
        </amp-img>
      </a>
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
