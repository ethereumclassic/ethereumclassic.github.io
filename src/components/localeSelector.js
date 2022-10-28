import React from "react";
import tw from "twin.macro";
import { Popover } from "@headlessui/react";

import Icon from "./icon";
import Link from "./link";
import PopDownMenu from "./popDownMenu";
import LocaleButtons from "./localeButtons";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

export default function LocaleSelector({ ...props }) {
  const { ui } = useGlobals();
  return (
    <Popover.Group tw="flex" {...props}>
      <Popover tw="relative" className="group">
        {({ open }) => (
          <>
            <div tw="flex items-center">
              <Popover.Button
                className="group"
                css={[
                  tw`font-medium hover:text-shade-darkest`,
                  open ? tw`text-shade-darkest` : tw`text-shade-neutral`,
                ]}
              >
                <Icon
                  icon="globe"
                  css={[
                    tw`h-5 group-hover:text-shade-neutral`,
                    open ? tw`text-shade-neutral` : tw`text-shade-light`,
                  ]}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
            <PopDownMenu left>
              <LocaleButtons />
              <Link
                to="https://github.com/ethereumclassic/ethereumclassic.github.io#translations"
                tw="-mx-8 -my-8 -mt-0 p-3 flex text-sm text-shade-light bg-shade-lightest hover:bg-shade-lighter hover:text-shade-dark"
              >
                <div tw="flex text-center items-center justify-center mx-auto">
                  <Icon icon="language" tw="h-7 w-7" />
                  <div tw="ml-3">{ui.helpTranslate}</div>
                </div>
              </Link>
            </PopDownMenu>
          </>
        )}
      </Popover>
    </Popover.Group>
  );
}
