const queries = [
  {
    query: `
    {
      items: allNewsItem(filter: {newsType: {eq: "news"}}) {
        edges {
          node {
            id
            link
            author
            date
            description
            locale
            source
            title
          }
        }
      }    
    }`,
    transformer: ({ data }) => {
      return data.items.edges.map(({ node }) => node);
    },
    indexName: "newsLinks",
  },
  {
    query: `
    {
      items: allNewsItem(filter: {newsType: {eq: "application"}}) {
        edges {
          node {
            id
            link
            author
            date
            description
            locale
            source
            title
          }
        }
      }    
    }`,
    transformer: ({ data }) => {
      return data.items.edges.map(({ node }) => node);
    },
    indexName: "applications",
  },
  {
    query: `
    {
      items: allNewsItem(filter: {newsType: {eq: "video"}}) {
        edges {
          node {
            id
            link
            author
            date
            description
            locale
            source
            title
          }
        }
      }    
    }`,
    transformer: ({ data }) => {
      return data.items.edges.map(({ node }) => node);
    },
    indexName: "videos",
  },
];

module.exports = {
  // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
  appId: process.env.ALGOLIA_APP_ID,
  // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
  // Tip: use Search API key with GATSBY_ prefix to access the service from within components
  apiKey: process.env.ALGOLIA_ADMIN_KEY,
  queries,
  // chunkSize: 10000, // default: 1000
  settings: {
    // optional, any index settings
    // Note: by supplying settings, you will overwrite all existing settings on the index
  },
  // enablePartialUpdates: true, // default: false
  // matchFields: ["slug", "modified"], // Array<String> default: ['modified']
  concurrentQueries: false, // default: true
  skipIndexing: !process.env.ALGOLIA_ADMIN_KEY, // default: false, useful for e.g. preview deploys or local development
  continueOnFailure: false, // default: false, don't fail the build if algolia indexing fails
};
