import { Popover } from "@headlessui/react";
import React from "react";
import "twin.macro";
import tw from "twin.macro";
import Fader from "./fader";
import PopOverContainer from "./popOverContainer";
import isSSR from "../utils/isSSR";

export default function PopDownMenu({ children, left, cta }) {
  return (
    <Fader show={isSSR || undefined}>
      <Popover.Panel
        static
        css={[
          tw`absolute z-10 mt-3 w-screen max-w-md`,
          left
            ? tw`md:right-0 max-w-sm md:max-w-md`
            : tw`left-1/2 transform -translate-x-1/2`,
          isSSR && tw`hidden group-hover:block pt-3 mt-0`,
        ]}
      >
        <PopOverContainer>
          <div tw="relative grid gap-6 bg-backdrop-light px-5 py-6 sm:gap-8 sm:p-8">
            {children}
          </div>
          {cta}
        </PopOverContainer>
      </Popover.Panel>
    </Fader>
  );
}
