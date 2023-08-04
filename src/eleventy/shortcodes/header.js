const home = require('../../svgs/home');
const search = require('../../svgs/search');
const searchBox = require('../../svgs/search-box');
const moon = require('../../svgs/moon');
const sun = require('../../svgs/sun');
const hamburger = require('../../svgs/hamburger');

const header = function ({ title }, logo, menu, url) {
  const classesMenu = 'header__panel menu';
  const classesTools = 'header__panel tools';

  return /* html */ `
    <header class="header">
      <div class="container">
        <a href="/" class="header__link logo" title="${title}">${logo}</a>

        ${
          menu?.length > 0
            ? /* html */ `
              <nav class="${classesMenu}" [class]="menu ? '${classesMenu} header__panel--open' : '${classesMenu}'">
                <ul class="menu__list">
                  ${menu
                    ?.map(
                      (item) => /* html */ `
                        <li class="menu__item${url.includes(item.url) ? ' menu__item--active' : ''}">
                          <a href="${item.url}" class="menu__link" title="${item.name}">${item.name}</a>
                        </li>
                      `,
                    )
                    .join('')}
                </ul>
              </nav>
            `
            : ''
        }

        <section class="${classesTools}" [class]="search ? '${classesTools} header__panel--open' : '${classesTools}'">
          <form class="tools__search" method="POST" action-xhr="/search/action.json" target="_top" on="submit:AMP.setState({ query: value })">
            <div class="input input--icon">
              <input placeholder="Buscar" name="search" id="search" on="input-throttled:AMP.setState({ value: event.value })">
              <button>${search()}</button>
            </div>
          </form>
          <div class="tools__mode mode">
            <button on="tap:AMP.toggleTheme()" aria-label="Toggle Mode">
              <span class="mode__icon">
                ${moon()}
                ${sun()}
              </span>
            </button>
          </div>
          ${
            menu?.length > 0
              ? /* html */ `
                <div class="tools__menu">
                  <button on="tap:AMP.setState({ menu: !menu, search: false })" [class]="menu ? 'active' : ''" aria-label="Menu">
                    <span>
                      ${hamburger()}
                    </span>
                  </button>
                </div>
              `
              : ''
          }
        </section>

        <nav class="header__nav nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="/">
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
            <li class="nav__item mode">
              <button on="tap:AMP.toggleTheme()">
                <span class="nav__icon mode__icon">
                  ${moon()}
                  ${sun()}
                </span>
                <span>Modo</span>
              </button>
            </li>
            ${
              menu?.length > 0
                ? /* html */ `
                  <li class="nav__item">
                    <button on="tap:AMP.setState({ menu: !menu, search: false })" [class]="menu ? 'active' : ''">
                      <span class="nav__icon">
                        ${hamburger()}
                      </span>
                      <span>Menu</span>
                    </button>
                  </li>
                `
                : ''
            }
          </ul>
        </nav>
      </div>
    </header>
  `;
};

module.exports = header;
