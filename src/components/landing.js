import React from "react";
import "twin.macro";

import LandingBillboard from "./landingBillboard";
import Link from "./link";

import Md from "./markdownDynamic";
import NewsReel from "./newsReel";
import TwContainer from "./twContainer";

export default function Landing({
  data: { newsItems },
  i18n: { billboard, intro },
}) {
  return (
    <>
      <LandingBillboard {...billboard} />
      <TwContainer tw="py-16 space-y-16">
        <NewsReel items={newsItems} />
        <div tw="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div tw="prose">
            <h3>{intro.title}</h3>
            <Md>{intro.content}</Md>
          </div>
          <div tw="space-y-8 text-center">
            <div tw="flex w-full h-72 bg-shade-neutral text-shade-lightest justify-center items-center rounded-lg shadow-2xl">
              Image Placeholder
            </div>
            {intro.button && (
              <Link to={intro.button.link} button primary big icon="right">
                {intro.button.text}
              </Link>
            )}
          </div>
        </div>
      </TwContainer>
    </>
  );
}
