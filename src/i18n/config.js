module.exports = {
  defaultLocale: 'en',
  locales: {
    en: {
      path: 'en',
      flag: '🇬🇧',
      name: 'English',
      locale: 'en-US',
      dateFormat: 'DD/MM/YYYY',
      siteLanguage: 'en',
      ogLanguage: 'en_US',
      defaultTitle: 'Using i18n with Gatsby',
      defaultDescription: 'Gatsby example site using MDX and dependency-free i18n'
    },
    de: {
      path: 'de',
      flag: '🇩🇪',
      name: 'Deutsch',
      locale: 'de-DE',
      dateFormat: 'DD.MM.YYYY',
      siteLanguage: 'de',
      ogLanguage: 'de_DE',
      defaultTitle: 'i18n mit Gatsby nutzen',
      defaultDescription: 'Gatsby Beispielseite, die MDX und i18n (frei von dependencies) nutzt'
    },
    cn: {
      path: 'zh',
      flag: '🇨🇳',
      name: 'Chinese',
      locale: 'zh-CN',
      dateFormat: 'DD.MM.YYYY',
      siteLanguage: 'zh',
      ogLanguage: 'zh_CN',
      defaultTitle: '',
      defaultDescription: ''
    }
  }
};
