import React, { useContext } from "react";

const LocaleContext = React.createContext();

function useLocalization() {
  return useContext(LocaleContext);
}

function useGlobals() {
  return useLocalization()?.globals;
}

function LocalizationProvider({
  children,
  globals,
  pageContext: {
    locale,
    defaultLocale,
    isDefaultLocale,
    basePath,
    dayJsImport,
  },
}) {
  return (
    <LocaleContext.Provider
      value={{
        locale,
        defaultLocale,
        isDefaultLocale,
        basePath,
        globals,
        dayJsImport,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export { LocalizationProvider, LocaleContext, useGlobals, useLocalization };
