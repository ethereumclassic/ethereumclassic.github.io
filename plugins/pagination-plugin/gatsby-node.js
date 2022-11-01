const { camelCase } = require("lodash");

let queried;

exports.createPages = async ({ graphql }, config) => {
  queried = (await graphql(config.query)).data.items.edges.reduce(
    (o, { node }) => {
      const total = (o[node.locale]?.total ?? 0) + 1;
      return {
        ...o,
        [node.locale]: {
          total,
          slugs:
            node.slug && total % config.itemsPerPage === 0
              ? (o[node.locale]?.slugs || []).concat([node.slug])
              : o[node.locale]?.slugs,
          ...Object.keys(config.filters).reduce((o2, filter) => {
            const conf = config.filters[filter];
            const matchField = conf.field || filter;
            if (conf.type === "tags") {
              return {
                ...o2,
                [filter]: {
                  ...(o[node.locale] || {})[filter],
                  ...(node[matchField] || []).reduce((o2, t) => {
                    const match = o[node.locale]?.[filter]?.[t] ?? {};
                    const count = (match.count || 0) + 1;
                    const slugs =
                      node.slug && count % config.itemsPerPage === 0
                        ? (match.slugs || []).concat([node.slug])
                        : match.slugs;
                    return {
                      ...o2,
                      [t]: { count, slugs },
                    };
                  }, {}),
                },
              };
            }
            if (conf.type === "category") {
              const match = o[node.locale]?.[filter]?.[node[matchField]] ?? {};
              const count = (match.count || 0) + 1;
              const slugs =
                node.slug && count % config.itemsPerPage === 0
                  ? (match.slugs || []).concat([node.slug])
                  : match.slugs;
              return {
                ...o2,
                [filter]: {
                  ...(o[node.locale] || {})[filter],
                  [node[matchField]]: { count, slugs },
                },
              };
            }
            return o;
          }, {}),
        },
      };
    },
    {}
  );
  // if we have an option to populate empty i18n pages, map the empty fields from defualt locale to others
  if (config.emptyi18nPages) {
    const {
      total: _total,
      slugs: _slugs,
      ...defaultPages
    } = queried[config.defaultLocale];
    Object.keys(config.locales)
      .filter(
        (locale) =>
          config.locales[locale].enabled && locale !== config.defaultLocale
      )
      .forEach((locale) => {
        queried[locale] = { total: 0, ...queried[locale] };
        Object.keys(defaultPages).forEach((type) => {
          queried[locale][type] = queried[locale][type] || {};
          Object.keys(queried[config.defaultLocale][type]).forEach((field) => {
            // skip if config specifies fields
            if (
              config.emptyi18nPages !== true &&
              !config.emptyi18nPages[field]
            ) {
              return;
            }
            queried[locale][type][field] = {
              count: 0,
              ...queried[locale][type][field],
            };
          });
        });
      });
  }
};

exports.onCreatePage = async (
  { page, actions: { createPage, deletePage } },
  config
) => {
  const { basePath, locale } = page.context;
  if (basePath !== config.basePath) {
    return;
  }
  deletePage(page);
  const pageGroups = [
    {
      path: page.path,
      filterBase: `/${basePath}`,
      items: queried[locale]?.total ?? 0,
      slugs: queried[locale]?.slugs,
    },
  ];
  const all = {};
  Object.keys(config.filters).forEach((fKey) => {
    const conf = config.filters[fKey];
    const field = conf.field || fKey;
    const fResult = queried[locale]?.[fKey] ?? {};
    const resultKeys = Object.keys(fResult);
    all[camelCase(`all ${fKey}`)] = resultKeys;
    resultKeys.forEach((fItem) => {
      const filterPath = `${config.filters[fKey]?.slug ?? "/"}${fItem}`;
      pageGroups.push({
        path: `${page.path}${filterPath}`,
        filterBase: `/${basePath}${filterPath}`,
        items: fResult[fItem].count,
        slugs: fResult[fItem].slugs,
        filter: fItem,
        filterType: fKey,
        field,
      });
    });
  });
  pageGroups.forEach((group) => {
    const { path, items, filterType, filter, slugs, field, filterBase } = group;
    const numPages = Math.floor(items / config.itemsPerPage) + 1;
    const { type } = config.filters[filterType] || {};
    Array.from({ length: numPages }).forEach((_, i) => {
      const currentPage = i + 1;
      const isFirst = currentPage === 1;
      const filterQuery = {
        locale: { eq: locale },
        ...(type === "tags" && { [field]: { in: filter } }),
        ...(type === "category" && { [field]: { eq: filter } }),
        ...config.globalFilters,
      };
      const p = {
        ...page,
        path: isFirst ? path : `${path}/page/${currentPage}`,
        context: {
          ...page.context,
          numPages,
          filterBase,
          numItems: items,
          currentPage,
          limit: config.itemsPerPage,
          skip: i * config.itemsPerPage,
          ...all,
          filter,
          slugs,
          filterType,
          filterQuery,
          // LODO make this configurable
          featuredFilterQuery: {
            ...filterQuery,
            featured: { eq: true },
          },
        },
      };
      createPage(p);
    });
  });
};
