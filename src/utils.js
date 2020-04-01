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

export function pad(num, width, z = '0') {
  const n = `${num}`;
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function formatDate(date, fmt) {
  const dt = new Date(date);
  let format = fmt;
  format = format.replace('ss', pad(dt.getSeconds(), 2));
  format = format.replace('s', dt.getSeconds());
  format = format.replace('DD', pad(dt.getDate(), 2));
  format = format.replace('D', dt.getDate());
  format = format.replace('mm', pad(dt.getMinutes(), 2));
  format = format.replace('m', dt.getMinutes());
  format = format.replace('MM', pad(dt.getMonth() + 1, 2));
  format = format.replace(/M(?![ao])/, dt.getMonth() + 1);
  format = format.replace('yyyy', dt.getFullYear());
  format = format.replace('YYYY', dt.getFullYear());
  format = format.replace('yy', `${dt.getFullYear()}`.substring(2));
  format = format.replace('YY', `${dt.getFullYear()}`.substring(2));
  format = format.replace('HH', pad(dt.getHours(), 2));
  format = format.replace('H', dt.getHours());
  return format;
}
