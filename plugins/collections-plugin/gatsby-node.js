const jsYaml = require(`js-yaml`);
const _ = require(`lodash`);

function urlSafe(str) {
  return encodeURI(_.kebabCase(str.toLocaleLowerCase()));
}

exports.onCreateNode = async (
  {
    node,
    actions: { createNode, createParentChildLink },
    loadNodeContent,
    createNodeId,
    createContentDigest,
  },
  { instanceType, collectionKey }
) => {
  // we only care about collection yaml files
  if (
    node.sourceInstanceName !== instanceType ||
    node.internal.mediaType !== `text/yaml` ||
    !node.base.includes(`.${collectionKey}.`)
  ) {
    return;
  }

  const content = await loadNodeContent(node);
  const parsedContent = jsYaml.load(content);

  if (!_.isArray(parsedContent)) {
    throw new Error(`Collection is not an array: ${node.absolutePath}`);
  }

  const [name, , locale] = node.name.split(".");

  parsedContent.forEach((obj, i) => {
    const id = createNodeId(`${node.id} [${i}] >>> YAML`);

    // create type name, eg: NewsLinksCollection
    const fullName = `${node.relativePath
      .split("/")
      .slice(0, -1)
      .join(" ")} ${name}`;

    // dedupe the name so we don't have VideosVideosCollection etc.
    const deduped = fullName
      .split(" ")
      .reduce(
        (a, n) =>
          a.includes(n.toLocaleLowerCase())
            ? a
            : a.concat(n.toLocaleLowerCase()),
        []
      )
      .join(" ");
    const type = _.upperFirst(_.camelCase(`${deduped} ${collectionKey}`));

    const yamlNode = {
      ...obj,
      locale,
      slug: `${
        obj.date ? new Date(obj.date).toISOString().split("T")[0] + "-" : ""
      }${urlSafe(obj.title)}`,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type,
      },
    };
    // pass the original ID back
    if (obj.id) {
      yamlNode[`yamlId`] = obj.id;
    }
    createNode(yamlNode);
    createParentChildLink({ parent: node, child: yamlNode });
  });
};
