const logo = require('../svgs/logo');

// Icons
const home = require('../svgs/home');
const search = require('../svgs/search');
const moon = require('../svgs/moon');
const hamburger = require('../svgs/hamburger');

const header = ({ title, url }) => {
  const defaultMenu = 'header__panel menu';
  const defaultTools = 'header__panel tools';

  return /* html */ `
    <header class="header">
      <a href="${url}" class="logo" title="${title}">
        ${logo()}
      </a>

      <!-- <nav class="${defaultMenu}">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Page</a></li>
          <li><a href="/">Category</a></li>
        </ul>
      </nav>

      <div class="${defaultTools}">
        <div class="search">
          Input
        </div>
        <div class="mode">
          Moon/Sun
        </div>
      </div> -->

      <div class="header__nav">
        <ul>
          <li>
            <a href="/">
              ${home()}
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <a href="/">
              ${search()}
              <span>Buscar</span>
            </a>
          </li>
          <li>
            <a href="/">
              ${moon()}
              <span>Modo</span>
            </a>
          </li>
          <li>
            <a href="/">
              ${hamburger()}
              <span>Menu</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  `;
};

module.exports = header;
