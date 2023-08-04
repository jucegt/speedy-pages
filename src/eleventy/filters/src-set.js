const speedy = require('../../../speedy.config');
const { images } = speedy;

const srcSet = function (image, webp = false) {
  const st = images.dist.replace('./.11ty', '');
  let srcSet = '';

  if (!webp) {
    for (const size of images.sizes) {
      const imagePath = `${st}${size.name}${image} ${size.width}w`;
      srcSet = srcSet !== '' ? `${srcSet}, ${imagePath}` : imagePath;
    }

    return srcSet;
  }

  const imageSplit = image.split('.');
  const imageFormat = imageSplit[imageSplit.length - 1];
  for (const size of images.webp.sizes) {
    const imagePath = `${st}${images.webp.name}/${size.name}${image.replace(imageFormat, images.webp.name)} ${
      size.width
    }w`;
    srcSet = srcSet !== '' ? `${srcSet}, ${imagePath}` : imagePath;
  }

  return srcSet;
};

module.exports = srcSet;
