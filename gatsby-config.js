const siteUrl = "https://etc3022.netlify.app";

const { locales, defaultLocale } = require("./configs/locales");
const redirects = require("./configs/redirects");

module.exports = {
  siteMetadata: {
    siteUrl,
    socialImage: "/etc-social-card.png",
    redirects,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: require("./configs/sitemap")({ siteUrl }),
    },
    // TODO FIXME
    // {
    //   resolve: "gatsby-plugin-feed",
    //   options: require("./configs/rss")({ locales, siteUrl }),
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content/",
      },
      __key: "content",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
            },
          },
        ],
      },
    },
    {
      resolve: "translations-plugin",
      options: {
        locales,
        defaultLocale,
        instanceType: "content",
        templatesDir: `${process.env.PWD}/src/templates/`,
        collectionKey: "collection",
        noFallbackDirs: ["blog"],
      },
    },
    {
      resolve: "news-plugin",
      options: {
        // TODO
      },
    },
    {
      resolve: "contributor-avatars-plugin",
      options: {
        instanceType: "content",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "ContributorAvatar",
        imagePath: "githubId",
        prepareUrl: (id) => `https://avatars.githubusercontent.com/${id}`,
      },
    },
  ],
};
