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
    <div tw="bg-white z-50 fixed inset-0 bottom-auto shadow-md dark:bg-black transition-colors">
      <TwContainer>
        <div tw="flex items-center justify-center h-16 space-x-6">
          <div tw="flex-1 flex">
            <Logo />
          </div>
          <MobileMenu />
          <MainMenu />
          <div tw="hidden md:block w-36 lg:w-48">
            <SearchAlgolia />
          </div>
          <DarkModeSwitcher />
          <LocaleSelector />
        </div>
      </TwContainer>
    </div>
  );
}
