// TODO add docs and break out into it's own plugin
// Wrap each page with imported translations and add react context

import React from "react";
import { cloneDeep, mergeWith, transform, isObject, isArray } from "lodash";
import { LocalizationProvider } from "./localizationProvider";

function importFiles(fileList) {
  return fileList.reduce((o, file) => {
    const key = file.split("/").pop().split(".")[0];
    // TODO replace with configurable path
    // import and clone the data as we're going to be transforming it
    const data = cloneDeep(require(`../../../../content/${file}`));
    if (key === "index") {
      return { ...o, ...data };
    }
    return { ...o, [key]: data };
  }, {});
}

function importTranslations(imports) {
  if (!imports) {
    return null;
  }
  return {
    globals: importFiles(imports.globals),
    locals: importFiles(imports.locals),
  };
}

function transformTranslations(obj, rootObj = obj) {
  return transform(obj, (result, value, key) => {
    // skip previously nullified fields
    if (value === null) {
      return;
    }
    // remove trailing double underscores, signifying unlocalizable
    let newKey = (`${key}`.startsWith("__") && key.slice(2)) || key;
    let newValue = value;

    // replace `configRef` with parent object of given key
    if (newKey === "configRef") {
      const kF = newValue.split(".");
      // prepend "locals" to search fragments if not globals
      const sF = kF[0] !== "globals" ? ["locals"].concat(kF) : kF;
      const res = transformTranslations(
        sF.reduce((acc, part) => acc && acc[part], rootObj),
        rootObj
      );
      // apply to result
      Object.keys(res).forEach((k) => (result[k] = res[k]));
      return;
    }

    // transform recursively...
    const valIsObj = isObject(newValue);

    if (valIsObj) {
      newValue = transformTranslations(newValue, rootObj);
    }

    if (
      valIsObj &&
      (`${newKey}`.endsWith("Items") ||
        (newKey === "items" && !isArray(newValue)))
    ) {
      newValue = Object.keys(newValue).map((k) => ({
        key: k,
        ...newValue[k],
      }));
    }
    result[newKey] = newValue;
  });
}

function getTranslations(pageContext) {
  // skip pages not controlled by this plugin
  if (!pageContext.defaultLocaleImports) {
    return {};
  }
  // require dayJs localization
  if (pageContext.dayJsImport) {
    require(`dayjs/locale/${pageContext.dayJsImport}`);
  }
  // import and merge
  const merged = mergeWith(
    importTranslations(pageContext.defaultLocaleImports),
    importTranslations(pageContext.localeImports),
    (obj) => {
      // ignore fields where the key does not exist on defaultLocales
      if (obj === undefined) {
        return null;
      }
    }
  );
  // transform merged
  return transformTranslations(merged);
}

export default function PageWrapper({ element, props }) {
  // here we both pass the translations to page data and pass globals to context
  // TODO can we memoize this for better perofrmance?
  const { globals, locals: i18n } = getTranslations(props.pageContext);
  return (
    <LocalizationProvider {...props} globals={globals}>
      {React.cloneElement(element, {
        ...props,
        i18n,
      })}
    </LocalizationProvider>
  );
}
