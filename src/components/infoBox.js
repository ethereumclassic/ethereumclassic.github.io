import React from "react";
import tw from "twin.macro";
import Icon from "./icon";
import Md from "./markdownDynamic";
import Fader from "./fader";
import { Popover } from "@headlessui/react";

const palette = {
  secondary: {
    text: tw`text-secondary-darker`,
    textSecondary: tw`text-secondary-darkest`,
    icon: tw`text-secondary-lighter`,
    iconActive: tw`text-secondary-light`,
    bg: tw`bg-secondary-lightest`,
    bgActive: tw`bg-secondary-lighter`,
  },
  gray: {
    text: tw`text-shade-dark`,
    textSecondary: tw`text-shade-darker`,
    icon: tw`text-shade-lighter`,
    iconActive: tw`text-secondary-light`,
    bg: tw`bg-shade-lightest`,
    bgActive: tw`bg-shade-lightest`,
  },
  primary: {
    text: tw`text-primary-darker`,
    textSecondary: tw`text-primary-darkest`,
    icon: tw`text-primary-lighter`,
    iconActive: tw`text-primary-light`,
    bg: tw`bg-primary-lightest`,
    bgActive: tw`bg-primary-lighter`,
  },
};

function MainBox({
  As = "div",
  icon = "warning",
  open,
  gray,
  textConf,
  bgConf,
  title,
  inline,
  micro,
  text,
  colConf,
  markdown,
  ...rest
}) {
  return (
    <As css={[...bgConf]} {...rest}>
      <div
        css={[
          tw`absolute top-0 right-0 -mr-4 -mt-3 z-0 select-none`,
          (inline || micro) && tw`-mt-1.5 -mr-1.5`,
        ]}
      >
        <Icon
          icon={icon}
          css={[inline || micro ? tw`h-10` : tw`h-20`, colConf.icon]}
        />
      </div>
      <div css={[tw`z-10 relative`]}>
        {title && (
          <div
            css={[
              tw`inline font-medium mr-2 whitespace-nowrap`,
              colConf.textSecondary,
            ]}
          >
            {title}
          </div>
        )}
        {markdown ? (
          <Md css={textConf} styleLinks>
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
  const { gray, type, title, text, color = "gray", ...rest } = props;
  const inline = type === "inline";
  const micro = type === "micro";
  const mini = type === "mini";
  const colConf = palette[color];
  const bgConf = [
    colConf.bg,
    tw`rounded-md relative overflow-hidden shadow-sm leading-snug px-3 py-2 pr-16 text-xs md:text-sm`,
    mini && tw`max-w-xs`,
    (inline || micro) && tw`px-1.5 py-1 pr-10`,
  ];
  const textConf = [
    colConf.text,
    tw`block sm:inline`,
    micro && tw`hidden sm:hidden`,
  ];
  if (!micro) {
    return (
      <MainBox {...{ bgConf, textConf, colConf, inline, micro, ...props }} />
    );
  }
  return (
    <Popover tw="relative z-30" {...rest}>
      {({ open }) => (
        <>
          <MainBox
            As={Popover.Button}
            {...{ bgConf, textConf, colConf, open, inline, micro, ...props }}
          />
          <Fader>
            <Popover.Panel
              css={[
                ...bgConf,
                colConf.bgActive,
                tw`absolute z-10 right-0 top-8 pr-2`,
              ]}
            >
              <p css={[...textConf, tw`inline sm:inline`]}>{text}</p>
            </Popover.Panel>
          </Fader>
        </>
      )}
    </Popover>
  );
}
