import React from "react";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import InfoBox from "./infoBox";

export default function Disclaimer(props) {
  const {
    ui: {
      disclaimer: { title, text },
    },
  } = useGlobals();
  return <InfoBox {...{ ...props, title, text }} />;
}
