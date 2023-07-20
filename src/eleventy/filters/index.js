const date = require('./date');
const parseHTML = require('./parse-html');
const src = require('./src');

const filters = function (config) {
  config.addFilter('date', date);
  config.addFilter('parseHTML', parseHTML);
  config.addFilter('src', src);
};

module.exports = filters;
