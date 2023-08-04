const page = {
  data: {
    layout: 'base',
  },
  render: function ({ content, seo }) {
    return /* html */ `
      <article class="post">
        <section class="post__header">
          <h1 class="post__title">${seo.heading}</h1>
        </section>
        <section class="post__body">
          <div class="post__content">
            ${content}
          </div>
        </section>
      </article>
    `;
  },
};

module.exports = page;
