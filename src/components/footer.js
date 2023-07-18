const logo = require('../svgs/logo');
const facebook = require('../svgs/facebook');
const instagram = require('../svgs/instagram');
const twitter = require('../svgs/twitter');

const footer = function ({ title }, categories, pages) {
  return /* html */ `
    <footer class="footer">
      <section class="footer__header">
        <a class="footer__link logo" href="/" title="${title}">
          ${logo()}
        </a>
        <div class="footer__panel social">
          <ul>
            <li><a class="social__button fb" href="/" aria-label="Facebook">${facebook()}</a></li>
            <li><a class="social__button ig" href="/" aria-label="Instagram">${instagram()}</a></li>
            <li><a class="social__button tw" href="/" aria-label="Twitter">${twitter()}</a></li>
          </ul>
        </div>
      </section>
      <section class="footer__content">
        ${
          categories?.length > 0
            ? /* html */ `
          <div class="footer__panel">
            <h3>Categorias</h3>
            <ul class="footer__list footer__list--inline">
              ${categories
                .map(
                  (category) => /* html */ `
                  <li>
                    <a href="${category.url}">
                      ${category.name} <span>${category.posts}</span>
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
                .map(
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
    </footer>
  `;
};

module.exports = footer;
