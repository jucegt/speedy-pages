const header = require('./header');
const footer = require('./footer');
const socialLinks = require('./social-links');

const shortcodes = function (config) {
  config.addShortcode('header', header);
  config.addShortcode('footer', footer);
  config.addShortcode('socialLinks', socialLinks);
};

module.exports = shortcodes;
