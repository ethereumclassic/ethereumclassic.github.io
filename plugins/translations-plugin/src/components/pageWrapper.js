import React from "react";
import { LocalizationProvider } from "./localizationProvider";

export default function PageWrapper({ element, props }) {
  const { _globals: globals, ...i18n } = props.pageContext.i18n
    ? JSON.parse(props.pageContext.i18n)
    : {};
  return (
    <LocalizationProvider {...props} globals={globals}>
      {React.cloneElement(element, {
        ...props,
        i18n,
      })}
    </LocalizationProvider>
  );
}
