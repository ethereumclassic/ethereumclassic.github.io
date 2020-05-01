// TODO languages

const feeds = [
  {
    output: '/rss.xml',
    title: 'Ethereum Classic News',
    description: 'All Blog Articles and News Links from EthereumClassic.org',
    query: `
      type: { in: ["collection", "markdown"] }
      parentDirectory: { in: ["blog", "news"] }
    `
  },
  {
    output: '/rss-blog.xml',
    title: 'Ethereum Classic Blog',
    description: 'All Blog Articles from EthereumClassic.org',
    query: `
      type: { in: ["markdown"] }
      parentDirectory: { in: ["blog"] }
    `
  },
  {
    output: '/rss-links.xml',
    title: 'Ethereum Classic Links',
    description: 'All News Links from EthereumClassic.org',
    query: `
      type: { in: ["collection"] }
      parentDirectory: { in: ["news"] }
    `
  }
];

module.exports = ({ siteUrl, image }) => ({
  query: `
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `,
  feeds: feeds.map(({ title, description, query, output }) => ({
    output,
    title,
    description,
    language: 'en',
    image_url: `${siteUrl}/${image}`,
    site_url: siteUrl,
    generator: 'https://github.com/ethereumclassic/ethereumclassic.github.io',
    serialize: ({ query: { site, items } }) => {
      return items.nodes.map(({ data, excerpt, relativeDirectory }) => {
        return {
          title: data.title,
          date: data.date,
          author: [data.author, data.source].filter(i => i).join(', '),
          categories: data.tags,
          description: excerpt,
          url: data.link || `${site.siteMetadata.siteUrl}/${relativeDirectory}`
        };
      });
    },
    query: `
      {
        items: allYamlI18N(
          filter: {
            locale: { eq: "en" }
            ${query}
          }
          sort: { fields: data___date, order: DESC }
          limit: 30
        ) {
          nodes {
            id
            relativeDirectory
            type
            data {
              link
              tags
              title
              author
              source
              date
            }
            parent {
              ... on Mdx {
                excerpt(pruneLength: 200)
              }
            }
          }
        }
      }
    `
  }))
});
