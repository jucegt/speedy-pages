const header = require('./header');
const footer = require('./footer');
const socialLinks = require('./social-links');
const mask = require('./mask');
const state = require('./state');

const shortcodes = function (config) {
  config.addShortcode('header', header);
  config.addShortcode('footer', footer);
  config.addShortcode('socialLinks', socialLinks);
  config.addShortcode('mask', mask);
  config.addShortcode('state', state);
};

module.exports = shortcodes;
