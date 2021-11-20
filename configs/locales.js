// TODO add config to import date localization modules

const locales = {
  en: {
    name: "English",
    enabled: true,
    default: true,
    dayJsImport: "en",
  },
  de: {
    name: "Deutsch",
    enabled: true,
    dayJsImport: "de",
  },
  es: {
    name: "Español",
    enabled: false,
  },
  fr: {
    name: "Français",
    enabled: false,
  },
  hr: {
    name: "Hrvatski",
    enabled: false,
  },
  in: {
    name: "हिन्दी",
    enabled: false,
  },
  ja: {
    name: "日本語",
    enabled: false,
  },
  ko: {
    name: "한국어",
    enabled: false,
  },
  nl: {
    name: "Nederlands",
    enabled: false,
  },
  ru: {
    name: "русский",
    enabled: false,
  },
  sa: {
    name: "اَلْعَرَبِيَّةُ",
    enabled: false,
  },
  th: {
    name: "ภาษาไทย",
    enabled: false,
  },
  tr: {
    name: "Türk",
    enabled: false,
  },
  vi: {
    name: "Tiếng Việt",
    enabled: false,
  },
  zh: {
    name: "中文",
    enabled: false,
  },
};

locales.list = Object.keys(locales).map((key) => ({ ...locales[key], key }));

module.exports = locales;
