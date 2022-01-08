import React from "react";
import "twin.macro";

import Content from "./content";

export default function Memes({ pageContext, data, i18n }) {
  return (
    <Content max i18n={{ disclaimer: "verify" }}>
      <div tw="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
        TODO, some may mays
      </div>
    </Content>
  );
}
