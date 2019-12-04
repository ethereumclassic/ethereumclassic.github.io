export function isHash(str) {
  return /^#/.test(str);
}

export function isInternal(str) {
  return /^\/(?!\/)/.test(str);
}

export function getLocaleFromPath({ defaultLocale, locales }, pathname) {
  const potential = pathname.split('/')[1];
  const match = Object.keys(locales).find(locale => locale === potential);
  return match || defaultLocale;
}

function parseResult(result, locale) {
  const edge = result.edges.find(({ node }) => node.fields.locale === locale);
  return JSON.parse(edge.node.fields.body);
}

export function parseGlobals(pathname, result, config) {
  const locale = getLocaleFromPath(config, pathname);
  const fallback = parseResult(result, config.defaultLocale);
  const translation = parseResult(result, locale);
  const homepath = locale === config.defaultLocale ? '/' : `/${locale}`;
  return {
    homepath,
    globals: { ...fallback, ...translation }
  };
}
