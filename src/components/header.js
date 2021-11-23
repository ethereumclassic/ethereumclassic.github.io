/* This Header requires Tailwind CSS v2.0+ */
import React from "react";
import "twin.macro";
import { Popover } from "@headlessui/react";

import Logo from "./logo";
import SearchAlgolia from "./searchAlgolia";
import MainMenu from "./mainMenu";
import MobileMenu from "./mobileMenu";
import LocaleSelector from "./localeSelector";
import DarkModeSwitcher from "./darkModeSwitcher";
import Icon from "./icon";
import TwContainer from "./twContainer";

export default function Header() {
  return (
    <Popover tw="bg-white z-30 fixed inset-0 bottom-auto shadow-md dark:bg-black transition-colors">
      <TwContainer>
        <div tw="flex items-center justify-center h-16 space-x-6">
          <div tw="flex-1 flex">
            <Logo />
          </div>
          <div tw="-mr-2 -my-2 md:hidden">
            <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span tw="sr-only">Open menu</span>
              <Icon icon="menu" tw="h-6 w-6" />
            </Popover.Button>
          </div>
          <MainMenu />
          <div tw="hidden md:block w-36 lg:w-48">
            <SearchAlgolia />
          </div>
          <DarkModeSwitcher />
          <LocaleSelector />
        </div>
      </TwContainer>
      <MobileMenu />
    </Popover>
  );
}
