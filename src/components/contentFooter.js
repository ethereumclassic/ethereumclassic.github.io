import React from "react";
import "twin.macro";

import ContentPrevNext from "./contentPrevNext";
import Contribute from "./contribute";
import Contributors from "./contributors";

export default function ContentFooter({ contributors, mdx, i18n }) {
  return (
    <div tw="mt-16 space-y-10">
      {/* <div tw="border-t border-gray-300" /> */}
      <ContentPrevNext />
      <Contribute {...{ i18n, mdx }} />
      <Contributors contributors={contributors} />
    </div>
  );
}
