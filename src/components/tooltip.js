import React from "react";
import tw from "twin.macro";

export default function Tooltip({ children }) {
  return (
    <div tw="group-hover:opacity-100 transition-opacity bg-shade-dark px-1 text-sm text-shade-lightest rounded-md absolute left-1/2 -translate-x-1/2 opacity-0 m-3 mx-auto">
      <div tw="whitespace-nowrap">
        {children}
      </div>
    </div>
  );
}
