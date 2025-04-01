const fs = require('node:fs');
const path = require('node:path');
const glob = require('glob');
const sharp = require('sharp');

const speedy = require('../../../speedy.config');
const config = speedy.images;
const configPhotos = speedy.photos;
const configFavicon = speedy.favicon;

const files = glob.sync(config.src);
const photos = glob.sync(configPhotos.src);
const favicon = glob.sync(configFavicon.src);

const errorMessage = (error) => {
  if (error) throw error;
};

// Resize
config.sizes.forEach((size) => {
  if (!fs.existsSync(`${config.dist}${size.name}`)) {
    const sizePath = `${config.dist}${size.name}`;
    fs.mkdirSync(sizePath, { recursive: true }, errorMessage);
  }

  files.forEach((file) => {
    const filename = path.basename(file);
    const image = sharp(file);
    image
      .resize({
        width: size.width,
        height: size.height,
        fit: config.fit,
      })
      .toFile(`${config.dist}${size.name}/${filename}`)
      .catch((error) => {
        console.log(error);
      });
  });
});

// New Formats
config.webp.sizes.forEach((size) => {
  const { webp } = config;
  if (!fs.existsSync(`${config.dist}${webp.name}/${size.name}`)) {
    const sizePath = `${config.dist}${webp.name}/${size.name}`;
    fs.mkdirSync(sizePath, { recursive: true }, errorMessage);
  }

  files.forEach((file) => {
    const filename = path.basename(file);
    const filesplit = filename.split('.');
    const fileformat = filesplit[filesplit.length - 1];
    const image = sharp(file);
    const newFormat = filename.replace(fileformat, webp.name);
    image
      .webp()
      .resize({
        width: size.width,
        height: size.height,
        fit: config.fit,
      })
      .toFile(`${config.dist}${webp.name}/${size.name}/${newFormat}`)
      .catch((error) => {
        console.log(error);
      });
  });
});

// Photos
if (!fs.existsSync(`${configPhotos.dist}`)) {
  const photosPath = `${configPhotos.dist}`;
  fs.mkdirSync(photosPath, { recursive: true }, errorMessage);
}

photos.forEach((photo) => {
  const photoname = path.basename(photo);
  const image = sharp(photo);
  image
    .resize({
      width: configPhotos.width,
      height: configPhotos.height,
      fit: configPhotos.fit,
    })
    .toFile(`${configPhotos.dist}${photoname}`)
    .catch((error) => {
      console.log(error);
    });
});

// Favicon
if (!fs.existsSync(`${configFavicon.dist}`)) {
  const faviconPath = `${configFavicon.dist}`;
  fs.mkdirSync(faviconPath, { recursive: true }, errorMessage);
}

configFavicon.sizes.forEach((size) => {
  const firstFavicon = favicon[0];
  const faviconImage = sharp(firstFavicon);
  faviconImage
    .resize({
      width: size.width,
      height: size.height,
      fit: configFavicon.fit,
    })
    .toFile(`${configFavicon.dist}${size.name}.png`)
    .catch((error) => {
      console.log(error);
    });
});
