import React from "react";
import tw from "twin.macro";
import { Popover } from "@headlessui/react";

import Icon from "./icon";
import PopDownMenu from "./popDownMenu";
import LocaleButtons from "./localeButtons";

export default function LocaleSelector() {
  return (
    <Popover.Group tw="flex">
      <Popover tw="relative">
        {({ open }) => (
          <>
            <div tw="flex items-center">
              <Popover.Button
                className="group"
                css={[
                  tw`bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`,
                  open ? tw`text-gray-900` : tw`text-gray-500`,
                ]}
              >
                <Icon
                  icon="globe"
                  css={[
                    tw`h-6 w-6 group-hover:text-gray-500`,
                    open ? tw`text-gray-600` : tw`text-gray-400`,
                  ]}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
            <PopDownMenu
              left
              cta={
                <a
                  href="#"
                  tw="-m-3 p-3 px-5 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                >
                  <Icon
                    icon="coins"
                    tw="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span tw="ml-3">
                    Earn ETC by helping to translate this website!
                  </span>
                </a>
              }
            >
              <LocaleButtons />
            </PopDownMenu>
          </>
        )}
      </Popover>
    </Popover.Group>
  );
}
