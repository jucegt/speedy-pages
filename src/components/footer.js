const logo = require('../svgs/logo');
const facebook = require('../svgs/facebook');
const instagram = require('../svgs/instagram');
const twitter = require('../svgs/twitter');

const footer = ({ url, title }) => {
  return /* html */ `
    <footer class="footer">
      <section class="footer__header">
        <a class="footer__link logo" href="${url}" title="${title}">
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
        <div class="footer__panel">
          <h3>Categorias</h3>
          <ul class="footer__list footer__list--inline">
            <li><a href="/" title="Videojuegos">Videojuegos <span>3</span></a></li>
            <li><a href="/" title="Cine">Cine <span>5</span></a></li>
            <li><a href="/" title="Television">Television <span>8</span></a></li>
            <li><a href="/" title="Teatro">Teatro <span>1</span></a></li>
            <li><a href="/" title="Cultura y Deporte">Cultura y Deporte <span>2</span></a></li>
            <li><a href="/" title="Videojuegos">Videojuegos <span>3</span></a></li>
            <li><a href="/" title="Cine">Cine <span>5</span></a></li>
            <li><a href="/" title="Television">Television <span>8</span></a></li>
            <li><a href="/" title="Teatro">Teatro <span>1</span></a></li>
            <li><a href="/" title="Cultura y Deporte">Cultura y Deporte <span>2</span></a></li>
          </ul>
        </div>
        <div class="footer__panel">
          <h3>Paginas</h3>
          <ul class="footer__list">
            <li><a href="/" title="Inicio">Inicio</a></li>
            <li><a href="/" title="Sobre Nosotros">Sobre Nosotros</a></li>
            <li><a href="/" title="Contacto">Contacto</a></li>
            <li><a href="/" title="Politica de Privacidad">Politica de Privacidad</a></li>
            <li><a href="/" title="Politica de Cookies">Politica de Cookies</a></li>
            <li><a href="/" title="Aviso Legal">Aviso Legal</a></li>
          </ul>
        </div>
      </section>
      <section class="footer__bottom">
        <p class="copy">©2023 ${title} - Todos los derechos reservados</p>
      </section>
    </footer>
  `;
};

module.exports = footer;
