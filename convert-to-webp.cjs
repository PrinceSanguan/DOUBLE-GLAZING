const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  'house-extension-wetherby-1.jpg',
  'dsc9477-1-663x1024.jpg',
  'smart076-830x556@2x-1536x1029.jpg',
  'shutterstock_420955957-min-768x512.jpg',
  'shutterstock_165958025-768x520.jpg',
  'shutterstock_1145334395-768x512.jpg'
];

const dir = 'public/images/Hero';

images.forEach(img => {
  const input = path.join(dir, img);
  const output = path.join(dir, img.replace(/\.jpg$/, '.webp'));
  sharp(input)
    .webp({ quality: 80 })
    .toFile(output)
    .then(() => console.log(`Converted: ${img} → ${path.basename(output)}`))
    .catch(err => console.error(`Error converting ${img}:`, err));
});
