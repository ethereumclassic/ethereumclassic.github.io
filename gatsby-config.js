const siteUrl = "https://etc3022.netlify.app";

const { locales, defaultLocale } = require("./configs/locales");

require("dotenv").config({ path: ".env" });

module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    siteUrl,
    socialImage: "/etc-social-card.png",
    redirects: require("./configs/redirects"),
    algoliaAppId: process.env.ALGOLIA_APP_ID,
    algoliaApiKey: process.env.ALGOLIA_SEARCH_KEY,
    algoliaIndex: process.env.ALGOLIA_MAIN_INDEX,
  },
  plugins: [
    // "gatsby-plugin-perf-budgets",
    // "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#34d399`,
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: require("./configs/sitemap")({ siteUrl }),
    },
    {
      resolve: "gatsby-plugin-algolia",
      options: require("./configs/search"),
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
      resolve: "collections-plugin",
      options: {
        instanceType: "content",
        collectionKey: "collection",
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
        name: "githubImage",
        prepareUrl: (id) => `https://avatars.githubusercontent.com/${id}`,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "VideosCollection",
        imagePath: "youtube",
        name: "videoImage",
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
          tags: { type: "tags", slug: "/tag/" },
          years: { type: "category", field: "year", slug: "/year/" },
        },
        query: `
          query NewsQuery {
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
        itemsPerPage: 10 * 3,
        basePath: "videos",
        filters: {
          tags: { type: "tags", slug: "/" },
        },
        query: `
          query VideosQuery {
            items: allVideosCollection(
              sort: { fields: [date, title], order: [DESC, ASC] }
            ) {
              edges {
                node {
                  locale
                  tags
                  slug
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
        itemsPerPage: 10 * 3,
        basePath: "services/apps",
        filters: {
          type: { type: "category", slug: "/" },
        },
        query: `
          query AppsQuery {
            items: allServicesAppsCollection(
              sort: { fields: [date, title], order: [DESC, ASC] }
            ) {
              edges {
                node {
                  locale
                  type
                  slug
                }
              }
            }
          }
        `,
      },
    },
  ],
};
