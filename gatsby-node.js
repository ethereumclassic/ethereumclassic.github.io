// TODO make path parsing better (in case of absolute contains)

const { defaultLocale, locales } = require(`./src/i18n/config`);

function parsePath(path) {
  return {
    type: path.split('/').slice(-2, -1)[0],
    name: path.split('/').slice(-1)[0].split('.')[0],
    ext: path.split('.').slice(-1)[0],
    lang: path.split('.').slice(-2, -1)[0],
  }
}

function localizedPath(locale, name) {
  const isDefault = locale === defaultLocale;
  let slug = isDefault ? `/${name}/` : `/${locale}/${name}/`
  if (name === 'index') {
    slug = isDefault ? '/' : `/${locale}/`;
  }
  return slug;
}

function mergeJson(english = {}, translation = {}) {
  const result = {
    ...translation
  };
  Object.keys(english).forEach(k => {
    result[k] = {
      ...english[k],
      ...result[k],
    }
  });
  return result;
}

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  // TODO filter out blog posts, parse them elsewhere?
  // Check for "Mdx" type so that other files (e.g. images) are exluded
  if (node.internal.mediaType === 'application/json' || node.internal.type === `Mdx`) {
    // Use path.basename
    const pathName = node.absolutePath || node.fileAbsolutePath;
    const { name, type, lang } = parsePath(node.absolutePath || node.fileAbsolutePath);
    // add the following tags to allow easy querying...
    createNodeField({ node, name: `locale`, value: lang });
    // blog articles are special
    if (type !== 'blog' && pathName.includes('/blog/')) {
      createNodeField({ node, name: `pageType`, value: 'blogPost' });
    } else {
      createNodeField({ node, name: `pageType`, value: type });
    }
    // If it's the default language, pass the locale for that
    const isGlobal = name === 'global';
    createNodeField({ node, name: `isGlobal`, value: isGlobal });
    if (isGlobal) {
      // parse the global json translation strings
      createNodeField({ node, name: 'translations', value: require(pathName) })
    }

  }
};

// This hook uses the `routes` folder to generate pages
// It uses src/i18n/config to generate a page for each language

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      routes: allFile(filter: {sourceInstanceName: {eq: "routes"}}) {
        edges {
          node {
            absolutePath
          }
        }
      }
      json: allFile(filter: {sourceInstanceName: {eq: "content"}, extension: {eq: "json"}}) {
        edges {
          node {
            absolutePath
          }
        }
      }
      mdx: allMdx(filter: {fileAbsolutePath: {regex: "/\\/content\\//"}}) {
        edges {
          node {
            absolutePath: fileAbsolutePath
            code {
              body
            }
          }
        }
      }
    }
  `);

  const resolvedLocales = {}
  const edges = result.data.json.edges.concat(result.data.mdx.edges);
  edges.forEach((data) => {
    const path = data.node.absolutePath;
    if (!path) { return; }
    const { type, name, ext, lang } = parsePath(path);
    // return the json itself OR the MDX generated code
    const resolved = ext === 'json' ? require(path) : data.node.code.body;
    resolvedLocales[type] = {
      ...resolvedLocales[type],
      [lang]: {
        ...(resolvedLocales[type] || {})[lang],
        [ext]: {
          ...((resolvedLocales[type] || {})[lang] || {})[ext],
          [name]: resolved
        }
      }
    }
  });
  // generate the routes and inject their translations
  await Promise.all(result.data.routes.edges.map(async (data) => {
    const path = data.node.absolutePath;
    const { name, ext } = parsePath(path);
    if (ext === 'js' || ext === 'jsx') {
      // my translations are here
      const myLocales = resolvedLocales[name] || {};
      // for each of the i18n configs, create a page...
      Object.values(locales).forEach(({ path: locale }) => {
        // TODOD handle disabled
        const json = mergeJson((myLocales[defaultLocale] || {}).json,
          (myLocales[locale] || {}).json)
        const i18n = {
          json,
          mdx: {
            ...(myLocales[defaultLocale] || {}).mdx,
            ...(myLocales[locale] || {}).mdx
          }
        }

        createPage({
          path: localizedPath(locale, name),
          component: path,
          context: {
            locale,
            i18n
          }
        })
      })
    }
  }));

  // create the blog articles for all languages

  const blogResult = await graphql(`
    {
      blog: allMdx(filter: {
        fields: {
          pageType: {
            eq: "blogPost"
          }
        }
      }) {
        edges {
          node {
            fields {
              locale
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
  const postTemplate = require.resolve(`./src/layouts/post.js`);

  blogResult.data.blog.edges.forEach(({ node: post }) => {
    const slug = post.fileAbsolutePath.split('/').slice(-2, -1)[0];
    const locale = post.fields.locale;
    const path = localizedPath(locale, `blog/${slug}`);
    // console.log("creating path for", path, post.frontmatter.title);
    createPage({
      path,
      component: postTemplate,
      context: {
        locale,
        title: post.frontmatter.title
      }
    });
  });
};
