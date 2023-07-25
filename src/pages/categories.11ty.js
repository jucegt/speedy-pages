const categories = {
  data: function () {
    return {
      layout: 'base',
      pagination: {
        data: 'collections.pagedCategories',
        size: 1,
        alias: 'pages',
      },
      permalink: function ({ pages }) {
        let link = `/${this.slugify(pages.title)}/`;
        if (pages.pageNumber > 1) {
          link += `${pages.pageNumber}/`;
        }
        return link;
      },
    };
  },
  render: function ({ pages, collections }) {
    const { categoryByName } = collections;
    const { data, content } = categoryByName[pages.title];
    const { title, heading } = data;
    return /* html */ `
      <header class="page-info">
        <h1 class="page-info__title"><span>${heading || title}</span></h1>
        ${content}
      </header>
      <section class="posts-grid">
        ${pages?.items?.map((post) => this.postCard(post)).join('')}
      </section>
    `;
  },
};

module.exports = categories;
