import React from "react";
import tw from "twin.macro";
import Icon from "./icon";
import Md from "./markdownDynamic";
import Fader from "./fader";
import { Popover } from "@headlessui/react";

const palette = {
  yellow: {
    text: tw`text-yellow-700`,
    textSecondary: tw`text-yellow-800`,
    icon: tw`text-yellow-200`,
    iconActive: tw`text-yellow-300`,
    bg: tw`bg-yellow-50`,
    bgActive: tw`bg-yellow-100`,
  },
  gray: {
    text: tw`text-gray-700`,
    textSecondary: tw`text-gray-800`,
    icon: tw`text-gray-200`,
    iconActive: tw`text-gray-300`,
    bg: tw`bg-gray-50`,
    bgActive: tw`bg-gray-100`,
  },
  green: {
    text: tw`text-green-700`,
    textSecondary: tw`text-green-800`,
    icon: tw`text-green-200`,
    iconActive: tw`text-green-300`,
    bg: tw`bg-green-50`,
    bgActive: tw`bg-green-100`,
  },
};

function MainBox({
  As = "div",
  icon = "warning",
  open,
  inline,
  gray,
  micro,
  textConf,
  bgConf,
  title,
  text,
  colConf,
  markdown,
  ...rest
}) {
  return (
    <As
      css={[...bgConf, open && tw`rounded-b-none`, open && colConf.bgActive]}
      {...rest}
    >
      <div
        css={[
          tw`absolute top-0 right-0 -mr-4 -mt-3 z-0 select-none`,
          inline && tw`-mt-1.5 -mr-1.5`,
        ]}
      >
        <Icon
          icon={icon}
          css={[
            inline ? tw`h-10` : tw`h-20`,
            colConf.icon,
            open && colConf.iconActive,
          ]}
        />
      </div>
      <div css={[tw`z-10 relative`]}>
        {title && (
          <div
            css={[
              tw`text-sm font-medium inline mr-2 whitespace-nowrap`,
              colConf.textSecondary,
            ]}
          >
            {title}
          </div>
        )}
        {markdown ? (
          <Md
            css={textConf}
            linkProps={{ css: [tw`font-bold hover:underline`] }}
          >
            {text}
          </Md>
        ) : (
          <p css={textConf}>{text}</p>
        )}
      </div>
    </As>
  );
}

export default function InfoBox(props) {
  const {
    gray,
    mini,
    inline,
    micro,
    title,
    text,
    color = "yellow",
    ...rest
  } = props;
  const colConf = palette[color];
  const bgConf = [
    colConf.bg,
    tw`rounded-md relative overflow-hidden shadow-sm leading-snug px-3 py-2 pr-16`,
    inline && tw`p-2 pr-10 -mt-0.5`,
    mini && tw`-mt-2 max-w-xs`,
  ];
  const textConf = [colConf.text, tw`text-sm inline`, micro && tw`hidden`];
  if (!micro) {
    return <MainBox {...{ bgConf, textConf, colConf, ...props }} />;
  }
  return (
    <Popover tw="relative z-30" {...rest}>
      {({ open }) => (
        <>
          <MainBox
            As={Popover.Button}
            {...{ bgConf, textConf, colConf, open, ...props }}
          />
          <Fader>
            <Popover.Panel
              css={[
                ...bgConf,
                colConf.bgActive,
                tw`absolute z-10 right-0 top-9 pt-0 rounded-tr-none pr-2`,
              ]}
            >
              <p css={[...textConf, tw`inline`]}>{text}</p>
            </Popover.Panel>
          </Fader>
        </>
      )}
    </Popover>
  );
}
