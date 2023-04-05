const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);
const matches = glob.sync(`content/blog/**/*.{png,jpg,jpeg}`);

const MAX_WIDTH = 1600;
const QUALITY = 90;

(async function () {
  // loop over matches
  for (const match of matches) {
    const stream = sharp(match);
    const info = await stream.metadata();
    if (info.width > MAX_WIDTH) {
      console.log("optimizing", info.width, match);
      const optimizedName = match.replace(
        /(\..+)$/,
        (_, ext) => `-optimized${ext}`
      );
      await stream
        .resize(MAX_WIDTH)
        .jpeg({ quality: QUALITY })
        .toFile(optimizedName);
      await fs.rename(optimizedName, match);
    }
  }
  console.log("complete");
})();
