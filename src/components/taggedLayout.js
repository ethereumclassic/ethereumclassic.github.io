import React from "react";
import "twin.macro";
import GlobalLayout from "./globalLayout";
import TaggedContent from "./taggedContent";

export default function TaggedLayout({ children, field = "tags", ..._props }) {
  const { pageContext, i18n } = _props;
  const filter = pageContext.filter && i18n[field][pageContext.filter];
  const content = filter || i18n;
  content.disclaimer = true;
  const props = {
    ..._props,
    i18n: { ..._props.i18n, ...content },
  };
  return (
    <GlobalLayout {...props}>
      <TaggedContent {...props}>{children}</TaggedContent>
    </GlobalLayout>
  );
}
