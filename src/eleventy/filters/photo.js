const speedy = require('../../../speedy.config');
const { photos } = speedy;

const photo = function (photo) {
  const st = photos.dist.replace('./.11ty', '');

  return `${st}${photo.replace('/', '')}`;
};

module.exports = photo;
