const header = require('./header');
const footer = require('./footer');
const socialLinks = require('./social-links');
const mask = require('./mask');
const state = require('./state');
const postCard = require('./post-card');
const search = require('./search');
const pagination = require('./pagination');

const shortcodes = function (config) {
  config.addShortcode('header', header);
  config.addShortcode('footer', footer);
  config.addShortcode('socialLinks', socialLinks);
  config.addShortcode('mask', mask);
  config.addShortcode('state', state);
  config.addShortcode('postCard', postCard);
  config.addShortcode('search', search);
  config.addShortcode('pagination', pagination);
};

module.exports = shortcodes;
