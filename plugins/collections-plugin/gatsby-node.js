const jsYaml = require(`js-yaml`);
const _ = require(`lodash`);

function urlSafe(str) {
  return encodeURI(_.kebabCase(str.toLocaleLowerCase()));
}

function mergei18n(obj, i18n) {
  if (!i18n) {
    return obj;
  }
  return _.mergeWith(_.cloneDeep(obj), _.cloneDeep(i18n), (a, b) => {
    // ignore undefined fields
    if (obj === undefined) {
      return null;
    }
    // map arrays
    if (_.isArray(a)) {
      return a.map((item) => {
        if (b[item.name]) {
          return { ...item, ...b[item.name] };
        } else {
          return item;
        }
      });
    }
  });
}

exports.onCreateNode = async (
  {
    node,
    actions: { createNode, createParentChildLink },
    loadNodeContent,
    createNodeId,
    createContentDigest,
  },
  { instanceType, collectionKey, locales }
) => {
  // we only care about collection yaml files
  if (
    node.sourceInstanceName !== instanceType ||
    node.internal.mediaType !== `text/yaml` ||
    !(
      node.base.includes(`.${collectionKey}.`) // ||
      // node.relativePath.includes(`/${collectionKey}/`) // TODO
    )
  ) {
    return;
  }

  const content = await loadNodeContent(node);
  const parsedContent = jsYaml.load(content);

  if (!_.isArray(parsedContent)) {
    throw new Error(`Collection incorrectly formatted: ${node.absolutePath}`);
  }

  function createYamlNode({ name = "", id, obj, locale }) {
    // dedupe the name so we don't have VideosVideosCollectionCollection etc.
    const fullName = `${node.relativePath
      .split("/")
      .slice(0, -1)
      .join(" ")} ${name} ${collectionKey}`;

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

    const type = _.upperFirst(_.camelCase(deduped));

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
  }

  const [name, , nodeLocale] = node.name.split(".");
  const mixedLocales = !nodeLocale;

  if (!mixedLocales) {
    // for regular `name.collection.locale`
    parsedContent.forEach((obj, i) => {
      createYamlNode({
        id: createNodeId(`${node.id} [${i}] >>> YAML`),
        locale: nodeLocale,
        name,
        obj,
      });
    });
  } else {
    // for `name.collection`, populate nodes for all locales
    parsedContent.forEach((item, i) => {
      const { i18n = {}, locale: _locale, ...obj } = item;
      Object.keys(locales)
        .map((locale) => ({ ...locales[locale], locale }))
        .filter(({ enabled }) => !!enabled)
        .forEach(({ locale }) => {
          createYamlNode({
            id: createNodeId(`${node.id} [${i}] [${locale}] >>> YAML`),
            obj: mergei18n(obj, i18n[locale]),
            locale,
            name,
          });
        });
    });
  }
};
