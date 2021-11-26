import React, { Fragment } from "react";
import "twin.macro";
import { Transition } from "@headlessui/react";
import tw from "twin.macro";
import { ClassNames } from "@emotion/react";

export default function Fader({ children }) {
  return (
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
          {children}
        </Transition>
      )}
    </ClassNames>
  );
}
