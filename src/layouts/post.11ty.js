const post = {
  data: {
    layout: 'base',
  },
  render: function ({ content }) {
    return /* html */ `
      <div class="container post">
        ${content}
      </div>
    `;
  },
};

module.exports = post;
