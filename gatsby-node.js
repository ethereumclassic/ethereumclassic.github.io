// PAGINATION
const itemsPerPage = 30;

let filters;

exports.createPages = async ({ graphql }) => {
  const {
    data: {
      items: { nodes }
    }
  } = await graphql(`
    query {
      items: allYamlI18N(
        filter: {
          type: { in: ["collection", "markdown"] }
          parentDirectory: { in: ["blog", "news"] }
        }
        sort: { fields: data___date, order: ASC }
      ) {
        nodes {
          parentDirectory
          data {
            date
            tags
          }
          locale
        }
      }
    }
  `);
  filters = {};
  nodes.forEach(({ parentDirectory, locale, data: { tags, date } }) => {
    filters[locale] = filters[locale] || {};
    filters[locale][parentDirectory] = filters[locale][parentDirectory] || {
      years: {},
      tags: {},
      total: 0
    };
    const branch = filters[locale][parentDirectory];
    branch.total += 1;
    if (date) {
      const year = date.split('-')[0];
      branch.years[year] = branch.years[year] ? branch.years[year] + 1 : 1;
    }
    (tags || []).forEach(tag => {
      branch.tags[tag] = branch.tags[tag] ? branch.tags[tag] + 1 : 1;
    });
  });
};

exports.onCreatePage = async ({ page, actions: { createPage, deletePage } }) => {
  const { relativePath, locale } = page.context;

  if (['blog', 'news', 'news/media'].indexOf(relativePath) === -1) {
    return;
  }
  deletePage(page);
  const tags = {};
  const years = {};
  let total = 0;

  // search for correct parent directory
  ({
    blog: ['blog'],
    news: ['blog', 'news'],
    'news/media': ['news']
  }[relativePath].forEach(p => {
    const match = (filters[locale] || {})[p] || {};
    total += match.total || 0;
    Object.keys(match.years || {}).forEach(k => {
      years[k] = years[k] ? years[k] + match.years[k] : match.years[k];
    });
    Object.keys(match.tags || {}).forEach(k => {
      tags[k] = tags[k] ? tags[k] + match.tags[k] : match.tags[k];
    });
  }));
  const allTags = Object.keys(tags);
  const allYears = Object.keys(years);
  const pageGroups = [{ path: page.path, items: total }];
  const defaultTagQuery = [null, ...allTags];
  allYears.forEach(year => {
    pageGroups.push({
      path: `${page.path}/year/${year}`,
      items: years[year],
      filter: year,
      type: 'year'
    });
  });
  allTags.forEach(tag => {
    pageGroups.push({
      path: `${page.path}/tag/${tag}`,
      items: tags[tag],
      filter: tag,
      type: 'tag',
      tagFilter: [tag]
    });
  });
  pageGroups.forEach(({ path, items, type: filterType, filter, tagFilter }) => {
    const numPages = Math.floor(items / itemsPerPage) + 1;
    Array.from({ length: numPages }).forEach((_, i) => {
      const currentPage = i + 1;
      const isFirst = currentPage === 1;
      const pageData = {
        ...page,
        path: isFirst ? path : `${path}/page/${currentPage}`,
        context: {
          ...page.context,
          numPages,
          filterBase: path,
          numItems: items,
          currentPage,
          limit: itemsPerPage,
          skip: i * itemsPerPage,
          allYears,
          allTags,
          filter,
          filterType,
          yearQuery: filterType === 'year' ? `${filter}-*` : '*',
          tagQuery: tagFilter || defaultTagQuery
        }
      };
      createPage(pageData);
    });
  });
};
