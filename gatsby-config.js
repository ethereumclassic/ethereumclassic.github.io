require("dotenv").config({ path: ".env" });

const siteUrl = "https://ethereumclassic.org";
const lastUpdated = new Date("2022-02-22"); // passed to sitemap, shows roughtly last time page was updated unless overridden

const { locales, defaultLocale } = require("./configs/locales");

module.exports = {
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    FAST_DEV: true,
    DEV_SSR: false,
    // PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    siteUrl,
    socialImage: "/etc-social-card.png",
    redirects: require("./configs/redirects"),
    lastUpdated,
  },
  plugins: [
    // "gatsby-plugin-perf-budgets",
    // "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-netlify",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-remark-images",
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          "ALGOLIA_APP_ID",
          "ALGOLIA_SEARCH_KEY",
          "ALGOLIA_MAIN_INDEX",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#34d399`,
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: require("./configs/sitemap")({
        siteUrl,
        lastUpdated,
      }),
    },
    {
      resolve: "gatsby-plugin-algolia",
      options: require("./configs/search"),
    },
    {
      resolve: "gatsby-plugin-feed",
      options: require("./configs/rss")({ locales, defaultLocale, siteUrl }),
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "i18n",
        path: "./i18n/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content/",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "remark-rewrite-images",
            options: {
              instanceName: "i18n",
              rewriteTo: "content",
            },
          },
          {
            resolve: "remark-extract-featured-image",
            options: {
              frontmatterKey: "linkImage",
              field: "featuredImage",
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 780,
              showCaptions: true,
              backgroundColor: "white",
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "collections-plugin",
      options: {
        locales,
        defaultLocale,
        instanceType: "content",
        collectionKey: "collection",
      },
    },
    {
      resolve: "translations-plugin",
      options: {
        locales,
        defaultLocale,
        contentType: "content",
        i18nType: "i18n",
        templatesDir: `${process.env.PWD}/src/templates/`,
        collectionKey: "collection",
        noFallbackDirs: ["blog"],
      },
    },
    {
      resolve: "news-plugin",
      options: {
        defaultLocale,
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
        silent: true,
        prepareUrl: (youtube) =>
          `https://img.youtube.com/vi/${youtube}/hqdefault.jpg`,
      },
    },
    {
      resolve: "pagination-plugin",
      options: {
        locales,
        defaultLocale,
        emptyi18nPages: { blog: true },
        itemsPerPage: 16 * 3,
        basePath: "news",
        filters: {
          tags: {
            type: "tags",
            slug: "/tag/",
          },
          years: {
            type: "category",
            field: "year",
            slug: "/year/",
          },
        },
        globalFilters: {
          unlisted: { ne: true },
        },
        query: `
          query NewsQuery {
            items: allNewsItem(
              filter: {
                unlisted: { ne: true }
              }
            ) {
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
        locales,
        defaultLocale,
        emptyi18nPages: true,
        itemsPerPage: 10 * 3,
        basePath: "videos",
        filters: {
          tags: {
            type: "tags",
          },
        },
        globalFilters: {
          unlisted: { ne: true },
        },
        query: `
          query VideosQuery {
            items: allVideosCollection(
              sort: { fields: [date, title], order: [DESC, ASC] }
              filter: {
                unlisted: { ne: true }
              }
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
        defaultLocale,
        itemsPerPage: 10 * 3,
        basePath: "services/apps",
        filters: {
          type: {
            type: "category",
            query: {
              unlisted: { ne: true },
            },
          },
        },
        query: `
          query AppsQuery {
            items: allServicesAppsCollection(
              sort: { fields: [date, title], order: [DESC, ASC] }
              filter: { unlisted: { ne: true } }
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
