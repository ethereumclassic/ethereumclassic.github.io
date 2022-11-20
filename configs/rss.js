const dedupeStrings = require("../src/utils/dedupeStrings");

module.exports = ({ locales, defaultLocale, siteUrl }) => ({
  feeds: Object.keys(locales)
    .map((key) => ({ key, isDefault: defaultLocale === key, ...locales[key] }))
    .filter(({ enabled }) => enabled)
    .map(({ key, name, isDefault }) => ({
      output: `/rss${isDefault ? "" : `-${key}`}.xml`,
      title: `Ethereum Classic News${isDefault ? "" : ` - ${name}`}`,
      query: `
      {
        newsItems: allNewsItem(
          filter: { locale: { eq: "${key}" }, unlisted: { ne: true } }
          sort: { fields: [date, title], order: [DESC, ASC] }
        ) {
          edges {
            node {
              id
              date
              author
              source
              link
              description
              title
              type: newsType
              parent {
                ... on Mdx {
                  excerpt(pruneLength: 400)
                }
              }      
            }
          }
        }
      }
    `,
      serialize: ({ query: { newsItems } }) =>
        newsItems.edges.map(({ node }) => {
          const url =
            node.type === "news"
              ? node.link
              : `${siteUrl}${isDefault ? "" : `/${key}`}${node.link}`;
          return {
            date: node.date,
            title: node.title,
            guid: url,
            author: dedupeStrings(node.author, node.source),
            description: (node.parent || {}).excerpt || node.description,
            url,
          };
        }),
    })),
});
