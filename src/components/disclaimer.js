import React from "react";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import InfoBox from "./infoBox";

export default function Disclaimer({ text: key = "verify", link, ...rest }) {
  const {
    ui: { disclaimers, announcement },
  } = useGlobals();
  const { title, text } = disclaimers[key];
  const linkText = announcement?.button?.text;
  return <InfoBox {...{ ...rest, title, text, link, linkText }} />;
}
