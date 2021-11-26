import { Popover } from "@headlessui/react";
import React from "react";
import "twin.macro";
import tw from "twin.macro";
import Fader from "./fader";
// TODO keep this DRY

export default function PopDownMenu({ children, left, cta }) {
  return (
    <Fader>
      <Popover.Panel
        css={[
          tw`absolute z-10 mt-3 w-screen max-w-md`,
          left
            ? tw`right-0 max-w-sm md:max-w-md`
            : tw`left-1/2 transform -translate-x-1/2`,
        ]}
      >
        <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div tw="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
            {children}
          </div>
          {cta && (
            <div tw="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
              <div tw="flow-root">{cta}</div>
            </div>
          )}
        </div>
      </Popover.Panel>
    </Fader>
  );
}
