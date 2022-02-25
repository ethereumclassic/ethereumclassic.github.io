exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type NewsItem implements Node {
      id: String!
      date: Date!
      locale: String!
      author: String!
      source: String
      link: String!
      title: String!
      newsType: String!
    }

    type ServicesAppsCollection implements Node {
      title: String!
      links: [AppLinks]
      author: String
      authorLink: String
      description: String!
      type: String!
      date: Date!
      verifiedContract: String
      openSource: String
      audit: String
      testSuite: String
      ipfsFrontend: String
    }
    
    type AppLinks {
      name: String
      link: String
      icon: String
    }
  `;
  createTypes(typeDefs);
};
