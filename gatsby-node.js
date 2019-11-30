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

async function processYamlMarkdown(obj) {
  const transformed = {};
  await Promise.all(
    Object.keys(obj).map(async key => {
      const { contents } = await remark()
        .use(markdown, { sanitize: true })
        .use(remark2rehype)
        // strip <p> tags if there's only one line
        .use(() => tree => {
          if (tree.children.length === 1 && tree.children[0].children) {
            // eslint-disable-next-line no-param-reassign
            tree.children = tree.children[0].children;
          }
        })
        .use(html)
        .process(obj[key]);
      transformed[key] = contents;
    })
  );
  return transformed;
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

function localizePath(locale, name) {
  const isDefault = locale === defaultLocale;
  let slug = isDefault ? `/${name}/` : `/${locale}/${name}/`;
  if (name === 'index') {
    slug = isDefault ? '/' : `/${locale}/`;
  }
  return slug;
}

function mergeTranslations(defaults = {}, translation = {}) {
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
  if (node.internal.mediaType === 'text/yaml' || node.internal.type === 'Mdx') {
    // Use path.basename
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

function getGlobals(locale, tree) {
  return {
    ...tree.content[defaultLocale].yaml.globals,
    ...tree.content[locale].yaml.globals
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
            }
          }
        }
      }
      yamlTranslations: allFile(filter: { fields: { translation: { eq: true } } }) {
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

  const { routes, children, mdxTranslations, yamlTranslations } = result.data;

  // create a tree of the translations to be injected into the pages
  const translationsTree = {};
  mdxTranslations.edges.concat(yamlTranslations.edges).forEach(data => {
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
        const routeLocales = translationsTree[name] || {};
        const routeDefaultLocales = routeLocales[defaultLocale] || {};
        // for each of the i18n configs, create a page...
        Object.keys(locales).forEach(locale => {
          // only create pages for enabled locales
          if (!locales[locale]) {
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
            path: localizePath(locale, name),
            component: data.node.absolutePath,
            context: {
              locale,
              globals: getGlobals(locale, translationsTree),
              i18n: {
                ...main,
                yaml,
                mdx: {
                  ...routeDefaultLocales.mdx,
                  ...thisLocale.mdx
                }
              }
            }
          });
        });
      }
    })
  );
  // generate the sub-pages (such as blog)
  children.edges.forEach(({ node: post }) => {
    const { locale, parent } = post.fields;
    // only create pages for enabled locales
    if (!locales[locale]) {
      return;
    }
    // TODO dry out?
    const slug = post.fileAbsolutePath.split('/').slice(-2, -1)[0];
    const myPath = localizePath(locale, `${parent}/${slug}`);
    // use this parent template if it exists, otherwise fallback to parent template
    const templatePath = path.resolve(`./src/layouts/${parent}Item.js`);
    const component = fs.existsSync(templatePath) ? require.resolve(templatePath) : defaultTemplate;
    createPage({
      path: myPath,
      component,
      context: {
        locale,
        globals: getGlobals(locale, translationsTree),
        parent,
        title: post.frontmatter.title
      }
    });
  });
};
