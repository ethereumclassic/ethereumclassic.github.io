import React from "react";
import tw from "twin.macro";

export default function Json({ children, wrap, ...rest }) {
  return (
    <pre
      css={[
        tw`border-2 p-3 max-h-80`,
        wrap ? tw`whitespace-pre-wrap` : tw`overflow-x-scroll`,
      ]}
    >
      {JSON.stringify(children || rest, null, 2)}
    </pre>
  );
}
