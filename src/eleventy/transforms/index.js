const images = require('./images');
const amp = require('./amp');
const html = require('./html');

const transforms = function (config) {
  config.addTransform('images', images);
  config.addTransform('amp', amp);
  config.addTransform('html', html);
};

module.exports = transforms;
