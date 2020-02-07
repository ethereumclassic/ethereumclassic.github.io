// TODO refactor this & turn into a plugin

const path = require('path');
const fs = require('fs');
const jsYaml = require('js-yaml');
const remark = require('remark');
const markdown = require('remark-parse');
const remark2rehype = require('remark-rehype');
const html = require('rehype-stringify');

const { defaultLocale, locales } = require('./src/i18n/config');

const defaultTemplate = require.resolve('./src/layouts/defaultItem.js');

const rootContent = '/';

async function processYamlMarkdown(obj) {
  // handle arrays
  if (Array.isArray(obj)) {
    return Promise.all(obj.map(processYamlMarkdown));
  }
  const transformed = {};
  await Promise.all(
    Object.keys(obj).map(async key => {
      const { contents } = await remark()
        .use(markdown, { sanitize: true })
        .use(remark2rehype)
        // strip <p> and <a> tags if there's only one line (use `>` to bring back)
        .use(() => tree => {
          if (tree.children.length === 1 && tree.children[0].children) {
            // eslint-disable-next-line no-param-reassign
            tree.children = tree.children[0].children;
            if (tree.children[0].tagName && tree.children[0].tagName === 'a') {
              // eslint-disable-next-line no-param-reassign
              tree.children = tree.children[0].children;
            }
          }
        })
        .use(html)
        .process(obj[key]);
      transformed[key] = contents;
    })
  );
  return transformed;
}

function localizePath(locale, name) {
  const isDefault = locale === defaultLocale;
  let slug = isDefault ? `/${name}/` : `/${locale}/${name}/`;
  if (name === 'index') {
    slug = isDefault ? '/' : `/${locale}/`;
  }
  return slug;
}

function parsePath(str) {
  const relativePath = str.replace(__dirname, '');
  const fullTree = relativePath.split('/');
  const isContent = fullTree[1] === 'content';
  const tree = fullTree.slice(isContent ? 2 : 3);
  const fileName = tree[tree.length - 1];
  const [name, locale, ext] = fileName.split('.');
  tree[tree.length - 1] = name;
  const slug = tree[tree.length - 2];
  // this is a route, no need to parse much more
  const hasParent = tree.length >= 2;
  const parent = hasParent && tree[0];

  if (!isContent) {
    return { name, hasParent, parent, i18nKey: tree.join('/') };
  }
  // this is a content item...
  const i18nKey = tree.slice(0, -1).join('/') || rootContent;
  const isGlobal = tree[0] === 'globals';
  const localSlug = localizePath(locale, i18nKey);
  return {
    i18nKey,
    localSlug,
    relativePath,
    hasParent,
    isContent,
    isGlobal,
    fileName,
    slug,
    name,
    locale,
    ext,
    parent
  };
}

function mergeTranslations(defaults = {}, translation = {}) {
  const result = {
    ...translation
  };
  Object.keys(defaults).forEach(k => {
    // handle arrays
    if (Array.isArray(defaults[k])) {
      const mapping = {};
      const mappedResults = (result[k] || []).map(r => ({ ...r, _localized: true }));
      defaults[k].concat(mappedResults).forEach(item => {
        if (item.key === undefined) {
          throw new Error('Array items must have unqiue `key` fields', item);
        }
        mapping[item.key] = {
          ...mapping[item.key],
          ...item
        };
      }, []);
      result[k] = Object.keys(mapping).map(key => mapping[key]);
    } else {
      // merge objects
      result[k] = {
        ...defaults[k],
        ...result[k]
      };
    }
  });
  return result;
}

// https://github.com/ChristopherBiscardi/gatsby-mdx/issues/176
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, 'src/components')
      }
    }
  });
};

// custom method to get stuff from content folder and register it
exports.onCreateNode = async ({ node, loadNodeContent, actions: { createNodeField } }) => {
  // Check for "Mdx" type so that other files (e.g. images) are excluded
  if (node.internal.mediaType === 'text/yaml' || node.internal.type === 'Mdx') {
    // Use path.basename
    const { slug, locale, parent, name, isGlobal, localSlug, i18nKey } = parsePath(
      node.absolutePath || node.fileAbsolutePath
    );
    // ignore locales that are not enabled
    if (!locales[locale] || !locales[locale].enabled) {
      return;
    }

    // add the following tags to allow easy querying later on...
    createNodeField({
      node,
      name: 'isGlobal',
      value: isGlobal
    });
    createNodeField({
      node,
      name: 'translation',
      value: true
    });
    createNodeField({
      node,
      name: 'name',
      value: name
    });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
    createNodeField({
      node,
      name: 'locale',
      value: locale
    });
    createNodeField({
      node,
      name: 'i18nKey',
      value: i18nKey
    });
    // TODO rename hasParent this to 'generated'
    // add the special tag for blog articles etc.
    createNodeField({
      node,
      name: 'hasParent',
      value: !!parent
    });
    if (parent) {
      createNodeField({
        node,
        name: 'parent',
        value: parent
      });
      createNodeField({
        node,
        name: 'localSlug',
        value: localSlug
      });
    }
    if (node.internal.mediaType === 'text/yaml') {
      createNodeField({
        node,
        name: 'ext',
        value: 'yaml'
      });
      createNodeField({
        node,
        name: 'body',
        value: JSON.stringify(await processYamlMarkdown(jsYaml.load(await loadNodeContent(node))))
      });
    } else {
      // for md(x) files
      createNodeField({
        node,
        name: 'ext',
        value: 'mdx'
      });
    }
  }
};

function getChildLocales(name, locale, parent, tree) {
  if (!parent) {
    return {};
  }
  const parentLocales = tree[parent] || {};
  const myLocale = parentLocales[locale] || {};
  const defaultLocales = parentLocales[defaultLocale] || {};
  const merged = mergeTranslations(defaultLocales.yaml, myLocale.yaml);
  return {
    menu: merged.menu,
    globals: merged.globals,
    [name]: merged[name]
  };
}

function getGlobals(locale, tree) {
  const myLocale = tree[rootContent][locale] || { yaml: { globals: {} } };
  return {
    ...tree[rootContent][defaultLocale].yaml.globals,
    ...myLocale.yaml.globals
  };
}

// This hook uses the `routes` folder to generate pages
// It uses src/i18n/config to generate a page for each language
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  // query all the nodes we need for generating translations
  const result = await graphql(`
    {
      routes: allFile(filter: { sourceInstanceName: { eq: "routes" } }) {
        edges {
          node {
            absolutePath
          }
        }
      }
      mdxTranslations: allMdx(filter: { fields: { translation: { eq: true } } }) {
        edges {
          node {
            absolutePath: fileAbsolutePath
            body
            fields {
              locale
              slug
              ext
              name
              i18nKey
            }
          }
        }
      }
      yamlTranslations: allFile(filter: { fields: { translation: { eq: true } } }) {
        edges {
          node {
            absolutePath
            fields {
              locale
              ext
              slug
              name
              body
              i18nKey
            }
          }
        }
      }
      children: allMdx(filter: { fields: { hasParent: { eq: true } } }) {
        edges {
          node {
            fields {
              locale
              parent
              i18nKey
              localSlug
              name
            }
            fileAbsolutePath
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const { routes, children, mdxTranslations, yamlTranslations } = result.data;

  // create a tree of the translations to be injected into the pages
  const translationsTree = {};
  mdxTranslations.edges.concat(yamlTranslations.edges).forEach(data => {
    const { ext, name, locale, i18nKey, body } = data.node.fields;
    // add to the tree
    translationsTree[i18nKey] = {
      ...translationsTree[i18nKey],
      [locale]: {
        ...(translationsTree[i18nKey] || {})[locale],
        [ext]: {
          ...((translationsTree[i18nKey] || {})[locale] || {})[ext],
          // parse the data if it's not mdx
          [name]: data.node.body || JSON.parse(body)
        }
      }
    };
  });

  // generate main routes and inject their translations
  await Promise.all(
    routes.edges.map(async data => {
      const { i18nKey, name, parent } = parsePath(data.node.absolutePath);
      const routeLocales = translationsTree[i18nKey] || {};
      const routeDefaultLocales = routeLocales[defaultLocale] || {};
      // for each of the i18n configs, create a page...
      Object.keys(locales).forEach(locale => {
        // only create pages for enabled locales
        if (!locales[locale].enabled) {
          return;
        }
        const thisLocale = routeLocales[locale] || {};
        const yaml = mergeTranslations(routeDefaultLocales.yaml, thisLocale.yaml);
        // move translations with the same key into the main i18n object
        const main = yaml[name];
        // remove them from the child yaml object
        delete yaml[name];
        // create the page
        createPage({
          path: localizePath(locale, i18nKey),
          component: data.node.absolutePath,
          context: {
            locale,
            globals: getGlobals(locale, translationsTree),
            i18n: {
              ...main,
              ...getChildLocales(name, locale, parent, translationsTree),
              yaml,
              mdx: {
                ...routeDefaultLocales.mdx,
                ...thisLocale.mdx
              }
            }
          }
        });
      });
    })
  );
  // generated sub-pages (markdown files like blog)
  children.edges.forEach(({ node: post }) => {
    const { name, locale, parent, localSlug } = post.fields;
    // use this parent template if it exists, otherwise fallback to parent template
    const templatePath = path.resolve(`./src/layouts/${parent}Item.js`);
    const component = fs.existsSync(templatePath) ? require.resolve(templatePath) : defaultTemplate;
    createPage({
      path: localSlug,
      component,
      context: {
        locale,
        i18n: getChildLocales(name, locale, parent, translationsTree),
        globals: getGlobals(locale, translationsTree),
        parent,
        title: post.frontmatter.title
      }
    });
  });
};
