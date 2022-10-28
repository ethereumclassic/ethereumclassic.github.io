import React from "react";
import "twin.macro";
import { useGlobals } from "../../plugins/translations-plugin/src/components/localizationProvider";

import FooterColumn from "./footerColumn";
import LocaleDropdown from "./localeDropdown";
import SocialIcons from "./socialIcons";
import Sponsors from "./sponsors";
import TwContainer from "./twContainer";
import Md from "./markdownDynamic";
import AddNetworkButton from "./addNetwork";
import useLocaleItems from "../utils/useLocaleItems";

export default function Footer() {
  const { enabled: i18nEnabled } = useLocaleItems();
  const {
    navItems,
    ui: { signOff },
  } = useGlobals();
  return (
    <footer tw="bg-backdrop-light mt-16 py-16" aria-labelledby="footer-heading">
      <TwContainer>
        <div tw="grid grid-cols-12 gap-4 gap-y-16">
          <div tw="col-span-full md:col-span-4 space-y-10 flex flex-col items-center md:items-start">
            {i18nEnabled && (
              <div>
                <LocaleDropdown />
              </div>
            )}
            <div>
              <AddNetworkButton />
            </div>
            <div>
              <SocialIcons />
            </div>
            <div>
              <Sponsors />
            </div>
          </div>
          <div tw="grid grid-cols-3 gap-4 row-start-1 col-span-full text-center md:text-left md:col-span-8 md:row-start-auto">
            {navItems
              .filter((i) => i.navItems)
              .map((item) => (
                <FooterColumn key={item.key} item={item} />
              ))}
          </div>
        </div>
        <div tw="col-span-full border-t border-shade-lightest pt-8 mt-16">
          <Md tw="text-sm font-medium text-shade-light text-center">
            {signOff}
          </Md>
        </div>
      </TwContainer>
    </footer>
  );
}
