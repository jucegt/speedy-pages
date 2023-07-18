const home = {
  data: {
    layout: 'base',
    permalink: '/',
  },
  render: function ({ config }) {
    return /* html */ `
      <div class="container">
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
