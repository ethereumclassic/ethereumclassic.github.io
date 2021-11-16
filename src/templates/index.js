import React from "react";

import GlobalLayout from "../components/globalLayout";
import Landing from "../components/landing";

export default function LayoutLanding(props) {
  return (
    <GlobalLayout {...props}>
      <Landing {...props} />
    </GlobalLayout>
  );
}
