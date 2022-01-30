import React from "react";
import "twin.macro";

import LandingBillboard from "./landingBillboard";
import Link from "./link";

import Md from "./markdownDynamic";
import TwContainer from "./twContainer";
import LandingHeadlines from "./landingHeadlines";
import LandingVideos from "./landingVideos";
import LandingApps from "./landingApps";
import LandingArtwork from "./landingArtwork";

export default function Landing({
  data: { headlines, videos, apps },
  i18n: { billboard, intro },
}) {
  return (
    <>
      <LandingArtwork i18n={billboard} />
      <TwContainer tw="py-24 space-y-32">
        <LandingHeadlines items={headlines.edges} />
        <div tw="grid grid-cols-1 items-center gap-24 md:grid-cols-2">
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
        <div tw="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          <LandingVideos items={videos.edges} />
          <LandingApps items={apps.edges} />
        </div>
      </TwContainer>
    </>
  );
}
