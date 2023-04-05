const sharp = require(`sharp`);
const glob = require(`glob`);
const matches = glob.sync(`content/blog/**/*.{png,jpg,jpeg}`);

(async function () {
  const images = [];
  await Promise.all(
    matches.map(async (match) => {
      const stream = sharp(match);
      const info = await stream.metadata();
      images.push({ width: info.width, name: match });
    })
  );
  images.sort((a, b) => a.width - b.width);
  images.forEach((image) => console.log(image.width, image.name));
})();
