// This script sets up the news items
// combines blog and newslinks into single queriable NewsItem type

const types = {
  NewsLinksCollection: { tag: "news" },
  VideosCollection: { tag: "video", ignoreTags: true, linkPrefix: "/videos" },
  ServicesAppsCollection: {
    tag: "application",
    ignoreTags: true,
    linkPrefix: "/services/apps",
  },
};

exports.onCreateNode = async (
  {
    node,
    actions: { createNode, createParentChildLink },
    createNodeId,
    getNode,
    createContentDigest,
  },
  { defaultLocale }
) => {
  // filter out irrelevent nodes
  if (
    !(types[node.internal.type] || node.internal.type === `Mdx`) ||
    (node.internal.type === `Mdx` &&
      !node.fileAbsolutePath.includes("/content/blog/"))
  ) {
    return;
  }

  function createNewsItem(obj) {
    const { tag, ignoreTags, linkPrefix } = obj.newsType
      ? { tag: obj.newsType }
      : types[node.internal.type];
    const newsItem = {
      ...obj,
      newsType: tag,
      tags: ignoreTags ? [tag] : [...obj.tags, "news"],
      link: obj.link || (obj.slug && linkPrefix && `${linkPrefix}#${obj.slug}`),
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
    // TODO pass to config
    const locale = parentNode.absolutePath.endsWith("index.md")
      ? defaultLocale
      : parentNode.absolutePath.split(".").slice(-2)[0];
    createNewsItem({
      ...node.frontmatter,
      locale,
      newsType: "blog",
      link: `/${parentNode.relativeDirectory}`,
      tags: ["blog"].concat(node.frontmatter?.tags || []),
    });
  } else {
    createNewsItem({ ...node, blog: false });
  }
};
