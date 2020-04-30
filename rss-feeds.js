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
  feeds: [
    {
      output: '/rss.xml',
      title: 'Ethereum Classic Blog',
      language: 'en',
      image_url: `${siteUrl}/${image}`,
      site_url: siteUrl,
      generator: 'https://github.com/ethereumclassic/ethereumclassic.github.io',
      description: 'Blog Articles from EthereumClassic.org',
      serialize: ({ query: { site, allMdx } }) => {
        return allMdx.edges.map(edge => {
          return {
            ...edge.node.frontmatter,
            description: edge.node.excerpt,
            date: edge.node.frontmatter.date,
            url: site.siteMetadata.siteUrl + edge.node.fields.localSlug
          };
        });
      },
      query: `
        {
          allMdx(
            filter: { fields: { locale: { eq: "en" }, parent: { eq: "blog" } } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                excerpt
                frontmatter {
                  title
                  date
                  author
                }
                fields {
                  localSlug
                }
                parent {
                  ... on File {
                    relativeDirectory
                  }
                }
              }
            }
          }
        }
      `
    }
  ]
});
