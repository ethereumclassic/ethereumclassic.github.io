import React from "react";
import "twin.macro";

export default function PopOverContainer({ children }) {
  return (
    <div tw="bg-backdrop-light shadow-lg rounded-lg overflow-hidden border border-shade-lightest">
      {children}
    </div>
  );
}
