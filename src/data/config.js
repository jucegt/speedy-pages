require('dotenv').config();

const config = {
  language: process.env.LANGUAGE || 'en',
  dark: process.env.DARK_MODE === 'true' ? true : false,
};

module.exports = config;
