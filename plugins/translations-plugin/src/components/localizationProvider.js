import React, { useContext } from "react";
import dayjs from "dayjs/dayjs.min.js";
import localizedPlugin from "dayjs/plugin/localizedFormat";

// TODO if the build is too big
// figure out how to do this dynamically but also work with SSR
import "dayjs/locale/en";
import "dayjs/locale/zh";
import "dayjs/locale/ja";
import "dayjs/locale/es";

dayjs.extend(localizedPlugin);

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
  if (dayJsImport !== false) {
    dayjs.locale(dayJsImport || locale);
  }

  return (
    <LocaleContext.Provider
      value={{
        locale,
        defaultLocale,
        isDefaultLocale,
        basePath,
        globals,
        dayjs,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export {
  LocalizationProvider,
  LocaleContext,
  useGlobals,
  useLocalization,
  dayjs,
};
