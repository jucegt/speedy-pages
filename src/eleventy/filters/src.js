const speedy = require('../../../speedy.config');
const { images } = speedy;

const src = function (image, webp = false) {
  const st = images.dist.replace('./.11ty', '');

  if (!webp) {
    return `${st}${images.default}${image}`;
  }

  const imageSplit = image.split('.');
  const imageFormat = imageSplit[imageSplit.length - 1];
  return `${st}${images.webp.name}/${images.webp.default}${image.replace(imageFormat, images.webp.name)}`;
};

module.exports = src;
