/* This Header requires Tailwind CSS v2.0+ */
import React from "react";
import tw from "twin.macro";
import { Popover } from "@headlessui/react";
import Icon from "./icon";
import Fader from "./fader";
import MobileMenuItems from "./mobileMenuItems";

export default function MobileMenu() {
  return (
    <Popover tw="flex items-center md:hidden">
      {({ open }) => (
        <>
          <Popover.Button
            css={[
              tw`bg-backdrop-light rounded-md inline-flex items-center justify-center text-shade-light hover:text-shade-neutral hover:bg-shade-lightest focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-neutral`,
              open && tw`text-shade-dark`,
            ]}
          >
            <span tw="sr-only">Open menu</span>
            <Icon icon="menu" tw="h-5" />
          </Popover.Button>
          <Fader>
            <Popover.Panel
              focus
              tw="absolute p-2 transition transform origin-top-right md:hidden backdrop-blur-xl bottom-0 top-14 right-0 left-0 h-screen"
            >
              <div tw="rounded-lg shadow-lg bg-backdrop-light">
                <MobileMenuItems />
              </div>
            </Popover.Panel>
          </Fader>
        </>
      )}
    </Popover>
  );
}
