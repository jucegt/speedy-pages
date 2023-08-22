const links = require('./links');
const images = require('./images');
const amp = require('./amp');
const html = require('./html');
const lazy = require('./lazy');

const transforms = function (config) {
  config.addTransform('links', links);
  config.addTransform('images', images);
  config.addTransform('amp', amp);
  config.addTransform('lazy', lazy);
  config.addTransform('html', html);
};

module.exports = transforms;
