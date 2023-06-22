const fonts = require('./fonts');

const passthrough = (config) => {
  fonts(config);
};

module.exports = passthrough;
