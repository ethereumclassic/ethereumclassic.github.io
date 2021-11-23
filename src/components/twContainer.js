import React from "react";
import tw from "twin.macro";

export default function TwContainer({ children, grid, ...rest }) {
  return (
    <div
      css={[
        tw`max-w-3xl mx-auto px-2 sm:px-4 md:max-w-7xl lg:px-8`,
        grid && tw`grid grid-cols-12 gap-6 lg:gap-10`,
      ]}
      {...rest}
    >
      {children}
    </div>
  );
}
