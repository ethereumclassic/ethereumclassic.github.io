const https = require("https");

const id = process.argv[2];

const getYoutubeMetaData = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        // Extract the json metadata
        const jsonStart =
          data.indexOf("var ytInitialData = ") + "var ytInitialData = ".length;
        const jsonString = data.substring(
          jsonStart,
          data.indexOf("}}]}}};</script><script") + "}}]}}}".length
        );
        const jsonData = JSON.parse(jsonString);
        const [{ videoPrimaryInfoRenderer }, { videoSecondaryInfoRenderer }] =
          jsonData.contents.twoColumnWatchNextResults.results.results.contents;
        // console.log(JSON.stri/ngify(jsonData, null, 2));
        const info = {
          ...videoPrimaryInfoRenderer,
          ...videoSecondaryInfoRenderer,
        };
        const parsed = {
          title: info.title.runs[0].text,
          description: info.description.runs[0].text,
          author: info.owner.videoOwnerRenderer.title.runs[0].text,
          authorUrl:
            info.owner.videoOwnerRenderer.navigationEndpoint.browseEndpoint.canonicalBaseUrl.slice(
              1
            ),
          date: new Date(info.dateText.simpleText).toISOString().slice(0, 10),
        };
        resolve(parsed);
      });
    });
  });
};

(async () => {
  const data = await getYoutubeMetaData(
    `https://www.youtube.com/watch?v=${id}`
  );
  console.log(`- title: "${data.title}"
  date: ${data.date}
  uploaded: ${data.date}
  youtube: ${id}
  tags: ["explainers"]
  author: "${data.author}"
  authorYoutube: "${data.authorUrl}"
  description: |
${data.description
  .split("\n")
  .map((l) => `    ${l}`)
  .join("\n")}`);
})();
