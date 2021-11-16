const instanceType = "content";
const defaultLocale = "en";
const locales = ["en", "de"];
const templatesDir = "../../src/templates/";
const collectionKey = "collection";
const noFallbackDirs = ["blog"];

const jsYaml = require(`js-yaml`);
const _ = require(`lodash`);

// register collections
exports.onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink },
  loadNodeContent,
  createNodeId,
  createContentDigest,
}) => {
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
    const type = _.upperFirst(
      _.camelCase(
        `${node.relativePath
          .split("/")
          .slice(0, -1)
          .join(" ")} ${name} ${collectionKey}`
      )
    );

    const yamlNode = {
      ...obj,
      locale,
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

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      files: { edges: files },
    },
  } = await graphql(`
    query {
      files: allFile(filter: { sourceInstanceName: { eq: "${instanceType}" } }) {
        edges {
          node {
            id
            relativePath
            relativeDirectory
          }
        }
      }
    }
  `);

  // Get all content files, then group by directory
  const groupedFiles = files.reduce(
    (o, { node: { relativeDirectory, relativePath } }) => {
      return {
        ...o,
        [relativeDirectory]: (o[relativeDirectory] || []).concat([
          relativePath,
        ]),
      };
    },
    {}
  );

  function resolveTemplate(dir) {
    let component;
    try {
      // try to resolve page specific template
      component = require.resolve(`${templatesDir}${dir || "index"}.js`);
    } catch (e) {
      // fallback to default
      component = require.resolve(`${templatesDir}default.js`);
    }
    return component;
  }

  function getImports(dir, locale) {
    const dirs = [""].concat(dir.split("/"));
    const globals = dirs
      .map((_str, i) => {
        const subFolder = dirs.slice(0, dirs.length - i).join("/");
        return (groupedFiles[subFolder] || []).filter(
          (file) =>
            file.includes(`.global.`) &&
            !file.includes(`.${collectionKey}.`) &&
            file.endsWith(`${locale}.yaml`)
        );
      })
      .reduce((p, n) => p.concat(n), []);
    const locals = (groupedFiles[dir] || []).filter(
      (file) =>
        !file.includes(`.global.`) &&
        !file.includes(`.${collectionKey}.`) &&
        file.endsWith(`${locale}.yaml`)
    );
    return { locals, globals };
  }

  function getMdx(dir, locale) {
    const mdFile = (groupedFiles[dir] || []).find((file) =>
      file.endsWith(`${locale}.md`)
    );
    // remove `.md` to create a slug for importing
    return mdFile && `${mdFile.split(".").slice(0, -1).join(".")}`;
  }
  // create a page from each directory
  Object.keys(groupedFiles).forEach((dir) => {
    const defaultLocaleImports = getImports(dir, defaultLocale);
    const defaultLocaleMdx = getMdx(dir, defaultLocale);
    // for each locale, create the page
    locales.forEach((locale) => {
      const localeImports = getImports(dir, locale);
      const localeMdx = getMdx(dir, locale);
      const isDefaultLocale = locale === defaultLocale;
      // DO NOT MAKE THE PAGE IF: we are in noFallbackDirs and the local is not translated...
      const isTranslated = localeImports.locals.length > 0 || localeMdx;
      const noFallback = noFallbackDirs.find((fb) => dir.startsWith(`${fb}`));
      if (!isTranslated && noFallback) {
        return;
      }
      createPage({
        path: isDefaultLocale ? `/${dir}` : `/${locale}/${dir}`,
        component: resolveTemplate(dir),
        context: {
          locale,
          basePath: dir,
          isDefaultLocale,
          defaultLocale,
          defaultLocaleImports,
          isTranslated,
          noFallback,
          localeImports: !isDefaultLocale && localeImports,
          mdxSlug: localeMdx || defaultLocaleMdx || null,
        },
      });
    });
  });
};
