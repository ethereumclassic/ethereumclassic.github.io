import React from "react";
import PageWrapper from "./src/components/pageWrapper";

const wrapPageElement = (props) => {
  return <PageWrapper {...props} />;
};

export { wrapPageElement };
