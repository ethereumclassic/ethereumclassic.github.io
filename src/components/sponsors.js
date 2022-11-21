import React from "react";
import "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

import Link from "./link";

export default function Sponsors() {
  const { ui } = useGlobals();
  return (
    <div tw="text-sm space-y-3">
      <div>
        <Link tw="text-shade-light" to="https://www.netlify.com/">
          {ui.netlify}
        </Link>
      </div>
      <div>
        <Link tw="text-shade-light" to="https://www.crowdin.com/">
          {ui.crowdin}
        </Link>
      </div>
    </div>
  );
}
