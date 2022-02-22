import React, { useContext, useState } from "react";
import dayjs from "dayjs/dayjs.min.js";
import localizedPlugin from "dayjs/plugin/localizedFormat";
import "dayjs/locale/en";

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
  // LODO find a better way, with React 18?
  // LODO fix this, it is flickering on first render
  // const [dayJsLoaded, setLoaded] = useState(!dayJsImport);
  // if (dayJsImport && dayJsLoaded !== dayJsImport) {
  //   import(`dayjs/locale/${dayJsImport}`).then((res) => {
  //     dayjs.locale(dayJsImport);
  //     setLoaded(dayJsImport);
  //   });
  // }

  return (
    <LocaleContext.Provider
      value={{
        locale,
        defaultLocale,
        isDefaultLocale,
        basePath,
        globals,
        dayJsImport: true,
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
