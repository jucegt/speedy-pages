const error = require('../svgs/error.js');

const notFound = {
  data: {
    permalink: '/404.html',
    layout: 'base',
  },
  render: function ({ collections, config, locale }) {
    const {
      ui: { notFound },
      ui,
    } = locale[config.language];
    const { posts } = collections;
    const pages = posts.sort(() => 0.5 - Math.random()).slice(0, 6);
    return /* html */ `
      <section class="not-found">
        <article class="not-found__content">
          <h1>404</h1>
          <h2><span>${notFound.title}</span> ${notFound.subtitle.text} <strong>${notFound.subtitle.strong}</strong></h2>
          <p>${notFound.text}</p>
          <p>${notFound.contact.prefix} <a href="/contact">${notFound.contact.link}</a> ${notFound.contact.suffix}</p>
          <a class="not-found__button" href="/">${notFound.button}</a>
        </article>
        <aside class="not-found__icon">
          ${error()}
        </aside>
      </section>
      <h2 class="not-found-recommended">${notFound.postsTitle}</h2>
      <section class="posts-grid">
        ${pages.map((post) => this.postCard(post, ui)).join('')}
      </section>
    `;
  },
};

module.exports = notFound;
