import React from "react";

import GlobalLayout from "../components/globalLayout";
import FourOhFour from "../components/fourOhFour";

export default function FourOhFourTemplate(props) {
  return (
    <GlobalLayout {...props}>
      <FourOhFour {...props} />
    </GlobalLayout>
  );
}
