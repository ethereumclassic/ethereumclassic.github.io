export function groupItems(items) {
  return items.reduce((o, i) => ({ ...o, [i.type]: (o[i.type] || []).concat([i]) }), {});
}

export function groupTypes(items, iterator) {
  const types = Object.keys(groupItems(items));
  return types.reduce(
    (o, type, i) => ({
      ...o,
      [type]: {
        type,
        i,
        ...(iterator && iterator(type, i, types))
      }
    }),
    {}
  );
}

export function sortBy(key, items) {
  if (!key) {
    return items;
  }
  return items.sort((a, b) => a[key].toLowerCase().localeCompare(b[key].toLowerCase()));
}
