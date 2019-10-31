// locale key must be equal to `path`!

module.exports = {
  defaultLocale: 'en',
  locales: {
    en: {
      path: 'en',
      flag: '🇬🇧',
      name: 'English',
      dateFormat: 'DD/MM/YYYY',
      siteMetadata: {
        locale: 'en_GB',
        title: 'Etheruem Classic',
        description: 'Description goes here'
      }
    },
    zh: {
      path: 'zh',
      flag: '🇨🇳',
      name: '中文',
      dateFormat: 'DD.MM.YYYY',
      siteMetadata: {
        locale: 'zh_CN',
        title: '以太经典',
        description: '以太坊经典区块链' // TODO: translate properly
      }
    }
  }
};
