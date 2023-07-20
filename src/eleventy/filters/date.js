const config = require('../../../speedy.config');

const date = function (date) {
  return new Date(date).toLocaleDateString(config.language, { year: 'numeric', month: 'long', day: 'numeric' });
};

module.exports = date;
