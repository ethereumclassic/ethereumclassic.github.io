// TODO refactor useLocales into this plugin to map them once, and include dev...

import React, { useContext } from "react";
import dayjs from "dayjs/dayjs.min.js";
import localizedPlugin from "dayjs/plugin/localizedFormat";

import { dev } from "../../../../configs/locales";

// TODO if the build is too big
// figure out how to do this dynamically but also work with SSR
import "dayjs/locale/en";
import "dayjs/locale/zh";
import "dayjs/locale/de";
import "dayjs/locale/es";
import "dayjs/locale/fr";
import "dayjs/locale/hr";
import "dayjs/locale/hi";
import "dayjs/locale/ja";
import "dayjs/locale/ko";
import "dayjs/locale/nl";
import "dayjs/locale/ru";
import "dayjs/locale/ar";
import "dayjs/locale/th";
import "dayjs/locale/tr";
import "dayjs/locale/vi";
import "dayjs/locale/ml";
import "dayjs/locale/it";
import "dayjs/locale/el";

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
        dev,
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
