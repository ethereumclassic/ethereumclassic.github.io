/* This Header requires Tailwind CSS v2.0+ */
import React from "react";
import "twin.macro";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";

import Logo from "./logo";
import Search from "./search";
import MainMenu from "./mainMenu";
import MobileMenu from "./mobileMenu";
import LocaleSelector from "./localeSelector";
import DarkModeSwitcher from "./darkModeSwitcher";

export default function Header() {
  return (
    <Popover tw="bg-white z-20 fixed inset-0 bottom-auto shadow-md dark:bg-black transition-colors">
      <div tw="max-w-7xl mx-auto px-4 sm:px-6">
        <div tw="flex items-center justify-center h-16 space-x-6">
          <div tw="flex-1 flex">
            <Logo />
          </div>
          <div tw="-mr-2 -my-2 md:hidden">
            <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span tw="sr-only">Open menu</span>
              <MenuIcon tw="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <MainMenu />
          <div tw="hidden md:block w-36 lg:w-48">
            <Search />
          </div>
          <DarkModeSwitcher />
          <LocaleSelector />
        </div>
      </div>
      <MobileMenu />
    </Popover>
  );
}
