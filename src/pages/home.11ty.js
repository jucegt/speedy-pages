const home = {
  data: async function () {
    return {
      layout: 'base',
      pagination: {
        data: 'collections.posts',
        size: 12,
        alias: 'posts',
      },
      permalink: ({ pagination }) => {
        let link = '/';
        if (pagination.pageNumber > 0) {
          link += `${pagination.pageNumber + 1}/`;
        }
        return link;
      },
    };
  },
  render: function ({ config, posts }) {
    return /* html */ `
      <div class="container">
        ${posts
          .map(
            (post) => /* html */ `
            <p>${post.url}</p>
          `,
          )
          .join('')}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Asperiores beatae</strong> neque facere temporibus, fugit ullam sequi quidem expedita aspernatur, assumenda aliquid modi perferendis enim nostrum architecto doloremque explicabo cupiditate voluptates!</p>
        <p>${config.language}</p>
        <p><img src="/11ty.png" alt="11ty" /></p>
        <p>${config.language}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Asperiores beatae</strong> neque facere temporibus, fugit ullam sequi quidem expedita aspernatur, assumenda aliquid modi perferendis enim nostrum architecto doloremque explicabo cupiditate voluptates!</p>
      </div>
    `;
  },
};

module.exports = home;
