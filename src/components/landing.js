import React from "react";
import "twin.macro";
import { StaticImage } from "gatsby-plugin-image";

import Link from "./link";

import Md from "./markdownDynamic";
import TwContainer from "./twContainer";
import LandingHeadlines from "./landingHeadlines";
import LandingVideos from "./landingVideos";
import LandingApps from "./landingApps";
import LandingArtwork from "./landingArtwork";
import LandingFeature from "./landingFeature";

export default function Landing({
  data: { headlines, videos, videosEn, apps },
  i18n: { billboard, intro, feature, headings },
}) {
  return (
    <>
      <LandingArtwork i18n={billboard} />
      <TwContainer tw="py-24 space-y-24">
        <LandingFeature i18n={feature} />
        <LandingHeadlines items={headlines.edges} i18n={headings.headlines} />
        <div tw="grid grid-cols-1 items-center gap-24 md:grid-cols-2">
          <div tw="prose">
            <h3>{intro.title}</h3>
            <Md>{intro.content}</Md>
          </div>
          <div tw="space-y-8 text-center">
            <StaticImage
              tw="rounded-lg shadow-2xl"
              alt={""}
              src="../images/foundation.png"
            />
            {intro.button && (
              <Link to={intro.button.link} button primary big icon="right">
                {intro.button.text}
              </Link>
            )}
          </div>
        </div>
        <div tw="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          <LandingVideos
            items={[...videos.edges, ...videosEn.edges].slice(0, 3)}
            i18n={headings.videos}
          />
          <LandingApps items={apps.edges} i18n={headings.apps} />
        </div>
      </TwContainer>
    </>
  );
}
