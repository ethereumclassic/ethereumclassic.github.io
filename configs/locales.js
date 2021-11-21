const defaultLocale = "en";

const locales = {
  en: {
    name: "English",
    enabled: true,
    dayJsImport: "en",
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
  },
  hr: {
    name: "Hrvatski",
  },
  in: {
    name: "हिन्दी",
  },
  ja: {
    name: "日本語",
  },
  ko: {
    name: "한국어",
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
  zh: {
    name: "中文",
  },
};

module.exports = { locales, defaultLocale };
