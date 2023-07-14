const logo = require('../svgs/logo');
const home = require('../svgs/home');
const search = require('../svgs/search');
const searchBox = require('../svgs/search-box');
const moon = require('../svgs/moon');
const sun = require('../svgs/sun');
const hamburger = require('../svgs/hamburger');

const header = function ({ url, title }) {
  const classesMenu = 'header__panel menu';
  const classesTools = 'header__panel tools';

  return /* html */ `
    <header class="header">
      <a href="${url}" class="header__link logo" title="${title}">${logo()}</a>

      <nav class="${classesMenu}" [class]="menu ? '${classesMenu} header__panel--open' : '${classesMenu}'">
        <ul class="menu__list">
          <li class="menu__item">
            <a href="${url}" class="menu__link" title="Inicio">Inicio</a>
          </li>
          <li class="menu__item">
            <a href="${url}/sobre-nosotros" class="menu__link" title="Sobre Nosotros">Sobre Nosotros</a>
          </li>
        </ul>
      </nav>

      <section class="${classesTools}" [class]="search ? '${classesTools} header__panel--open' : '${classesTools}'">
        <form class="tools__search" method="post" action-xhr="/" target="_top">
          <div class="input input--icon">
            <input placeholder="Buscar" name="search" id="search">
            ${search()}
          </div>
        </form>
        <div class="tools__mode">
          ${moon()}
          ${sun()}
        </div>
      </section>

      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="${url}">
              <span class="nav__icon">
                ${home()}
              </span>
              <span>Inicio</span>
            </a>
          </li>
          <li class="nav__item">
            <button on="tap:AMP.setState({ search: !search, menu: false })" [class]="search ? 'active' : ''">
              <span class="nav__icon">
                ${searchBox()}
              </span>
              <span>Buscar</span>
            </button>
          </li>
          <li class="nav__item">
            <button on="tap:AMP.toggleTheme()">
              <span class="nav__icon">
                ${moon()}
                ${sun()}
              </span>
              <span>Modo</span>
            </button>
          </li>
          <li class="nav__item">
            <button on="tap:AMP.setState({ menu: !menu, search: false })" [class]="menu ? 'active' : ''">
              <span class="nav__icon">
                ${hamburger()}
              </span>
              <span>Menu</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  `;
};

module.exports = header;
