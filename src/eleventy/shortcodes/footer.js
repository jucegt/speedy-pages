const footer = function ({ title }, logo, socialMedia, categories, pages) {
  const { sociallinks } = socialMedia;
  return /* html */ `
    <footer class="footer">
      <div class="container">
        <section class="footer__header">
          <a class="footer__link logo" href="/" title="${title}">
            ${logo}
          </a>
          ${
            sociallinks?.length > 0
              ? /* html */ `
                <div class="footer__panel social">
                  ${this.socialLinks(sociallinks)}
                </div>
              `
              : ''
          }
        </section>
        <section class="footer__content">
          ${
            categories?.length > 0
              ? /* html */ `
                <div class="footer__panel">
                  <h3>Categorias</h3>
                  <ul class="footer__list footer__list--inline">
                    ${categories
                      ?.map(
                        (category) => /* html */ `
                        <li>
                          <a href="${category.url}" data-total="${category.posts}">
                            ${category.name}
                          </a>
                        </li>
                        `,
                      )
                      .join('')}
                  </ul>
                </div>
              `
              : ''
          }
          ${
            pages?.length > 0
              ? /* html */ `
                <div class="footer__panel">
                  <h3>Paginas</h3>
                  <ul class="footer__list">
                    ${pages
                      ?.map(
                        (page) => /* html */ `
                        <li>
                          <a href="${page.url}">${page.name}</a>
                        </li>
                        `,
                      )
                      .join('')}
                  </ul>
                </div>
              `
              : ''
          }
        </section>
        <section class="footer__bottom">
          <p class="copy">©2023 ${title} - Todos los derechos reservados</p>
        </section>
      </div>
    </footer>
  `;
};

module.exports = footer;
