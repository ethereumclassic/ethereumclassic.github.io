// This script sets up the news items
// combines blog and newslinks into single queriable NewsItem type

// TODO make this configurable

const types = {
  VideosCollection: "video",
  ServicesAppsCollection: "application",
  NewsLinksCollection: "news",
};

const ignoreTags = {
  video: true,
  application: true,
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink },
  createNodeId,
  getNode,
  createContentDigest,
}) => {
  // filter out irrelevent nodes
  if (
    !(types[node.internal.type] || node.internal.type === `Mdx`) ||
    (node.internal.type === `Mdx` &&
      !node.fileAbsolutePath.includes("/content/blog/"))
  ) {
    return;
  }

  function createNewsItem(obj) {
    const newsType = obj.newsType || types[node.internal.type];
    const newsItem = {
      ...obj,
      newsType,
      tags: ignoreTags[newsType] ? [newsType] : [...obj.tags, "news"],
      id: createNodeId(`${node.id} >>> NEWS ITEM`),
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type: "NewsItem",
      },
    };
    if (obj.date) {
      newsItem.date = new Date(obj.date); // normalize the date
      newsItem.year = `${newsItem.date.getUTCFullYear()}`; // year string for easy filtering
    }
    createNode(newsItem);
    createParentChildLink({ parent: node, child: newsItem });
  }

  if (node.internal.type === `Mdx`) {
    const parentNode = getNode(node.parent);
    createNewsItem({
      ...node.frontmatter,
      locale: parentNode.absolutePath.split(".").slice(-2)[0],
      newsType: "blog",
      link: `/${parentNode.relativeDirectory}`,
      tags: ["blog"].concat(node.frontmatter?.tags || []),
    });
  } else {
    createNewsItem({ ...node, blog: false });
  }
};
