const speedy = require('../../speedy.config');

const config = {
  language: speedy.language || 'en',
  url: speedy.url || 'http://localhost:8080',
  adsAllowed: speedy.adsAllowed || false,
};

module.exports = config;
