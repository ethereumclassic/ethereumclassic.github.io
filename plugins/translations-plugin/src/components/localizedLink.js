import React from "react";
import { Link } from "gatsby";

import { useLocalization } from "./localizationProvider";

// Use the globally available context to choose the right path
export default function LocalizedLink({ to, ...props }) {
  const { locale, isDefaultLocale } = useLocalization();
  const path = isDefaultLocale ? to : `/${locale}${to === `/` ? `` : `${to}`}`;
  return <Link {...props} to={path} />;
}
