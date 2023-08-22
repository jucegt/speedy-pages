const config = require('../../../speedy.config');

const date = function (date, short = false) {
  if (!date) return null;
  if (short)
    return new Date(date).toLocaleDateString(config.language, { year: 'numeric', month: 'short', day: 'numeric' });
  return new Date(date).toLocaleDateString(config.language, { year: 'numeric', month: 'long', day: 'numeric' });
};

module.exports = date;
