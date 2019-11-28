/* eslint-disable import/no-dynamic-require, global-require */
// TODO, comment this for readability
// TODO replace the requires with proper gatsby JSON parsing
// TODO refactor
const path = require('path');
const fs = require('fs');
const jsYaml = require('js-yaml');

const { defaultLocale, locales } = require('./src/i18n/config');

function getJson(absolutePath) {
  // clear cache
  delete require.cache[absolutePath];
  return require(absolutePath);
}

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

// TODO move this into a custom plugin

// custom method to get stuff from content folder and register it
exports.onCreateNode = async ({ node, loadNodeContent, actions: { createNodeField } }) => {
  // Check for "Mdx" type so that other files (e.g. images) are excluded
  if (
    node.internal.mediaType === 'text/yaml' ||
    node.internal.mediaType === 'application/json' ||
    node.internal.type === 'Mdx'
  ) {
    // Use path.basename
    const pathName = node.absolutePath || node.fileAbsolutePath;
    const { slug, lang, parent, name, isGlobal } = parsePath(
      node.absolutePath || node.fileAbsolutePath
    );
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
      value: lang
    });
    // TODO rename this to 'generated'
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

    // TODO refactor this into an i18n plugin
    // load the content for json and yaml files
    if (node.internal.mediaType === 'text/yaml') {
      createNodeField({
        node,
        name: 'ext',
        value: 'yaml'
      });
      createNodeField({
        node,
        name: 'body',
        value: JSON.stringify(jsYaml.load(await loadNodeContent(node)))
      });
    } else if (node.internal.mediaType === 'application/json') {
      createNodeField({
        node,
        name: 'ext',
        value: 'json'
      });
      createNodeField({
        node,
        name: 'body',
        value: JSON.stringify(getJson(pathName))
      });
    } else {
      // for mdx files
      createNodeField({
        node,
        name: 'ext',
        value: 'mdx'
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
            }
          }
        }
      }
      fileTranslations: allFile(filter: { fields: { translation: { eq: true } } }) {
        edges {
          node {
            id
            absolutePath
            fields {
              locale
              ext
              slug
              name
              body
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

  const { routes, children, mdxTranslations, fileTranslations } = result.data;

  // create a tree of the translations to be injected into the pages
  const translationsTree = {};
  mdxTranslations.edges.concat(fileTranslations.edges).forEach(data => {
    const { ext, slug, locale, name, body } = data.node.fields;
    // add to the tree
    translationsTree[slug] = {
      ...translationsTree[slug],
      [locale]: {
        ...(translationsTree[slug] || {})[locale],
        [ext]: {
          ...((translationsTree[slug] || {})[locale] || {})[ext],
          // parse the data if it's not mdx
          [name]: data.node.body || JSON.parse(body)
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
        const myLocales = translationsTree[name] || {};
        // for each of the i18n configs, create a page...
        Object.values(locales).forEach(({ path: locale }) => {
          // only create pages for enabled locales
          if (!locales[locale]) {
            return;
          }
          const i18n = {
            yaml: mergeJson((myLocales[defaultLocale] || {}).yaml, (myLocales[locale] || {}).yaml),
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
              localeMetadata: locales[locale].siteMetadata,
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
    // only create pages for enabled locales
    if (!locales[locale]) {
      return;
    }
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
        parent,
        title: post.frontmatter.title,
        locale,
        localeMetadata: locales[locale].siteMetadata
      }
    });
  });
};
