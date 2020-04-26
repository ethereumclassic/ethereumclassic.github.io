const siteUrl = 'https://ethereumclassic.org';
const image = '/etc-social-card.png';

module.exports = {
  siteMetadata: {
    siteUrl,
    image
  },
  plugins: [
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-layout',
    // 'gatsby-plugin-sharp',
    // 'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    // 'gatsby-plugin-sitemap',
    // 'gatsby-plugin-remove-generator',
    // 'gatsby-plugin-netlify',
    // {
    //   resolve: 'gatsby-plugin-netlify-cache',
    //   options: {
    //     cachePublic: true
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-favicon',
    //   options: {
    //     logo: './src/assets/favicon.png'
    //   }
    // },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md']
        //     gatsbyRemarkPlugins: [
        //       {
        //         resolve: 'gatsby-remark-copy-linked-files'
        //       },
        //       {
        //         resolve: 'gatsby-remark-images',
        //         options: {
        //           maxWidth: 900,
        //           linkImagesToOriginal: true
        //         }
        //       }
        //     ]
      }
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/assets/images`,
    //     name: 'images'
    //   }
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'yaml-i18n-content'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/templates`,
        name: 'yaml-i18n-templates'
      }
    },
    {
      resolve: 'gatsby-plugin-yaml-i18n',
      options: {
        // defaultLocale: 'en', // optional, defaults to first locale
        locales: ['en', 'de'], // required
        // generateMissing: ['section'] // optional, defaults to false
        generateMissing: true
        // generateMissing: ['.md', '.yaml']
      }
    }
    // {
    //   resolve: 'gatsby-plugin-feed',
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         output: '/rss.xml',
    //         title: 'Ethereum Classic Blog',
    //         language: 'en',
    //         image_url: `${siteUrl}/${image}`,
    //         site_url: siteUrl,
    //         generator: 'https://github.com/ethereumclassic/ethereumclassic.github.io',
    //         description: 'Blog Articles from EthereumClassic.org',
    //         serialize: ({ query: { site, allMdx } }) => {
    //           return allMdx.edges.map(edge => {
    //             return {
    //               ...edge.node.frontmatter,
    //               description: edge.node.excerpt,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.localSlug
    //             };
    //           });
    //         },
    //         query: `
    //           {
    //             allMdx(
    //               filter: { fields: { locale: { eq: "en" }, parent: { eq: "blog" } } }
    //               sort: { fields: [frontmatter___date], order: DESC }
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt
    //                   frontmatter {
    //                     title
    //                     date
    //                     author
    //                   }
    //                   fields {
    //                     localSlug
    //                   }
    //                   parent {
    //                     ... on File {
    //                       relativeDirectory
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `
    //       }
    //     ]
    //   }
    // }
  ]
};
