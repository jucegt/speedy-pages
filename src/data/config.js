require('dotenv').config();

module.exports = {
  language: process.env.LANGUAGE || 'en',
  dark: process.env.DARK_MODE === 'true' ? true : false,
};
