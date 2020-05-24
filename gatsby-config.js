const siteUrl = 'https://ethereumclassic.org';
const image = '/etc-social-card.png';

const rssFeeds = require('./rss-feeds')({ siteUrl, image });

module.exports = {
  siteMetadata: {
    siteUrl,
    image
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-remove-generator',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/LayoutGlobal')
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files'
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              linkImagesToOriginal: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images'
      }
    },
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
        locales: ['en', 'ja'],
        generateMissing: ['development', 'ecosystem', 'knowledge']
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: rssFeeds
    }
  ]
};
