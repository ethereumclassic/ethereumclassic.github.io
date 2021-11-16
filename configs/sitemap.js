// This config currently mimics default behaviour
// TODO add a lastMod for better indexing / SEO

module.exports = ({ siteUrl }) => ({
  output: "/sitemap",
  query: `
    {
      pages: allSitePage(sort: { order: ASC, fields: path }) {
        edges {
          node {
            path
          }
        }
      }
    }
  `,
  resolveSiteUrl: () => siteUrl,
  resolvePages: ({
    pages: { edges },
    // allWpContentNode: { nodes: allWpNodes },
  }) => {
    // const wpNodeMap = allWpNodes.reduce((acc, node) => {
    //   const { uri } = node;
    //   acc[uri] = node;

    //   return acc;
    // }, {});
    const pages = edges.map(({ node }) => node);
    return pages;
    // .map((page) => {
    //   return { ...page, ...wpNodeMap[page.path] };
    // });
  },
  serialize: ({ path }) => {
    return {
      url: path,
      // lastmod: modifiedGmt,
    };
  },
});
