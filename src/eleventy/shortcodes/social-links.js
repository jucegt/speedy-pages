const socialIcons = require('../../svgs/social-icons');

const socialLinks = function (social) {
  return /* html */ `
    <ul class="social">
    ${social
      ?.map(
        (link) => /* html */ `
        <li>
          <a
            class="social__button ${link.name.toLowerCase()}"
            href="${link.url}"
            aria-label="${link.name}"
          >
            ${socialIcons[link.name.toLowerCase()]}
          </a>
        </li>
        `,
      )
      .join('')}
    </ul>
  `;
};

module.exports = socialLinks;
