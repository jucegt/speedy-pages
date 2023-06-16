const images = require('./images');
const html = require('./html');

const transforms = (config) => {
  images(config);
  html(config);
};

module.exports = transforms;
