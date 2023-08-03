const date = require('./date');
const parseHTML = require('./parse-html');
const src = require('./src');
const srcSet = require('./src-set');
const markdown = require('./markdown-it');
const photo = require('./photo');

const filters = function (config) {
  config.addFilter('date', date);
  config.addFilter('parseHTML', parseHTML);
  config.addFilter('src', src);
  config.addFilter('srcSet', srcSet);
  config.addFilter('markdown', markdown);
  config.addFilter('photo', photo);
};

module.exports = filters;
