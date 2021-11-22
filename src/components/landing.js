import React from "react";
import "twin.macro";

import LandingBillboard from "./landingBillboard";
import Link from "./link";

import Md from "./markdownDynamic";
import NewsReel from "./newsReel";

export default function Landing({
  data: { newsItems },
  i18n: { billboard, intro },
}) {
  return (
    <>
      <LandingBillboard {...billboard} />
      <div tw="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 space-y-16 mt-16">
        <NewsReel items={newsItems} />
        <div tw="grid grid-cols-2 items-center gap-6">
          <div tw="prose">
            <h3>{intro.title}</h3>
            <Md>{intro.content}</Md>
          </div>
          <div tw="space-y-8 text-center">
            <div tw="flex w-full h-72 bg-gray-500 text-white justify-center items-center rounded-lg shadow-2xl">
              Image Placeholder
            </div>
            {intro.button && (
              <Link to={intro.button.link} button primary big icon="right">
                {intro.button.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
