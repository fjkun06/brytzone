const sharp = require('sharp');
const fs = require('fs');
// const directory = './../../public/login';
const directory = 'public/login';
// const directory = 'public/login/community';

// fs.readdirSync(directory).forEach(file => {
//   console.log(file);
//   file === "phone.png" && sharp(`${directory}/${file}`)
//     // .resize(1920, 1080) // width, height
//     .toFile(`${directory}/phone.webp`);
//   });
fs.readdirSync(directory).forEach(file => {
 sharp(`${directory}/${file}`)
    // .resize(1920, 1080) // width, height
    .toFile(`${directory}/${file.slice(0,4)}.webp`);
  });