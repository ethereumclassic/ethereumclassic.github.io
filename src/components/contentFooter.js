import React from "react";
import "twin.macro";

import ContentPrevNext from "./contentPrevNext";
import ContentSubMenu from "./contentSubmenu";
import Contribute from "./contribute";
import Contributors from "./contributors";

export default function ContentFooter({ contributors, mdx, i18n, current }) {
  const showNext = mdx?.meta.showNext || i18n.showNext || !current?.navItems;
  return (
    <div tw="mt-16 space-y-10">
      {showNext ? (
        <ContentPrevNext />
      ) : (
        <ContentSubMenu items={current.navItems} />
      )}
      <Contribute {...{ i18n, mdx }} />
      <Contributors contributors={contributors} />
    </div>
  );
}
