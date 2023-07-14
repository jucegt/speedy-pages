const fonts = require('./fonts');

const passthrough = function (config) {
  fonts(config);
};

module.exports = passthrough;
