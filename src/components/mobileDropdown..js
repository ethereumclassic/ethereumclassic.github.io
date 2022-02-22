/* This Header requires Tailwind CSS v2.0+ */
import React from "react";
import tw from "twin.macro";
import { Popover } from "@headlessui/react";
import Icon from "./icon";
import Fader from "./fader";
import isSSR from "../utils/isSSR";

export default function MobileDropdown({ icon = "menu", children }) {
  return (
    <Popover tw="flex items-center" className="group">
      {({ open }) => (
        <>
          <Popover.Button
            css={[
              tw`rounded-md inline-flex items-center justify-center text-shade-light hover:text-shade-neutral hover:bg-shade-lightest`,
              open && tw`text-shade-dark`,
            ]}
          >
            <span tw="sr-only">Open menu</span>
            <Icon icon={icon} tw="h-5" />
          </Popover.Button>
          <Fader show={isSSR || undefined}>
            <Popover.Panel
              focus
              css={[
                tw`absolute p-2 transition transform origin-top-right backdrop-blur-xl bottom-0 top-14 right-0 left-0 h-screen`,
                isSSR && tw`pointer-events-none hidden group-hover:block`,
              ]}
            >
              <div css={[isSSR && tw`pointer-events-auto pt-8 -mt-8`]}>
                <div tw="rounded-lg shadow-lg bg-backdrop-light">
                  {children}
                </div>
              </div>
            </Popover.Panel>
          </Fader>
        </>
      )}
    </Popover>
  );
}
