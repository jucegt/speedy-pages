const header = require('./header');

const shortcodes = function (config) {
  config.addShortcode('header', header);
};

module.exports = shortcodes;
