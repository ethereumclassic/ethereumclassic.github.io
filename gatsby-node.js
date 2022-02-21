// TODO remove this one we have an app that has an audit!

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ServicesAppsCollection implements Node {
      title: String!
      links: [Link]
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
    type Link {
      name: String
      link: String
      icon: String
    }
  `;
  createTypes(typeDefs);
};
