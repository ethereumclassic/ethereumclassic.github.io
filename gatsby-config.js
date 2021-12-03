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
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#34d399`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
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
              maxWidth: 780,
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
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "VideosVideosCollection",
        imagePath: "youtube",
        prepareUrl: (youtube) =>
          `https://img.youtube.com/vi/${youtube}/hqdefault.jpg`,
      },
    },
    {
      resolve: "pagination-plugin",
      options: {
        itemsPerPage: 16 * 3,
        basePath: "news",
        filters: {
          tags: { type: "tags", slug: "tag" },
          years: { type: "category", field: "year", slug: "year" },
        },
        query: `
          query TagsYearsQuery {
            items: allNewsItem {
              edges {
                node {
                  locale
                  tags
                  year
                }
              }
            }
          }
        `,
      },
    },
    {
      resolve: "pagination-plugin",
      options: {
        itemsPerPage: 8 * 4,
        basePath: "videos",
        filters: {
          tags: { type: "tags", slug: "tag" },
          // years: { type: "category", field: "year", slug: "year" },
        },
        query: `
          query VideosQuery {
            items: allVideosVideosCollection {
              edges {
                node {
                  locale
                  tags
                }
              }
            }
          }
        `,
      },
    },
  ],
};
