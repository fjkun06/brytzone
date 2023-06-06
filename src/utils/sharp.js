const sharp = require('sharp');
const fs = require('fs');
const directory = 'public/home/community';

// fs.readdirSync(directory).forEach(file => {
//   console.log(file);
//   file === "conv.svg" && sharp(`${directory}/${file}`)
//     // .resize(1920, 1080) // width, height
//     .toFile(`${directory}/img11.png`);
//   });
fs.readdirSync(directory).forEach(file => {
 sharp(`${directory}/${file}`)
    // .resize(1920, 1080) // width, height
    .toFile(`${directory}/${file.slice(0,6)}.webp`);
  });