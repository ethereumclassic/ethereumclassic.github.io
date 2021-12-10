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
          filter: {locale: { eq: "${key}" } }
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
              newsType
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
      serialize: ({ query: { newsItems } }) => {
        return newsItems.edges.map(({ node }) => {
          const item = {
            date: node.date,
            title: node.title,
            guid: `${siteUrl}${node.link}`,
            author: dedupeStrings(node.author, node.source),
            url:
              node.newsType === "news" ? node.link : `${siteUrl}${node.link}`,
            description: node.parent?.excerpt || node.description,
          };
          console.log(item);
          return item;
        });
      },
    })),
});
