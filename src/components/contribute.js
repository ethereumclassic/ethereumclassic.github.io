import React from "react";
import "twin.macro";

import InfoBox from "./infoBox";

import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function Contribute({ i18n, mdx }) {
  const { ui } = useGlobals();
  if (!i18n.contribute && !mdx?.meta?.contribute) {
    return null;
  }
  return (
    <InfoBox icon="contribute" color="primary" text={ui.contribute} markdown />
  );
}
