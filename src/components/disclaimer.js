import React from "react";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import InfoBox from "./infoBox";

export default function Disclaimer({ text: key = "verify", ...rest }) {
  console.log({ key });
  const {
    ui: { disclaimers },
  } = useGlobals();
  const { title, text } = disclaimers[key];
  return <InfoBox {...{ ...rest, title, text }} />;
}
