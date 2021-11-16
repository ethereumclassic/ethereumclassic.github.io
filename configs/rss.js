const { dedupeStrings } = require("../src/utils/helpers");

// return news items
// TODO add all categories etc? https://www.npmjs.com/package/rss#itemoptions

module.exports = ({ locales, siteUrl }) => ({
  feeds: locales.list
    .filter(({ enabled }) => enabled)
    .map((locale) => ({
      serialize: ({ query: { newsItems } }) => {
        return newsItems.edges.map(({ node }) => {
          // todo get blog article excerpts
          // prepend site URL if we have a blog item
          // const link = node.link;
          return {
            date: node.date,
            title: node.title,
            author: dedupeStrings(node.author, node.source),
            url: node.blog ? `${siteUrl}${node.link}` : node.link,
            description: node.blog ? node.parent.excerpt : undefined,
          };
        });
      },
      query: `
      {
        newsItems: allNewsItem(
          filter: {locale: { eq: "${locale.key}" } }
          sort: { fields: date, order: DESC }
        ) {
          edges {
            node {
              id
              date
              author
              source
              link
              title
              blog
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
      output: `/rss${locale.default ? "" : `-${locale.key}`}.xml`,
      title: `ETC News${locale.default ? "" : ` - ${locale.name}`}`,
      // optional configuration to insert feed reference in pages:
      // if `string` is used, it will be used to create RegExp and then test if pathname of
      // current page satisfied this regular expression;
      // if not provided or `undefined`, all pages will have feed reference inserted
      match: "^/(news|blog)/", // TODO, make this work with specifically with locales
      // optional configuration to specify external rss feed, such as feedburner
      // link: "https://feeds.feedburner.com/gatsby/blog",
    })),
});
