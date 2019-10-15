import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import LocaleContext from "../i18n/localeContext";
import { defaultLocale } from "../i18n/config";

function useTranslations() {
  // Grab the locale (passed through context) from the Context Provider
  const { locale } = React.useContext(LocaleContext);
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query);

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.fields.locale,
      translations: item.node.fields.translations
    };
  });
  // merge
  const { translations: d } = simplified.find(lang => lang.name === defaultLocale) || {};
  const { translations: t } = simplified.find(lang => lang.name === locale) || {};
  const translations = { ...d }
  Object.keys(t || {}).forEach(k => {
    if (t[k] !== null) {
      translations[k] = t[k]
    }
  })
  return translations;
}

export default useTranslations;

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: {
      fields: {
        isGlobal: {
          eq: true
        }
      }
    }) {
      edges {
        node {
          fields {
            locale
            translations {
              backToHome
              hello
              subline
            }
          }
        }
      }
    }
  }
`;
