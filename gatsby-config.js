module.exports = {
  siteMetadata: {
    // The rest of this is in `i18n/config.js`
    siteUrl: 'https://ethereumclassic.org',
    // image in the 'static' folder
    image: '/etc-social-card.png'
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-layout',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-remove-generator',
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'GTM-T68669F',
        anonymize: true,
        respectDNT: true
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
        // https://github.com/gatsbyjs/gatsby/issues/15486#issuecomment-510153237
        plugins: ['gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              linkImagesToOriginal: true
            }
          },
          {
            resolve: '@hitchcott/gatsby-remark-custom-image-component',
            options: {
              componentName: 'team-image',
              imagePropName: 'src',
              sharpMethod: 'resize',
              width: 256,
              height: 256
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content'
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
        path: `${__dirname}/src/routes`,
        name: 'routes'
      }
    }
  ]
};
