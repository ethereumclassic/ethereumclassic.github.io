const fs = require("fs");
const yaml = require("js-yaml");
const {
  cloneDeep,
  mergeWith,
  transform,
  isObject,
  isArray,
} = require("lodash");

const cache = {
  files: {},
};

function importFiles(fileList = []) {
  return fileList.reduce((o, file) => {
    const key = file.split("/").pop().split(".")[0];
    // LODO replace with configurable path
    const loc = `${process.env.PWD}/content/${file}`;
    const cached = cache.files[loc];
    const data = cached || yaml.load(fs.readFileSync(loc, "utf-8"));
    if (!cached && data) {
      cache.files[loc] = data;
    }
    if (key === "index") {
      return { ...o, ...data };
    }
    return { ...o, [key]: data };
  }, {});
}

function importTranslations(imports) {
  if (!imports) {
    return null;
  }
  return {
    globals: importFiles(imports.globals),
    locals: importFiles(imports.locals),
  };
}

function transformTranslations(obj, rootObj = obj) {
  return transform(obj, (result, value, key) => {
    // skip previously nullified fields
    if (value === null) {
      return;
    }
    // remove trailing double underscores, signifying unlocalizable
    let newKey = (`${key}`.startsWith("__") && key.slice(2)) || key;
    let newValue = value;

    // replace `configRef` with parent object of given key
    if (newKey === "configRef") {
      const kF = newValue.split(".");
      // prepend "locals" to search fragments if not globals
      const sF = kF[0] !== "globals" ? ["locals"].concat(kF) : kF;
      const res = transformTranslations(
        sF.reduce((acc, part) => acc && acc[part], rootObj),
        rootObj
      );
      // apply to result
      Object.keys(res).forEach((k) => (result[k] = res[k]));
      return;
    }

    // transform recursively...
    const valIsObj = !(newValue instanceof Date) && isObject(newValue);

    if (valIsObj) {
      newValue = transformTranslations(newValue, rootObj);
    }

    if (
      valIsObj &&
      (`${newKey}`.endsWith("Items") ||
        (newKey === "items" && !isArray(newValue)))
    ) {
      newValue = Object.keys(newValue).map((k) => ({
        key: k,
        ...newValue[k],
      }));
    }
    result[newKey] = newValue;
  });
}

function getTranslations({ defaultLocaleImports, localeImports }) {
  // import and merge
  const merged = mergeWith(
    cloneDeep(importTranslations(defaultLocaleImports)),
    cloneDeep(importTranslations(localeImports)),
    (obj) => {
      // ignore fields where the key does not exist on defaultLocales
      if (obj === undefined) {
        return null;
      }
    }
  );
  // transform merged
  const { globals: _globals, locals } = transformTranslations(merged);
  return { ...locals, _globals };
}

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
  cache.files = {}; // reinit cache each time
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
      // skip collection directories TODO; translations
      if (relativePath.includes(`/${collectionKey}/`)) {
        return o;
      }
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

  function matchFile({ file, locale, global, ext }) {
    //quickly filter out some obvious things for performance
    if (!file.endsWith(`.${ext}`)) {
      return false;
    }
    const isGlobal = file.includes(`.global.`);
    if ((!global && isGlobal) || (global && !isGlobal)) {
      return false;
    }
    const fileName = file.split("/").pop();
    const [name] = fileName.split(".");
    // do exact pattrern matches to weed out `collection` or other extensions / misplaced files
    if (locale === defaultLocale) {
      if (
        fileName !== `${name}.${ext}` &&
        fileName !== `${name}.global.${ext}` &&
        fileName !== `${name}.${locale}.${ext}` &&
        fileName !== `${name}.global.${locale}.${ext}`
      ) {
        return false;
      }
    } else if (
      fileName !== `${name}.${locale}.${ext}` &&
      fileName !== `${name}.global.${locale}.${ext}`
    ) {
      return false;
    }
    return file;
  }

  function getImports(dir, locale) {
    const dirs = [""].concat(dir.split("/"));
    return {
      locals: (groupedFiles[dir] || []).filter((file) =>
        matchFile({ file, locale, ext: "yaml" })
      ),
      globals: dirs
        .map((_str, i) => {
          const subFolder = dirs.slice(1, dirs.length - i).join("/");
          return (groupedFiles[subFolder] || []).filter((file) =>
            matchFile({ file, locale, global: true, ext: "yaml" })
          );
        })
        .reduce((p, n) => p.concat(n), []),
    };
  }

  function getMdx(dir, locale) {
    const mdFile = (groupedFiles[dir] || []).find((file) =>
      matchFile({ file, locale, ext: "md" })
    );
    // transform path to gatsby-queriable slug
    if (mdFile) {
      if (mdFile.endsWith("/index.md")) {
        return `${mdFile.split("/").slice(0, -1).join("/")}/`;
      } else {
        return `${mdFile.split(".").slice(0, -1).join(".")}`;
      }
    }
    return null;
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
        const isTranslated = localeImports.locals?.length > 0 || localeMdx;
        const noFallback = noFallbackDirs.find((fb) => dir.startsWith(`${fb}`));
        if (!isTranslated && noFallback) {
          return;
        }
        const p = {
          path: isDefaultLocale ? `/${dir}` : `/${locale}/${dir}`,
          component: resolveTemplate(dir),
          context: {
            locale,
            basePath: dir,
            isDefaultLocale,
            defaultLocale,
            dayJsImport,
            noFallback,
            mdxSlug: localeMdx || defaultLocaleMdx || null,
            // stringify to prevent generating mad schemas
            i18n: JSON.stringify(
              getTranslations({ localeImports, defaultLocaleImports })
            ),
          },
        };
        createPage(p);
      });
  });
};
