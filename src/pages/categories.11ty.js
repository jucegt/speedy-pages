const categories = {
  data: function () {
    return {
      layout: 'base',
      pagination: {
        data: 'collections.pagedCategories',
        size: 1,
        alias: 'pages',
      },
      eleventyComputed: {
        pageTitle: function ({ pages }) {
          const { title } = pages;
          return title;
        },
        pageDescription: function ({ pages }) {
          const { description } = pages;
          return description;
        },
        firstPostImage: function ({ pages }) {
          return pages.items[0].data.image;
        },
      },
      permalink: function ({ pages }) {
        let link = `/${this.slugify(pages.slug)}/`;
        if (pages.pageNumber > 1) {
          link += `${pages.pageNumber}/`;
        }
        return link;
      },
    };
  },
  render: function ({ config, locale, pages, collections }) {
    const texts = locale[config.language] || locale.en;
    const { categoryBySlug } = collections;
    const { data, content } = categoryBySlug[pages.slug];
    const { title, heading } = data.seo;
    return /* html */ `
      <header class="page-info">
        <h1 class="page-info__title"><span>${heading || title}</span></h1>
        ${content}
      </header>
      <section class="posts-grid">
        ${pages?.items?.map((post) => this.postCard(post, texts.ui, false)).join('')}
      </section>
      ${this.pagination(pages, texts.ui)}
    `;
  },
};

module.exports = categories;
