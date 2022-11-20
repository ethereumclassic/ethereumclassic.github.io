const visit = require("unist-util-visit");
module.exports = (params, { instanceName, rewriteTo }) => {
  const { getNode, markdownAST, markdownNode } = params;
  const parent = getNode(markdownNode.parent);
  if (parent.sourceInstanceName === instanceName) {
    visit(markdownAST, [`image`, `imageReference`], (node) => {
      if (node.url.startsWith("./")) {
        node.url = `${parent.relativePath
          .split("/")
          .map(() => "..")
          .join("/")}/${rewriteTo}/${parent.relativeDirectory}/${node.url.slice(
          2
        )}`;
      }
    });
  }
  return markdownAST;
};
