const home = {
  data: {
    layout: 'base',
    permalink: '/',
  },
  render: ({ config }) => {
    return /* html */ `
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores beatae neque facere temporibus, fugit ullam sequi quidem expedita aspernatur, assumenda aliquid modi perferendis enim nostrum architecto doloremque explicabo cupiditate voluptates!</p>
        <p>${config.dark}</p>
        <p>${config.language}</p>
      </div>
    `;
  },
};

module.exports = home;
