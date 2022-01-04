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
  const [dayJsLoaded, setLoaded] = useState(!dayJsImport);
  if (dayJsImport && dayJsLoaded !== dayJsImport) {
    // TODO find a better way, with React 18?
    // TODO fix this, it is flickering on first render
    import(`dayjs/locale/${dayJsImport}`).then((res) => {
      dayjs.locale(dayJsImport);
      setLoaded(dayJsImport);
    });
  }

  return (
    <LocaleContext.Provider
      value={{
        locale,
        defaultLocale,
        isDefaultLocale,
        basePath,
        globals,
        dayJsImport: dayJsLoaded && dayJsLoaded === dayJsImport,
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
