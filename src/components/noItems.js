import React from "react";
import tw from "twin.macro";

import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function NoItems() {
  const { ui } = useGlobals();
  return (
    <div tw="p-6 flex col-span-full items-center justify-center text-shade-light space-x-3">
      <div>{ui.noItems}</div>
    </div>
  );
}
