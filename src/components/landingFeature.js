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
      <div tw="flex">
        <div tw="flex z-10 items-center p-5">
          <div>
            <div tw="uppercase text-xs tracking-widest text-shade-dark whitespace-nowrap">
              {i18n.subtitle}
            </div>
            <h3 tw="text-3xl font-bold text-shade-darkest">FAQs</h3>
          </div>
          <div tw="text-shade-neutral ml-16 mr-10">{i18n.text}</div>
          <Link button big primary icon="right" to="/faqs">
            Questions Answered
          </Link>
        </div>
      </div>
    </div>
  );
}
