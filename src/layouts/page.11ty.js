const page = {
  data: {
    layout: 'base',
  },
  render: function ({ content }) {
    return /* html */ `
      <div class="container page">
        ${content}
      </div>
    `;
  },
};

module.exports = page;
