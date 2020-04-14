// TODO refactor this & turn into a plugin
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const jsYaml = require('js-yaml');
const merge = require('deepmerge');

const { defaultLocale, locales } = require('./src/i18n/config');

const defaultTemplate = require.resolve('./src/layouts/defaultItem.js');

const rootContent = '/';

function isDefaultLocale(locale) {
  return locale === defaultLocale;
}

function localizePath(locale, name) {
  const isDefault = isDefaultLocale(locale);
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
  const fileNameFragments = fileName.split('.');
  let name;
  let isObject;
  let locale;
  let ext;
  if (fileNameFragments[1] === 'objects') {
    [name, , locale, ext] = fileNameFragments;
    isObject = true;
  } else {
    [name, locale, ext] = fileNameFragments;
  }
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
  const info = {
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
    parent,
    isObject
  };
  return info;
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
exports.onCreateNode = async ({
  node,
  loadNodeContent,
  actions: { createNode, createNodeField }
}) => {
  // Check for "Mdx" type so that other files (e.g. images) are excluded
  if (node.internal.mediaType === 'text/yaml' || node.internal.type === 'Mdx') {
    // TODO refactor this bigtime....
    // Use path.basename
    const { slug, locale, parent, name, isGlobal, localSlug, i18nKey, isObject } = parsePath(
      node.absolutePath || node.fileAbsolutePath
    );
    // ignore locales that are not enabled
    if (!locales[locale] || !locales[locale].enabled) {
      return;
    }
    // handle `item.object.locale.yaml` files
    if (isObject) {
      const parsedYaml = jsYaml.load(await loadNodeContent(node));
      parsedYaml.forEach((item, index) => {
        const content = JSON.stringify(item);
        const { date, tags } = item;
        const nodeData = {
          content,
          index,
          date,
          tags,
          locale,
          name,
          route: i18nKey,
          id: `CustomObject-${locale}-${name}-${index}`,
          isObject: true,
          internal: {
            type: 'CustomObject',
            contentDigest: crypto
              .createHash('md5')
              .update(content)
              .digest('hex')
          }
        };
        createNode(nodeData);
      });
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
      const parsedYaml = jsYaml.load(await loadNodeContent(node));
      createNodeField({
        node,
        name: 'body',
        value: JSON.stringify(parsedYaml)
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
    menu: merged.menu && merged.menu.map((n, i) => ({ ...n, i, selected: name === n.key })),
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
      mdxPages: allMdx(filter: { fields: { hasParent: { eq: true } } }) {
        edges {
          node {
            id
            excerpt
            fileAbsolutePath
            parent {
              ... on File {
                relativeDirectory
              }
            }
            fields {
              locale
              parent
              i18nKey
              localSlug
              slug
              name
            }
            frontmatter {
              title
              description
              author
              tags
              date
            }
          }
        }
      }
      objects: allCustomObject {
        edges {
          node {
            id
            content
            tags
            route
            locale
          }
        }
      }
    }
  `);

  const { routes, mdxPages, mdxTranslations, yamlTranslations, objects } = result.data;

  const paginationTree = {};
  objects.edges.forEach(({ node: obj }) => {
    const parent = paginationTree[obj.route] || {};
    paginationTree[obj.route] = {
      ...parent,
      [obj.locale]: {
        ...parent[obj.locale],
        [obj.id]: {
          ...JSON.parse(obj.content),
          isObject: true,
          key: obj.id
        }
      }
    };
  });
  mdxPages.edges.forEach(({ node: mdx }) => {
    const parent = paginationTree[mdx.fields.parent] || {};
    paginationTree[mdx.fields.parent] = {
      ...parent,
      [mdx.fields.locale]: {
        ...parent[mdx.fields.locale],
        [mdx.fields.slug]: {
          key: mdx.fields.slug,
          isMdx: true,
          excerpt: mdx.excerpt,
          title: mdx.frontmatter.title,
          link: mdx.parent.relativeDirectory,
          date: mdx.frontmatter.date,
          tags: mdx.frontmatter.tags,
          author: mdx.frontmatter.author
        }
      }
    };
  });
  // just for `/news/`, let's merge `media` and `blog`
  paginationTree.news = merge(paginationTree.blog, paginationTree['news/media']);
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
        // TODO pagination....
        // objects.edges;
        // create the page
        const pageData = {
          path: localizePath(locale, i18nKey),
          component: data.node.absolutePath,
          context: {
            locale,
            defaultLocale: isDefaultLocale(locale),
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
        };
        // if this page should not be paginated..
        if (['blog', 'news', 'news/media'].indexOf(i18nKey) === -1) {
          createPage(pageData);
          return;
        }
        const myItems = Object.values(paginationTree[i18nKey][locale] || {}).sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        // if there is no content to paginate
        if (myItems.length === 0) {
          createPage(pageData);
          return;
        }
        // create categories
        const tags = {};
        const years = {};
        myItems.forEach(item => {
          (item.tags || []).forEach(tag => {
            tags[tag] = (tags[tag] || []).concat([item]);
          });
          if (item.date) {
            const year = new Date(item.date).getUTCFullYear();
            years[year] = (years[year] || []).concat([item]);
          }
        });
        const itemsPerPage = 25;

        const basePath = pageData.path;

        const filters = [
          // all items
          { filterPath: basePath, items: myItems, type: 'all' }
        ];
        Object.keys(tags).forEach(t =>
          filters.push({
            filterPath: `${basePath}tag/${t}/`,
            items: tags[t],
            type: 'filter',
            filter: t
          })
        );
        Object.keys(years).forEach(t =>
          filters.push({
            filterPath: `${basePath}year/${t}/`,
            items: years[t],
            type: 'year',
            filter: t
          })
        );
        filters.forEach(({ filterPath, items: paginationItems, type, filter }) => {
          // option to show all ?
          const pages = Math.floor(paginationItems.length / itemsPerPage) + 1;
          [...Array(pages).keys()].forEach(i => {
            const page = i + 1;
            const firstPage = page === 1;
            const thisPath = firstPage ? filterPath : `${filterPath}page/${page}/`;
            const items = paginationItems.slice(i * itemsPerPage, page * itemsPerPage);
            const paginatedPageData = {
              ...pageData,
              path: thisPath,
              firstPage,
              context: {
                ...pageData.context,
                pagination: {
                  items,
                  tags: Object.keys(tags),
                  years: Object.keys(years),
                  page,
                  type,
                  filter,
                  firstPage: filterPath,
                  basePath,
                  pages,
                  itemsPerPage,
                  total: paginationItems.length
                }
              }
            };
            createPage(paginatedPageData);
          });
        });
      });
    })
  );
  // generated sub-pages (markdown files like blog)
  mdxPages.edges.forEach(({ node: post }) => {
    const { locale, parent, localSlug, slug } = post.fields;
    // use this parent template if it exists, otherwise fallback to parent template
    const templatePath = path.resolve(`./src/layouts/${parent}Item.js`);
    const component = fs.existsSync(templatePath) ? require.resolve(templatePath) : defaultTemplate;
    createPage({
      path: localSlug,
      component,
      context: {
        locale,
        defaultLocale: isDefaultLocale(locale),
        i18n: {
          ...getChildLocales(slug, locale, parent, translationsTree),
          ...post.frontmatter
        },
        globals: getGlobals(locale, translationsTree),
        title: post.frontmatter.title,
        parent
      }
    });
  });
};
