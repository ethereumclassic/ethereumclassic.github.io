import React from "react";
import "twin.macro";

export default function Json({ children, ...rest }) {
  return (
    <pre tw="max-h-full overflow-x-scroll border-2 p-3">
      {JSON.stringify(children || rest, null, 2)}
    </pre>
  );
}
