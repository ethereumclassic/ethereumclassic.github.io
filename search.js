module.exports = {
  languages: [
    {
      // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
      name: 'en',
      // A function for filtering nodes. () => true by default
      filterNodes: node => {
        const { context: c } = node;
        if (!c || c.locale !== 'en' || !c.i18n || c.numPages) {
          return false;
        }
        return true;
      }
      // Add to index custom entries, that are not actually extracted from gatsby nodes
      // customEntries: [{ title: 'Pictures', content: 'awesome pictures', url: '/pictures' }]
    }
    // {
    //   name: 'fr',
    //   filterNodes: node => node.frontmatter.lang === 'fr'
    // }
  ],
  // Fields to index. If store === true value will be stored in index file.
  // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
  fields: [
    { name: 'title', store: true, attributes: { boost: 20 } },
    { name: 'description', store: true, attributes: { boost: 5 } },
    { name: 'url', store: true }
  ],
  // How to resolve each field's value for a supported node type
  resolvers: {
    SitePage: {
      title: node => node.context && node.context.i18n && node.context.i18n.title,
      description: node => node.context && node.context.i18n && node.context.i18n.description,
      url: node => node.path
    }
  },
  // custom index file name, default is search_index.json
  filename: 'search_index.json'
};
