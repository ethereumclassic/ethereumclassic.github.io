const defaultLocale = 'en';
const locales = {
  en: { flag: '🇬🇧', enabled: true },
  zh: { flag: '🇨🇳', enabled: false },
  de: { flag: '🇩🇪', enabled: true },
  ru: { flag: '🇷🇺', enabled: false },
  tr: { flag: '🇹🇷', enabled: false },
  ko: { flag: '🇰🇷', enabled: false },
  fr: { flag: '🇫🇷', enabled: false },
  el: { flag: '🇬🇷', enabled: false },
  ja: { flag: '🇯🇵', enabled: false },
  es: { flag: '🇪🇸', enabled: false },
  vi: { flag: '🇻🇳', enabled: false }
};

if (process.env.SHOW_ALL_LOCALES) {
  Object.keys(locales).forEach(key => {
    locales[key].enabled = true;
  });
}

module.exports = {
  defaultLocale,
  locales
};
