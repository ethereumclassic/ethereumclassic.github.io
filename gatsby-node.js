/* eslint-disable import/no-dynamic-require, global-require */
// TODO, comment this for readability
// TODO replace the requires with proper gatsby JSON parsing
// TODO refactor
const path = require('path');
const fs = require('fs');

const { defaultLocale, locales } = require('./src/i18n/config');

function parsePath(str) {
  // get relative path
  const relativePath = str.replace(__dirname, '');
  // .../parentType/slug/name.lang.ext
  const isContent = relativePath.indexOf('/content/') === 0;
  const tree = relativePath.split('/');
  const slug = tree.slice(-2, -1)[0];
  const fileName = tree.slice(-1)[0];
  const [name, ...extFragments] = fileName.split('.');
  let [lang, ext] = extFragments;
  if (!ext) {
    ext = lang;
    lang = null;
  }
  const isGlobal = slug === 'content' && name === 'global';
  // if it's content, get the subcategory
  const hasParent = isContent && tree.length === 5;
  const parent = hasParent ? tree[2] : null;
  // const parentType = str.
  return {
    relativePath,
    hasParent,
    isContent,
    isGlobal,
    fileName,
    slug,
    name,
    lang,
    ext,
    parent
  };
}

function localizedPath(locale, name) {
  const isDefault = locale === defaultLocale;
  let slug = isDefault ? `/${name}/` : `/${locale}/${name}/`;
  if (name === 'index') {
    slug = isDefault ? '/' : `/${locale}/`;
  }
  return slug;
}

function mergeJson(defaults = {}, translation = {}) {
  const result = {
    ...translation
  };
  Object.keys(defaults).forEach(k => {
    result[k] = {
      ...defaults[k],
      ...result[k]
    };
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
exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  // TODO filter out blog posts, parse them elsewhere?
  // Check for "Mdx" type so that other files (e.g. images) are exluded
  if (node.internal.mediaType === 'application/json' || node.internal.type === 'Mdx') {
    // Use path.basename
    const pathName = node.absolutePath || node.fileAbsolutePath;
    const { lang, parent, isGlobal } = parsePath(node.absolutePath || node.fileAbsolutePath);
    // add the following tags to allow easy querying...
    createNodeField({
      node,
      name: 'locale',
      value: lang
    });
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
    }
    // If it's the default language, pass the locale for that
    createNodeField({
      node,
      name: 'isGlobal',
      value: isGlobal
    });
    if (isGlobal) {
      createNodeField({
        node,
        name: 'translations',
        value: require(pathName)
      });
    }
  }
};

// This hook uses the `routes` folder to generate pages
// It uses src/i18n/config to generate a page for each language

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      routes: allFile(filter: { sourceInstanceName: { eq: "routes" } }) {
        edges {
          node {
            absolutePath
          }
        }
      }
      json: allFile(filter: { sourceInstanceName: { eq: "content" }, extension: { eq: "json" } }) {
        edges {
          node {
            absolutePath
          }
        }
      }
      mdx: allMdx(filter: { fileAbsolutePath: { regex: "//content//" } }) {
        edges {
          node {
            absolutePath: fileAbsolutePath
            body
          }
        }
      }
      children: allMdx(filter: { fields: { hasParent: { eq: true } } }) {
        edges {
          node {
            fields {
              locale
              parent
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

  const { routes, json, mdx, children } = result.data;
  // resolve the translations
  const resolvedLocales = {};
  json.edges.concat(mdx.edges).forEach(data => {
    const { absolutePath } = data.node;
    if (!absolutePath) {
      return;
    }
    const { slug, name, ext, lang } = parsePath(absolutePath);
    // return the json itself OR the MDX generated code
    const localeData = ext === 'json' ? require(absolutePath) : data.node.body;
    resolvedLocales[slug] = {
      ...resolvedLocales[slug],
      [lang]: {
        ...(resolvedLocales[slug] || {})[lang],
        [ext]: {
          ...((resolvedLocales[slug] || {})[lang] || {})[ext],
          [name]: localeData
        }
      }
    };
  });

  // generate main routes and inject their translations
  await Promise.all(
    routes.edges.map(async data => {
      const { name, ext } = parsePath(data.node.absolutePath);
      if (ext === 'js') {
        // my translations are here
        const myLocales = resolvedLocales[name] || {};
        // for each of the i18n configs, create a page...
        Object.values(locales).forEach(({ path: locale }) => {
          const i18n = {
            json: mergeJson((myLocales[defaultLocale] || {}).json, (myLocales[locale] || {}).json),
            mdx: {
              ...(myLocales[defaultLocale] || {}).mdx,
              ...(myLocales[locale] || {}).mdx
            }
          };
          const generatedSlug = localizedPath(locale, name);
          createPage({
            path: generatedSlug,
            component: data.node.absolutePath,
            context: {
              locale,
              i18n
            }
          });
        });
      }
    })
  );

  // generate the sub-pages (such as blog)
  const defaultTemplate = require.resolve('./src/layouts/defaultItem.js');
  children.edges.forEach(({ node: post }) => {
    const { locale, parent } = post.fields;
    // TODO use better path
    const slug = post.fileAbsolutePath.split('/').slice(-2, -1)[0];
    const myPath = localizedPath(locale, `${parent}/${slug}`);
    // use this parent template if it exists, otherwise fallback to parent template
    const templatePath = path.resolve(`./src/layouts/${parent}Item.js`);
    const component = fs.existsSync(templatePath) ? require.resolve(templatePath) : defaultTemplate;
    createPage({
      path: myPath,
      component,
      context: {
        locale,
        parent,
        title: post.frontmatter.title
      }
    });
  });
};
