import React from "react";
import "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

import FooterColumn from "./footerColumn";
import LocaleDropdown from "./localeDropdown";
import SocialIcons from "./socialIcons";
import Sponsors from "./sponsors";

export default function Footer() {
  const { navItems } = useGlobals();
  return (
    <footer tw="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" tw="sr-only">
        Footer
      </h2>
      <div tw="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div tw="xl:grid xl:grid-cols-3 xl:gap-8">
          <div tw="space-y-8 xl:col-span-1">
            <LocaleDropdown />
            <SocialIcons />
            <p tw="text-gray-500 text-base">TODO some interesting text.</p>
            <div>
              <Sponsors />
            </div>
          </div>
          <div tw="mt-12 grid grid-cols-3 gap-4 xl:mt-0 xl:col-span-2">
            {navItems
              .filter((i) => i.navItems)
              .map((item) => (
                <FooterColumn key={item.key} item={item} />
              ))}
          </div>
        </div>
        <div tw="mt-12 border-t border-gray-200 pt-8">
          <p tw="text-base text-gray-400 xl:text-center">
            Made with <code>{`<3`}</code> for the original Ethereum vision
          </p>
        </div>
      </div>
    </footer>
  );
}
