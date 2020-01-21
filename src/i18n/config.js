const defaultLocale = 'en';
const locales = {
  en: {
    flag: '🇬🇧',
    name: 'English',
    enabled: true
  },
  zh: {
    flag: '🇨🇳',
    name: '中文',
    enabled: false
  },
  de: {
    flag: '🇩🇪',
    name: 'German',
    enabled: true
  },
  ru: {
    name: 'Russian',
    flag: '🇷🇺',
    enabled: false
  },
  tr: {
    name: 'Turkish',
    flag: '🇹🇷',
    enabled: false
  },
  ko: {
    name: 'Korean',
    flag: '🇰🇷',
    enabled: false
  },
  fr: {
    name: 'French',
    flag: '🇫🇷',
    enabled: false
  },
  el: {
    name: 'Greek',
    flag: '🇬🇷',
    enabled: false
  },
  ja: {
    name: 'Japanese',
    flag: '🇯🇵',
    enabled: false
  },
  es: {
    name: 'Spanish',
    flag: '🇪🇸',
    enabled: false
  },
  vi: {
    name: 'Vietnamese',
    flag: '🇻🇳',
    enabled: false
  }
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
