import React, { Fragment } from "react";
import "twin.macro";
import { Popover, Transition } from "@headlessui/react";
import tw from "twin.macro";
import { ClassNames } from "@emotion/react";

// TODO keep this DRY

export default function PopDownMenu({ children, left, cta }) {
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
        </Transition>
      )}
    </ClassNames>
  );
}
