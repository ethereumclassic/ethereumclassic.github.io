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
    enabled: false,
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
    enabled: false,
    dayJsImport: "ja",
  },
  ko: {
    name: "한국어",
    enabled: false,
  },
  nl: {
    name: "Nederlands",
  },
  ru: {
    name: "русский",
  },
  sa: {
    name: "اَلْعَرَبِيَّةُ",
  },
  th: {
    name: "ภาษาไทย",
  },
  tr: {
    name: "Türk",
  },
  vi: {
    name: "Tiếng Việt",
  },
};

if (dev) {
  locales.aa = { name: "Editor", enabled: true };
}

console.log({ locales });

module.exports = {
  //  only pass default locale if dsabled
  locales: enabled ? locales : { [defaultLocale]: locales[defaultLocale] },
  defaultLocale,
  enabled,
  dev,
};
