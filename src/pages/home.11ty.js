const home = {
  data: async function () {
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

module.exports = home;
