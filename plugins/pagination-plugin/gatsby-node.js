// TODO add option for redirecting correct page based on some index, e.g. creation date

const { camelCase } = require("lodash");

let queried;

exports.createPages = async ({ graphql }, config) => {
  queried = (await graphql(config.query)).data.items.edges.reduce(
    (o, { node }) => {
      return {
        ...o,
        [node.locale]: {
          total: (o[node.locale]?.total ?? 0) + 1,
          ...Object.keys(config.filters).reduce((o2, filter) => {
            const conf = config.filters[filter];
            const matchField = conf.field || filter;
            if (conf.type === "tags") {
              return {
                ...o2,
                [filter]: {
                  ...(o[node.locale] || {})[filter],
                  ...(node[matchField] || []).reduce(
                    (o2, t) => ({
                      ...o2,
                      [t]: (o[node.locale]?.[filter]?.[t] ?? 0) + 1,
                    }),
                    {}
                  ),
                },
              };
            }
            if (conf.type === "category") {
              return {
                ...o2,
                [filter]: {
                  ...(o[node.locale] || {})[filter],
                  [node[matchField]]:
                    (o[node.locale]?.[filter]?.[node[matchField]] ?? 0) + 1,
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
  const pageGroups = [{ path: page.path, items: queried[locale]?.total ?? 0 }];
  const all = {};
  Object.keys(config.filters).forEach((fKey) => {
    const conf = config.filters[fKey];
    const field = conf.field || fKey;
    const fResult = queried[locale]?.[fKey] ?? {};
    const resultKeys = Object.keys(fResult);
    all[camelCase(`all ${fKey}`)] = resultKeys;
    resultKeys.forEach((fItem) => {
      pageGroups.push({
        path: `${page.path}${config.filters[fKey].slug}${fItem}`,
        items: fResult[fItem],
        filter: fItem,
        filterType: fKey,
        field,
      });
    });
  });
  pageGroups.forEach(({ path, items, filterType, filter, field }) => {
    const numPages = Math.floor(items / config.itemsPerPage) + 1;
    const { type } = config.filters[filterType] || {};
    Array.from({ length: numPages }).forEach((_, i) => {
      const currentPage = i + 1;
      const isFirst = currentPage === 1;
      const filterQuery = {
        locale: { eq: locale },
        ...(type === "tags" && { [field]: { in: filter } }),
        ...(type === "category" && { [field]: { eq: filter } }),
      };
      const p = {
        ...page,
        path: isFirst ? path : `${path}/page/${currentPage}`,
        context: {
          ...page.context,
          numPages,
          filterBase: path,
          numItems: items,
          currentPage,
          limit: config.itemsPerPage,
          skip: i * config.itemsPerPage,
          ...all,
          filter,
          filterType,
          filterQuery,
        },
      };
      createPage(p);
    });
  });
};
