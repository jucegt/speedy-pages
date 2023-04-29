require('dotenv').config();

const metadata = {
  title: 'SpeedyPages',
  url: process.env.ENV_URL || 'http://localhost:8080',
};

module.exports = metadata;
