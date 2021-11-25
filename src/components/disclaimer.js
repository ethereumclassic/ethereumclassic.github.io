import { ClassNames } from "@emotion/react";
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";
import Icon from "./icon";

function MainDisclaimer({
  As = "div",
  open,
  inline,
  gray,
  textConf,
  bgConf,
  title,
  text,
  ...rest
}) {
  return (
    <As css={[...bgConf, open && tw`rounded-b-none bg-yellow-100`]} {...rest}>
      <div
        css={[
          tw`absolute top-0 right-0 -mr-4 -mt-3 z-0 select-none`,
          inline && tw`-mt-1.5 -mr-1.5`,
        ]}
      >
        <Icon
          icon="warning"
          css={[
            inline ? tw`h-10` : tw`h-20`,
            gray ? tw`text-gray-200` : tw`text-yellow-200`,
            open && tw`text-yellow-300`,
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
        <p css={textConf}>{text}</p>
      </div>
    </As>
  );
}

export default function Disclaimer(props) {
  const {
    ui: {
      disclaimer: { title, text },
    },
  } = useGlobals();
  const { gray, inline, mini, ...rest } = props;
  const bgConf = [
    tw`rounded-md relative overflow-hidden shadow-sm leading-snug`,
    gray ? tw`bg-gray-50` : tw`bg-yellow-50`,
    inline ? tw`p-2 pr-10 -mt-0.5` : tw`px-3 py-2 -mt-2 pr-14 max-w-xs`,
  ];
  const textConf = [
    tw`text-sm inline`,
    gray ? tw`text-gray-700` : tw`text-yellow-700`,
    mini && tw`hidden`,
  ];
  if (!mini) {
    return <MainDisclaimer {...{ bgConf, title, text, textConf, ...props }} />;
  }
  return (
    <Popover tw="relative" {...rest}>
      {({ open }) => (
        <>
          <MainDisclaimer
            As={Popover.Button}
            {...{ bgConf, title, text, textConf, open, ...props }}
          />
          <ClassNames>
            {({ css }) => (
              <Transition
                as={Fragment}
                enter={css(tw`transition ease-out duration-200`)}
                enterFrom={css(tw`opacity-0 translate-y-1`)}
                enterTo={css(tw`opacity-100 translate-y-0`)}
                leave={css(tw`transition ease-in duration-150`)}
                leaveFrom={css(tw`opacity-100 translate-y-0`)}
                leaveTo={css(tw`opacity-0 translate-y-1`)}
              >
                <Popover.Panel
                  css={[
                    ...bgConf,
                    tw`absolute z-10 right-0 top-9 pt-0 rounded-tr-none bg-yellow-100 pr-2`,
                  ]}
                >
                  <p css={[...textConf, tw`inline`]}>{text}</p>
                </Popover.Panel>
              </Transition>
            )}
          </ClassNames>
        </>
      )}
    </Popover>
  );
}
