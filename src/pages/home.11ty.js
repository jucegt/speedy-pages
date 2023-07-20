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
      <div class="container">
        <h1>${seo.heading || seo.title}</h1>
        <p>${seo.info || seo.description}</p>
        <section class="posts-grid">
          ${pages.items.map((post) => this.postCard(post)).join('')}
        </section>
      </div>
    `;
  },
};

module.exports = home;
