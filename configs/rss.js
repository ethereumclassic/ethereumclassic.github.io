const fs = require("fs");
const jsYaml = require("js-yaml");
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
      serialize: ({ query: { newsItems } }) => {
        // get i18n for prefixing
        const i18nPath = isDefault
          ? `${process.env.PWD}/content/ui.global.yaml`
          : `${process.env.PWD}/i18n/ui.global.${key}.yaml`;
        const { newsTypes } = jsYaml.load(fs.readFileSync(i18nPath, "utf-8"));
        // serialzie items
        return newsItems.edges.map(({ node }) => {
          const url =
            node.type === "news"
              ? node.link
              : `${siteUrl}${isDefault ? "" : `/${key}`}${node.link}`;
          const newsType = newsTypes[node.type] || {};
          const prefix = newsType.prefix || newsType.name;
          const prefixedTitle = `${prefix ? `${prefix}: ` : ""}${node.title}`;
          return {
            date: node.date,
            title: prefixedTitle,
            guid: url,
            author: dedupeStrings(node.author, node.source),
            description: (node.parent || {}).excerpt || node.description,
            url,
            custom_elements: [{ rawTitle: node.title }, { type: node.type }],
          };
        });
      },
    })),
});
