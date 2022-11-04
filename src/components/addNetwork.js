import React from "react";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Link from "./link";

export default function AddNetworkButton() {
  const { ui } = useGlobals();
  return (
    <Link
      iconLeft="link"
      button
      transparent
      to="https://chainlist.org/en/chain/61"
    >
      {ui.metaMask}
    </Link>
  );
}
