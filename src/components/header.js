const logo = require('../svgs/logo');

// Icons
const home = require('../svgs/home');
const search = require('../svgs/search');
const moon = require('../svgs/moon');
const hamburger = require('../svgs/hamburger');

const header = ({ title, url }) => {
  const defaultMenu = 'header__panel header__panel--bottom menu';
  const defaultTools = 'header__panel header__panel--top tools';
  const defaultNav = 'header__nav';

  return /* html */ `
    <header class="header">
      <a href="${url}" class="logo" title="${title}">
        ${logo()}
      </a>

      <nav class="${defaultMenu}" [class]="menu ? '${defaultMenu} header__panel--show' : '${defaultMenu}'">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Page</a></li>
          <li><a href="/">Category</a></li>
        </ul>
      </nav>

      <div class="${defaultTools}" [class]="search ? '${defaultTools} header__panel--show' : '${defaultTools}'">
        <div class="search">
          Input
        </div>
        <div class="mode">
          Moon/Sun
        </div>
      </div>

      <div class="${defaultNav}" [class]="search ? '${defaultNav} header__nav--dark' : '${defaultNav}'">
        <ul>
          <li>
            <a href="/">
              ${home()}
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <button [class]="search ? 'active' : ''" on="tap:AMP.setState({ search: !search, menu: false })">
              ${search()}
              <span>Buscar</span>
            </button>
          </li>
          <li>
            <button>
              ${moon()}
              <span>Modo</span>
            </button>
          </li>
          <li>
            <button [class]="menu ? 'active' : ''" on="tap:AMP.setState({ menu: !menu, search: false })">
              ${hamburger()}
              <span>Menu</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  `;
};

module.exports = header;
