const logo = require('../svgs/logo');
const home = require('../svgs/home');
const search = require('../svgs/search');
const moon = require('../svgs/moon');
const hamburger = require('../svgs/hamburger');

const header = ({ url, title }) => {
  return /* html */ `
    <header class="header">
      <a href="${url}" class="header__link logo" title="${title}">${logo()}</a>

      <nav class="header__panel menu">
        <ul class="menu__list">
          <li class="menu__item">
            <a href="${url}" class="menu__link" title="Inicio">Inicio</a>
          </li>
          <li class="menu__item">
            <a href="${url}/sobre-nosotros" class="menu__link" title="Sobre Nosotros">Sobre Nosotros</a>
          </li>
        </ul>
      </nav>

      <section class="header__panel tools">
        <div class="tools__search">
          Search
        </div>
        <div class="tools__mode">
          Mode
        </div>
      </section>

      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="${url}">
              ${home()}
              <span>Inicio</span>
            </a>
          </li>
          <li class="nav__item">
            <button>
              ${search()}
              <span>Buscar</span>
            </button>
          </li>
          <li class="nav__item">
            <button>
              ${moon()}
              <span>Modo</span>
            </button>
          </li>
          <li class="nav__item">
            <button>
              ${hamburger()}
              <span>Menu</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  `;
};

module.exports = header;
