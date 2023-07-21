const home = {
  data: function () {
    return {
      layout: 'base',
      pagination: {
        data: 'collections.pagedPosts',
        size: 1,
        alias: 'pages',
      },
      permalink: ({ pages }) => {
        let link = '/';
        if (pages.pageNumber > 1) {
          link += `${pages.pageNumber}/`;
        }
        return link;
      },
    };
  },
  render: function ({ pages, collections }) {
    const { seo } = collections;
    return /* html */ `
      <header class="page-info">
        <h1 class="page-info__title"><span>${seo.heading || seo.title}</span></h1>
        ${
          seo.info
            ? seo.info
            : seo.description
            ? /* html */ `
              <p>${seo.description}</p>
            `
            : ''
        }
      </header>
      <section class="posts-grid">
        ${pages.items.map((post) => this.postCard(post)).join('')}
      </section>
    `;
  },
};

module.exports = home;
