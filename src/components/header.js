/* This Header requires Tailwind CSS v2.0+ */
import React from "react";
import "twin.macro";

import Logo from "./logo";
import SearchAlgolia from "./searchAlgolia";
import MainMenu from "./mainMenu";
// LODO re-enable in i18n version
// import LocaleSelector from "./localeSelector";
// import LocaleButtons from "./localeButtons";
import DarkModeSwitcher from "./darkModeSwitcher";
import TwContainer from "./twContainer";
import MobileDropdown from "./mobileDropdown.";
import MobileMenuItems from "./mobileMenuItems";

export default function Header() {
  return (
    <div tw="bg-backdrop-light z-50 sticky top-0 shadow-md transition-colors">
      <TwContainer>
        <div tw="flex items-center h-14 px-2 md:px-0">
          <div tw="flex-1 flex">
            <Logo />
          </div>
          <div tw="space-x-4 flex md:hidden">
            <DarkModeSwitcher />
            {/* <MobileDropdown icon="globe">
              <div tw="p-4">
                <LocaleButtons />
              </div>
            </MobileDropdown> */}
            <MobileDropdown icon="search">
              <SearchAlgolia />
            </MobileDropdown>
            <MobileDropdown>
              <MobileMenuItems />
            </MobileDropdown>
          </div>
          <div tw="hidden md:flex items-center space-x-6">
            <MainMenu />
            <div tw="w-36 lg:w-48">
              <SearchAlgolia />
            </div>
            <DarkModeSwitcher />
            {/* <LocaleSelector /> */}
          </div>
        </div>
      </TwContainer>
    </div>
  );
}
