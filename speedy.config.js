require('dotenv').config();

const speedyConfig = {
  language: process.env.LANGUAGE || 'en',
  url: process.env.ENV_URL || process.env.URL || 'http://localhost:8080',
  adsAllowed: process.env.ADS_ALLOWED === 'true' ? true : false,
  ui: {
    paginatedPagePrefix: '',
    postsPerPage: 12,
  },
  photos: {
    src: './content/static/photos/*.*',
    dist: './.11ty/static/photos/',
    fit: 'cover',
    width: 60,
    height: 60,
  },
  images: {
    src: './content/static/*.*',
    dist: './.11ty/static/',
    fit: 'cover',
    default: 'sm',
    sizes: [
      {
        name: 'xs',
        width: 420,
        height: 315,
      },
      {
        name: 'sm',
        width: 665,
        height: 499,
      },
      {
        name: 'md',
        width: 910,
        height: 683,
      },
      {
        name: 'lg',
        width: 1155,
        height: 866,
      },
      {
        name: 'xl',
        width: 1400,
        height: 1050,
      },
    ],
    webp: {
      name: 'webp',
      default: 'md',
      sizes: [
        {
          name: 'md',
          width: 600,
          height: 480,
        },
        {
          name: 'lg',
          width: 1200,
          height: 960,
        },
      ],
    },
  },
};

module.exports = speedyConfig;
