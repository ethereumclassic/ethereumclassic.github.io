// This script sets up the news items

// PAGINATION
const rowsPerPage = 16;
const itemsPerPage = rowsPerPage * 3;

// combine blog and newslinks into single queriable NewsItem type

// TODO move these to their own plugins for readability and reusability

exports.onCreateNode = async ({
  node,
  actions: { createNode, createParentChildLink },
  createNodeId,
  getNode,
  createContentDigest,
}) => {
  // if (node.internal.type === `Mdx`) {
  //   console.log("lets check for images", node);
  // }
  if (
    !(
      node.internal.type === `NewsLinksCollection` ||
      node.internal.type === `Mdx`
    )
  ) {
    return;
  }
  if (
    node.internal.type === `Mdx` &&
    !node.fileAbsolutePath.includes("/content/blog/")
  ) {
    return;
  }

  function createNewsItem(obj) {
    const newsItem = {
      ...obj,
      id: createNodeId(`${node.id} >>> NEWS ITEM`),
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type: "NewsItem",
      },
    };
    if (obj.date) {
      newsItem.date = new Date(obj.date); // normalize the date
      newsItem.year = newsItem.date.getUTCFullYear(); // for easy filtering
    }
    createNode(newsItem);
    createParentChildLink({ parent: node, child: newsItem });
  }

  if (node.internal.type === `Mdx`) {
    const parentNode = getNode(node.parent);
    createNewsItem({
      ...node.frontmatter,
      locale: parentNode.absolutePath.split(".").slice(-2)[0],
      blog: true,
      link: `/${parentNode.relativeDirectory}`,
      tags: ["blog"].concat(node.frontmatter?.tags || []),
    });
  } else {
    createNewsItem({ ...node, blog: false });
  }
};

let filters;

exports.createPages = async ({ graphql }) => {
  const {
    data: {
      items: { edges },
    },
  } = await graphql(`
    query TagsYearsQuery {
      items: allNewsItem {
        edges {
          node {
            locale
            tags
            date(formatString: "YYYY")
          }
        }
      }
    }
  `);
  filters = edges.reduce((o, { node: { locale, tags, date } }) => {
    return {
      ...o,
      [locale]: {
        total: (o[locale]?.total ?? 0) + 1,
        years: {
          ...(o[locale] || {}).years,
          [date]: (o[locale]?.years?.[date] ?? 0) + 1,
        },
        tags: {
          ...(o[locale] || {}).tags,
          ...(tags || []).reduce(
            (o2, t) => ({ ...o2, [t]: (o[locale]?.tags?.[t] ?? 0) + 1 }),
            {}
          ),
        },
      },
    };
  }, {});
};

exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage },
}) => {
  const { basePath, locale } = page.context;
  if (basePath !== "news") {
    return;
  }
  deletePage(page);
  const { years, tags, total } = filters[locale];
  const allTags = Object.keys(tags);
  const allYears = Object.keys(years);
  const pageGroups = [{ path: page.path, items: total }];
  allYears.forEach((year) => {
    pageGroups.push({
      path: `${page.path}/year/${year}`,
      items: years[year],
      yearFilter: parseInt(year, 10),
      type: "year",
    });
  });
  allTags.forEach((tag) => {
    pageGroups.push({
      path: `${page.path}/tag/${tag}`,
      items: tags[tag],
      tagFilter: tag,
      type: "tag",
    });
  });
  pageGroups.forEach(
    ({ path, items, type: filterType, tagFilter, yearFilter }) => {
      const numPages = Math.floor(items / itemsPerPage) + 1;
      Array.from({ length: numPages }).forEach((_, i) => {
        const currentPage = i + 1;
        const isFirst = currentPage === 1;
        const filterQuery = {
          locale: { eq: locale },
          ...(tagFilter && { tags: { in: tagFilter } }),
          ...(yearFilter && { year: { eq: yearFilter } }),
        };
        createPage({
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
            filter: tagFilter || yearFilter,
            filterType,
            filterQuery,
          },
        });
      });
    }
  );
};
