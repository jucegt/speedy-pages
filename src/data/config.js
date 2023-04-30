const speedyConfig = require('../../speedy.config');

const config = {
  language: speedyConfig.language || 'en',
  dark: speedyConfig.ui.darkMode,
};

module.exports = config;
