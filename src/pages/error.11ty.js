const warning = require('../svgs/warning.js');

const error = {
  data: {
    permalink: '/404.html',
    layout: 'base',
  },
  render: function ({ collections }) {
    const { posts } = collections;
    const pages = posts.sort(() => 0.5 - Math.random()).slice(0, 6);
    return /* html */ `
      <section class="error">
        <article class="error__content">
          <h1>404</h1>
          <h2><span>¡Oooops!</span> Algo salio <strong>mal...</strong></h2>
          <a href="/">Regresar al Inicio</a>
        </article>
        <aside class="error__icon">
          ${warning()}
        </aside>
      </section>
      <h2 class="error-recommended">Artículos que te pueden interesar</h2>
      <section class="posts-grid">
        ${pages.map((post) => this.postCard(post)).join('')}
      </section>
    `;
  },
};

module.exports = error;
