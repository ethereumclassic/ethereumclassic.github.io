// remember to update crowdin config

const enabled = true;
const defaultLocale = "en";
const dev = process.env.GATSBY_I18N_DEV;

const locales = {
  en: {
    name: "English",
    enabled: true,
    dayJsImport: "en",
  },
  zh: {
    name: "中文",
    enabled: true,
    dayJsImport: "zh",
  },
  de: {
    name: "Deutsch",
    enabled: true,
    dayJsImport: "de",
  },
  es: {
    name: "Español",
    enabled: true,
    dayJsImport: "es",
  },
  fr: {
    name: "Français",
    enabled: true,
    dayJsImport: "fr",
  },
  el: {
    name: "Ελληνικά",
    enabled: true,
    dayJsImport: "el",
    flag: "gr",
  },
  hi: {
    name: "हिन्दी",
    enabled: true,
    dayJsImport: "hi",
    flag: "in",
  },
  hr: {
    name: "Hrvatski",
    enabled: true,
    dayJsImport: "hr",
  },
  ml: {
    name: "Malay",
    enabled: true,
    dayJsImport: "ml",
    flag: "my",
  },
  it: {
    name: "Italiano",
    enabled: true,
    dayJsImport: "it",
  },
  ja: {
    name: "日本語",
    enabled: true,
    dayJsImport: "ja",
  },
  ko: {
    name: "한국어",
    enabled: true,
    dayJsImport: "ko",
  },
  nl: {
    name: "Nederlands",
    enabled: true,
    dayJsImport: "nl",
  },
  ru: {
    name: "русский",
    enabled: true,
    dayJsImport: "ru",
  },
  ar: {
    name: "اَلْعَرَبِيَّةُ",
    enabled: true,
    dayJsImport: "ar",
    flag: "eg",
  },
  th: {
    name: "ภาษาไทย",
    enabled: true,
    dayJsImport: "th",
  },
  tr: {
    name: "Türk",
    enabled: true,
    dayJsImport: "tr",
  },
  vi: {
    name: "Tiếng Việt",
    enabled: true,
    dayJsImport: "vi",
  },
};

if (dev) {
  locales.aa = { name: "Editor", editor: true, enabled: true };
}

module.exports = {
  //  only pass default locale if dsabled
  locales: enabled ? locales : { [defaultLocale]: locales[defaultLocale] },
  defaultLocale,
  enabled,
  dev,
};
