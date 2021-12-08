exports.createPages = async (
  { graphql, actions: { createPage } },
  {
    locales,
    instanceType,
    collectionKey,
    templatesDir,
    defaultLocale,
    noFallbackDirs,
  }
) => {
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
    function sripFileNames(items) {
      return items.map((i) => i.split(".").slice(0, -1).join("."));
    }

    const dirs = [""].concat(dir.split("/"));
    const globals = sripFileNames(
      dirs
        .map((_str, i) => {
          const subFolder = dirs.slice(1, dirs.length - i).join("/");
          return (groupedFiles[subFolder] || []).filter(
            (file) =>
              file.includes(`.global.`) &&
              !file.includes(`.${collectionKey}.`) &&
              file.endsWith(`${locale}.yaml`)
          );
        })
        .reduce((p, n) => p.concat(n), [])
    );
    const locals = sripFileNames(
      (groupedFiles[dir] || []).filter(
        (file) =>
          !file.includes(`.global.`) &&
          !file.includes(`.${collectionKey}.`) &&
          file.endsWith(`${locale}.yaml`)
      )
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
    Object.keys(locales)
      .map((key) => ({ ...locales[key], key }))
      .filter(({ enabled }) => enabled)
      .forEach(({ key: locale, dayJsImport }) => {
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
            dayJsImport,
            noFallback,
            localeImports: !isDefaultLocale && localeImports,
            mdxSlug: localeMdx || defaultLocaleMdx || null,
          },
        });
      });
  });
};

// is onCreatePage done in parralel?
