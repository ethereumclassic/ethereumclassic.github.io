// check all markdown for "contributor" fields, then upsert the avatar
exports.onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink },
  createNodeId,
  getNode,
  createContentDigest,
}) => {
  if (node.internal.type === `Mdx` && node.frontmatter?.contributors?.length) {
    node.frontmatter.contributors.forEach((githubId) => {
      const avatarUrl = `https://avatars.githubusercontent.com/${githubId}`;
      const contributorNode = {
        githubId,
        avatarUrl,
        id: createNodeId(`${node.id} >>> CONTRIBUTOR ${githubId}`),
        children: [],
        parent: node.id,
        internal: {
          contentDigest: createContentDigest(avatarUrl),
          type: "ContributorAvatar",
        },
      };
      createNode(contributorNode);
      createParentChildLink({ parent: node, child: contributorNode });
    });
  }
};
