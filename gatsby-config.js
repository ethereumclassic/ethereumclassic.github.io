module.exports = {
  plugins: [
    'gatsby-plugin-layout',
    'gatsby-mdx',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
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
