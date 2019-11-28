import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import LocaleContext from './localeContext';
import { defaultLocale } from './config';

// TODO only query the relevant data - merge at generation ideally...
// TODO use HOC for global strings

const query = graphql`
  query useTranslations {
    globals: allFile(filter: { fields: { isGlobal: { eq: true } } }) {
      edges {
        node {
          fields {
            locale
            body
          }
        }
      }
    }
  }
`;

function getTranslations(globals, locale) {
  return JSON.parse(globals.edges.find(e => e.node.fields.locale === locale).node.fields.body);
}

function useTranslations() {
  const { locale } = React.useContext(LocaleContext);
  const { globals } = useStaticQuery(query);
  return {
    ...getTranslations(globals, defaultLocale),
    ...getTranslations(globals, locale)
  };
}

export default useTranslations;
