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
  },
  hr: {
    name: "Hrvatski",
  },
  in: {
    name: "हिन्दी",
  },
  ja: {
    name: "日本語",
    enabled: true,
    dayJsImport: "ja",
  },
  ko: {
    name: "한국어",
    enabled: false,
  },
  nl: {
    name: "Nederlands",
    enabled: true,
    dayJsImport: "nl",
  },
  ru: {
    name: "русский",
  },
  sa: {
    name: "اَلْعَرَبِيَّةُ",
  },
  th: {
    name: "ภาษาไทย",
    enabled: true,
  },
  tr: {
    name: "Türk",
  },
  vi: {
    name: "Tiếng Việt",
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
