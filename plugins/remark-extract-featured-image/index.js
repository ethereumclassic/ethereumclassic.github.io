const visit = require("unist-util-visit");

module.exports = (
  { markdownAST, markdownNode, actions: { createNodeField } },
  { frontmatterKey, field }
) => {
  let image = markdownNode.frontmatter?.[frontmatterKey];
  if (!image) {
    visit(markdownAST, [`image`, `imageReference`], (node) => {
      if (!image && node.url.startsWith(".")) {
        image = node.url;
      }
    });
  }
  if (image) {
    createNodeField({
      node: markdownNode,
      name: field,
      value: image,
    });
  }
};
