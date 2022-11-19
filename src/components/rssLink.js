import React from "react";
import "twin.macro";
import { useLocalization } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Link from "./link";

export default function RssLink({ children, ...props }) {
  const { locale, isDefaultLocale } = useLocalization();
  return (
    <Link
      {...props}
      notLocalized
      to={isDefaultLocale ? "/rss.xml" : `/rss-${locale}.xml`}
    >
      {children}
    </Link>
  );
}
