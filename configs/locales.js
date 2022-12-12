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
    enabled: false,
    dayJsImport: "de",
  },
  es: {
    name: "Español",
    enabled: true,
    dayJsImport: "es",
  },
  fr: {
    name: "Français",
    enabled: false,
    dayJsImport: "fr",
  },
  el: {
    name: "Ελληνικά",
    enabled: false,
    dayJsImport: "el",
    flag: "gr",
  },
  hi: {
    name: "हिन्दी",
    enabled: false,
    dayJsImport: "hi",
    flag: "in",
  },
  hr: {
    name: "Hrvatski",
    enabled: false,
    dayJsImport: "hr",
  },
  ms: {
    name: "Malay",
    enabled: false,
    dayJsImport: "md",
    flag: "my",
  },
  it: {
    name: "Italiano",
    enabled: false,
    dayJsImport: "it",
  },
  ja: {
    name: "日本語",
    enabled: true,
    dayJsImport: "ja",
  },
  ko: {
    name: "한국어",
    enabled: false,
    dayJsImport: "ko",
  },
  nl: {
    name: "Nederlands",
    enabled: false,
    dayJsImport: "nl",
  },
  ru: {
    name: "русский",
    enabled: false,
    dayJsImport: "ru",
  },
  ar: {
    name: "اَلْعَرَبِيَّةُ",
    enabled: false,
    dayJsImport: "ar",
    flag: "eg",
  },
  th: {
    name: "ภาษาไทย",
    enabled: false,
    dayJsImport: "th",
  },
  tr: {
    name: "Türk",
    enabled: false,
    dayJsImport: "tr",
  },
  vi: {
    name: "Tiếng Việt",
    enabled: false,
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
