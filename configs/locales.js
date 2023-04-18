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
  ar: {
    name: "اَلْعَرَبِيَّةُ",
    enabled: true,
    dayJsImport: "ar",
    flag: "eg",
    rtl: true, // right to left
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
  el: {
    name: "Ελληνικά",
    enabled: true,
    dayJsImport: "el",
    flag: "gr",
  },
  fr: {
    name: "Français",
    enabled: true,
    dayJsImport: "fr",
  },
  he: {
    name: "עִבְרִית",
    enabled: true,
    dayJsImport: "he",
    flag: "il",
    rtl: true,
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
  ms: {
    name: "Malay",
    enabled: true,
    dayJsImport: "md",
    flag: "my",
  },
  nl: {
    name: "Nederlands",
    enabled: true,
    dayJsImport: "nl",
  },
  pt: {
    name: "Português",
    enabled: true,
    dayJsImport: "pt",
  },
  ru: {
    name: "русский",
    enabled: true,
    dayJsImport: "ru",
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
  "zh-yue": {
    name: "粵語",
    enabled: true,
    flag: "hk",
    dayJsImport: "zh-hk",
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
