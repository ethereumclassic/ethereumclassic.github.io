function groupItems(items) {
  return items.reduce(
    (o, i) => ({ ...o, [i.type]: (o[i.type] || []).concat([i]) }),
    {}
  );
}

function groupTypes(items, iterator) {
  const types = Object.keys(groupItems(items));
  return types.reduce(
    (o, type, i) => ({
      ...o,
      [type]: {
        type,
        i,
        ...(iterator && iterator(type, i, types)),
      },
    }),
    {}
  );
}

function sortBy(key, items) {
  if (!key) {
    return items;
  }
  return items.sort((a, b) =>
    `${a[key]}`.toLowerCase().localeCompare(`${b[key]}`.toLowerCase())
  );
}

function filterAndSortItems(items, { filter, sort }) {
  const filtered = filter ? items.filter((i) => i[filter]) : items;
  const sorted = sort ? sortBy(sort, filtered) : filtered;
  return sorted;
}

function pad(num, width, z = "0") {
  const n = `${num}`;
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function formatDate(date, fmt) {
  const dt = new Date(date);
  let format = fmt;
  format = format.replace("ss", pad(dt.getSeconds(), 2));
  format = format.replace("s", dt.getSeconds());
  format = format.replace("DD", pad(dt.getDate(), 2));
  format = format.replace("D", dt.getDate());
  format = format.replace("mm", pad(dt.getMinutes(), 2));
  format = format.replace("m", dt.getMinutes());
  format = format.replace("MM", pad(dt.getMonth() + 1, 2));
  format = format.replace(/M(?![ao])/, dt.getMonth() + 1);
  format = format.replace("yyyy", dt.getFullYear());
  format = format.replace("YYYY", dt.getFullYear());
  format = format.replace("yy", `${dt.getFullYear()}`.substring(2));
  format = format.replace("YY", `${dt.getFullYear()}`.substring(2));
  format = format.replace("HH", pad(dt.getHours(), 2));
  format = format.replace("H", dt.getHours());
  return format;
}

function getDescendantProp(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

// links up content items
function resolveRefs(_obj, refs) {
  const { configRef, itemsRef, ...obj } = _obj;
  if (configRef) {
    const ref = getDescendantProp(refs, configRef);
    return resolveRefs({ ...ref, ...obj }, refs);
  }
  if (itemsRef) {
    const { items } = getDescendantProp(refs, itemsRef);
    return { ...obj, items };
  }
  return obj;
}

function dedupeStrings(author = "", source = "", joiner = ", ") {
  return author === source
    ? author
    : [author, source].filter((i) => i).join(joiner);
}

module.exports = {
  groupItems,
  groupTypes,
  sortBy,
  filterAndSortItems,
  pad,
  formatDate,
  resolveRefs,
  dedupeStrings,
};
