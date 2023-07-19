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
  render: function ({ pages }) {
    return /* html */ `
      <div class="container">
        ${pages.items
          .map(
            (post) => /* html */ `
            <p><a href="${post.url}">${post.url}</a></p>
          `,
          )
          .join('')}
      </div>
    `;
  },
};

module.exports = categories;
