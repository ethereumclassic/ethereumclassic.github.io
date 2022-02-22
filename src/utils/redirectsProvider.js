import { graphql, useStaticQuery } from "gatsby";
import React, { createContext, useContext } from "react";

const RedirectsContext = createContext();

function useRedirects() {
  return useContext(RedirectsContext);
}

// redcursively matches redirects
function useRedirectedUrl(url) {
  const redirects = useRedirects();
  function redirect(candidate) {
    const match = redirects[candidate];
    return !match | (candidate === match) ? candidate : redirect(match);
  }
  return redirect(url);
}

function RedirectsProvider({ children }) {
  const data = useStaticQuery(graphql`
    query Redirects {
      site {
        siteMetadata {
          redirects
        }
      }
    }
  `);

  const redirects = JSON.parse(data.site.siteMetadata.redirects);

  return (
    <RedirectsContext.Provider value={redirects}>
      {children}
    </RedirectsContext.Provider>
  );
}

export { RedirectsProvider, RedirectsContext, useRedirectedUrl, useRedirects };
