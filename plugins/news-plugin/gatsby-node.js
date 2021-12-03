// This script sets up the news items
// combines blog and newslinks into single queriable NewsItem type

exports.onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink },
  createNodeId,
  getNode,
  createContentDigest,
}) => {
  if (
    !(
      node.internal.type === `NewsLinksCollection` ||
      node.internal.type === `Mdx`
    )
  ) {
    return;
  }
  if (
    node.internal.type === `Mdx` &&
    !node.fileAbsolutePath.includes("/content/blog/")
  ) {
    return;
  }

  function createNewsItem(obj) {
    const newsItem = {
      ...obj,
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
      blog: true,
      link: `/${parentNode.relativeDirectory}`,
      tags: ["blog"].concat(node.frontmatter?.tags || []),
    });
  } else {
    createNewsItem({ ...node, blog: false });
  }
};
