import React from "react";
import "twin.macro";

import Link from "./link";
import Icon from "./icon";

export default function LandingFeature({ i18n }) {
  return (
    <div tw="rounded-md bg-backdrop-light relative overflow-hidden shadow-sm">
      <Icon
        icon={i18n.icon}
        tw="absolute left-16 top-0 h-32 -mt-6 text-shade-lightest z-0"
      />
      <div tw="flex z-10 items-center p-5 relative">
        <div>
          <div tw="uppercase text-xs tracking-widest text-shade-dark whitespace-nowrap">
            {i18n.subtitle}
          </div>
          <h3 tw="text-3xl font-bold text-shade-darkest whitespace-nowrap">
            {i18n.title}
          </h3>
        </div>
        <div tw="text-shade-neutral hidden md:block md:ml-24 md:pr-10">
          {i18n.text}
        </div>
        <div tw="text-right">
          <Link
            button
            big
            primary
            icon="right"
            to="/faqs"
            tw="whitespace-nowrap"
          >
            {i18n.button}
          </Link>
        </div>
      </div>
    </div>
  );
}
