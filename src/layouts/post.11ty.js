const getReadingTime = require('../utilities/reading-time');
const calendar = require('../svgs/calendar');
const clock = require('../svgs/clock');

const post = {
  data: {
    layout: 'base',
  },
  render: function ({ content, seo, info, image, collections, config, locale }) {
    const texts = locale[config.language] || locale.en;
    const { authors, categories, posts } = collections;
    const author = authors.find((author) => author.data.title === info.author);
    const category = categories.find((category) => category.data.seo.slug === info.category);
    const readingTime = getReadingTime(content);
    const relatedPosts = posts
      .filter((post) => post.data.info.category === info.category && post.data.seo.slug !== seo.slug)
      .slice(0, 3);
    return /* html */ `
      <article class="post">
        <section class="post__header">
          <a class="post__category" href="/${category.data.seo.slug}/">${category.data.seo.title}</a>
          <h1 class="post__title">${info.title}</h1>
          ${
            config.adsAllowed
              ? /* html */ `
                <div class="ad">
                  <amp-ad
                    layout="fixed-height"
                    height="300"
                    type="adsense"
                    data-ad-client="ca-pub-9019093411177810"
                    data-ad-slot="8268472649"
                    data-auto-format="rspv"
                    data-full-width=""
                  >
                    <div overflow=""></div>
                  </amp-ad>
                </div>
              `
              : ''
          }
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
            <span>
              ${clock()} ${readingTime}
              ${readingTime === 1 ? texts.ui.readingTime.long.singular : texts.ui.readingTime.long.plural}
            </span>
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
          ${
            config.adsAllowed
              ? /* html */ `
                <div class="ad">
                  <amp-ad
                    layout="fixed-height"
                    height="300"
                    type="adsense"
                    data-ad-client="ca-pub-9019093411177810"
                    data-ad-slot="2091938922"
                    data-auto-format="rspv"
                    data-full-width=""
                  >
                    <div overflow=""></div>
                  </amp-ad>
                </div>
              `
              : ''
          }
        </section>
        <section class="post__body">
          <div class="post__content">
            ${content}
          </div>
          ${
            config.adsAllowed
              ? /* html */ `
                <div class="post__ads">
                  <div class="ad">
                    <amp-ad
                      width="300"
                      height="600"
                      type="adsense"
                      data-ad-client="ca-pub-9019093411177810"
                      data-ad-slot="9153633658"
                      data-auto-format="rspv"
                      data-full-width=""
                    >
                      <div overflow=""></div>
                    </amp-ad>
                  </div>
                </div>
              `
              : ''
          }
        </section>
      </article>
      ${
        config.adsAllowed
          ? /* html */ `
            <div class="ad">
              <amp-ad
                layout="fixed-height"
                height="300"
                type="adsense"
                data-ad-client="ca-pub-9019093411177810"
                data-ad-slot="5997532525"
                data-auto-format="rspv"
                data-full-width=""
              >
                <div overflow=""></div>
              </amp-ad>
            </div>
          `
          : ''
      }
      ${
        relatedPosts.length
          ? /* html */ `
            <section class="posts-grid">
              ${relatedPosts.map((post) => this.postCard(post, texts.ui)).join('')}
            </section>
          `
          : ''
      }
    `;
  },
};

module.exports = post;
