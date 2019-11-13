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
        locale: 'en_US',
        lang: 'en',
        title: 'Ethereum Classic',
        description:
          'A decentralized platform that runs smart contracts: applications that run exactly as programmed without downtime, censorship or third party interference'
      }
    }
    // zh: {
    //   path: 'zh',
    //   flag: '🇨🇳',
    //   name: '中文',
    //   dateFormat: 'DD.MM.YYYY',
    //   siteMetadata: {
    //     locale: 'zh_CN',
    //     lang: 'zh-CN',
    //     title: '以太经典',
    //     description: '以太坊经典区块链' // TODO: translate properly
    //   }
    // }
  }
};
