const images = require('./images');
const html = require('./html');

const transforms = (config) => {
  config.addTransform('images', images);
  config.addTransform('html', html);
};

module.exports = transforms;
