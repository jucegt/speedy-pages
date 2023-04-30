const fs = require('node:fs');
const path = require('node:path');
const glob = require('glob');
const sharp = require('sharp');

const speedyConfig = require('../../speedy.config');
const config = speedyConfig.images;

const files = glob.sync(config.src);

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
