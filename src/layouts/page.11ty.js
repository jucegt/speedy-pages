const page = {
  data: {
    layout: 'base',
  },
  render: function ({ content }) {
    return /* html */ `
      ${content}
    `;
  },
};

module.exports = page;
