import React from "react";
import tw from "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Icon from "./icon";

export default function Disclaimer({ inline, gray, ...rest }) {
  const {
    ui: {
      disclaimer: { title, text },
    },
  } = useGlobals();
  return (
    <div
      css={[
        tw`rounded-md relative overflow-hidden shadow-sm`,
        gray ? tw`bg-gray-50` : tw`bg-yellow-50`,
        inline ? tw`p-2 pr-10 -mt-0.5` : tw`p-3 -mt-2 pr-14 max-w-xs`,
      ]}
      {...rest}
    >
      <div
        css={[
          tw`absolute top-0 right-0 -mr-3 -mt-4 z-0 select-none`,
          inline && tw`-mt-1.5 -mr-1.5`,
        ]}
      >
        <Icon
          icon="warning"
          css={[
            inline ? tw`h-10` : tw`h-20`,
            gray ? tw`text-gray-200` : tw`text-yellow-200`,
          ]}
        />
      </div>
      <div css={[tw`z-10 relative`]}>
        <div
          css={[
            tw`text-sm font-medium inline mr-2`,
            gray ? tw`text-gray-800` : tw`text-yellow-800`,
          ]}
        >
          {title}
        </div>
        <p
          css={[
            tw`text-sm inline`,
            gray ? tw`text-gray-700` : tw`text-yellow-700`,
          ]}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
