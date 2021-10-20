const fs = require('fs-extra')
const sharp = require('sharp');

const formats = ['jpeg', 'webp'];
const qualities = [100, 85, 65, 50, 40, 30, 20];
const sizes = {
  '@1x': [1200, 800],
  '@2x': [2400, 1600],
};

const images = {
  'original': {
    id: 'original',
    format: 'jpeg',
    weight: '3100Ko',
    quality: '100',
    width: 4951,
    height: 3301,
    filename: 'original.jpeg',
    path: '/images/original.jpeg',
  },
};

formats.forEach(format => {
  qualities.forEach(quality => {
    Object.keys(sizes).forEach(size => {
      const filename = `${quality}${size}.${format}`;
      const path = `./public/images/${filename}`;

      if (format === 'jpeg') {
        sharp('./public/images/original.jpeg')
          .resize(...sizes[size])
          .jpeg({ quality })
          .toFile(path, function(err) {
            if (err !== null) console.error(err);
          });
      }
      if (format === 'webp') {
        sharp('./public/images/original.jpeg')
          .resize(...sizes[size])
          .webp({ quality })
          .toFile(path, function(err) {
            if (err !== null) console.error(err);
          });
      }

      const stats = fs.statSync(path);
      images[`${format}-${quality}${size}`] = {
        id: `${format}-${quality}${size}`,
        format,
        weight: `${Math.round(stats.size / 1000)}Ko`,
        quality: `${quality}`,
        width: sizes[size][0],
        height: sizes[size][1],
        filename,
        path: path.replace('/public', '')
      };
    });
  });
});

fs.writeJson('./src/images.json', images, err => {
  if (err) return console.error(err)
  console.log('success!')
});
