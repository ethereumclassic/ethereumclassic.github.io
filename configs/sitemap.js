module.exports = ({ siteUrl, lastUpdated }) => ({
  output: "/sitemap",
  query: `
    {
      pages: allSitePage(sort: { order: ASC, fields: path }) {
        edges {
          node {
            path
            pageContext
          }
        }
      }
      mdx: allMdx {
        edges {
          node {
            slug
            frontmatter {
              updated
              date
            }
          }
        }
      }
    }
  `,
  resolveSiteUrl: () => siteUrl,
  resolvePages: ({ pages: { edges }, mdx }) => {
    const mdxInfo = mdx.edges.reduce((o, { node }) => {
      return { ...o, [node.slug]: node.frontmatter };
    }, {});
    return edges.map(({ node }) => {
      const { i18n, mdxSlug } = node.pageContext;
      let { date, updated } = mdxInfo[mdxSlug] || {};
      const parsed = i18n ? JSON.parse(i18n) : {};
      return {
        ...node,
        lastmod:
          parsed.updated || updated || parsed.published || date || lastUpdated,
      };
    });
  },
  serialize: ({ path, lastmod }) => {
    return {
      url: path,
      lastmod,
    };
  },
});
