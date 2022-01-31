import React, { useState } from "react";
import { shuffle } from "lodash";
import { StaticImage } from "gatsby-plugin-image";
import tw from "twin.macro";
import { useIntervalWhen } from "rooks";

import TwContainer from "./twContainer";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

function RandomWords({ words }) {
  const shuffled = words.slice(0, 1).concat(shuffle(words.slice(1)));
  const [{ i, arr }, setState] = useState({ i: 0, arr: shuffled });
  useIntervalWhen(() => {
    setState({ arr, i: i === arr.length - 1 ? 0 : i + 1 });
  }, 800);
  return <span tw="whitespace-nowrap light:text-black">{arr[i]} </span>;
}

function Text({ text, randomWords }) {
  return (
    <div tw="flex flex-col space-y-4 font-display tracking-wider font-bold text-6xl md:text-5xl lg:text-6xl text-primary-lightest dark:text-primary-darkest">
      {text.split("%%").map((str) =>
        str === "$$" ? (
          <RandomWords key={str} words={Object.values(randomWords)} />
        ) : (
          <span key={str} tw="whitespace-nowrap text-primary-neutral">
            {str.trim()}{" "}
          </span>
        )
      )}
    </div>
  );
}

function LandingArtworkInner({ i18n }) {
  return (
    <div
      css={[
        tw`h-[44rem] md:h-[38rem]`,
        tw`bg-gradient-to-b from-shade-light to-backdrop-dark dark:from-black`,
      ]}
    >
      <TwContainer tw="h-full">
        <div tw="relative pointer-events-none">
          {/* BG CIRCLE */}
          <div tw="absolute top-[-16rem] md:top-[-32rem] -left-2/4 opacity-40">
            <StaticImage
              tw="dark:hidden"
              alt=""
              src="../images/banner/light mode/bg circle.png"
              placeholder="none"
            />
          </div>
          {/* BG BLURS RIGHT */}
          <div tw="absolute -right-1/4 -top-96">
            <StaticImage
              tw="dark:hidden"
              alt=""
              src="../images/banner/light mode/blurred spot.png"
              placeholder="blurred"
            />
            <StaticImage
              tw="light:hidden"
              alt=""
              src="../images/banner/dark mode/blurred spot.png"
              placeholder="blurred"
            />
          </div>
          {/* BG BLURS LEFT */}
          <div tw="absolute -left-1/3 -top-72">
            <StaticImage
              tw="dark:hidden"
              alt=""
              src="../images/banner/light mode/blurred spot.png"
              placeholder="blurred"
            />
            <StaticImage
              tw="light:hidden"
              alt=""
              src="../images/banner/dark mode/blurred spot.png"
              placeholder="blurred"
            />
          </div>
          {/* HALO */}
          <div tw="absolute left-11 top-10">
            <Parallax
              shouldAlwaysCompleteAnimation
              translateY={[0, 20]}
              opacity={[1, 0]}
            >
              <StaticImage
                tw="dark:hidden"
                alt=""
                src="../images/banner/light mode/Halo effect.png"
                placeholder="blurred"
                blurredOptions={{ width: 120 }}
              />
              <StaticImage
                tw="light:hidden"
                alt=""
                src="../images/banner/dark mode/Halo effect.png"
                placeholder="blurred"
                blurredOptions={{ width: 120 }}
              />
            </Parallax>
          </div>
          {/* GRID */}
          <div tw="absolute top-80 -left-1/4">
            <Parallax shouldAlwaysCompleteAnimation opacity={[1, 0]}>
              <StaticImage
                tw="dark:hidden"
                alt=""
                src="../images/banner/light mode/grid.png"
                placeholder="tracedSVG"
                tracedSVGOptions={{ color: "#ccdaf7" }}
              />
              <StaticImage
                tw="light:hidden"
                alt=""
                src="../images/banner/dark mode/grid.png"
                placeholder="tracedSVG"
                tracedSVGOptions={{ color: "#2a569e" }}
              />
            </Parallax>
          </div>
          {/* WAVE */}
          <div tw="absolute top-96 -left-32 -right-32">
            <Parallax
              shouldAlwaysCompleteAnimation
              translateY={[0, 80]}
              opacity={[1, -1]}
            >
              <StaticImage
                tw="dark:hidden"
                alt=""
                src="../images/banner/light mode/wave.png"
                placeholder="tracedSVG"
                tracedSVGOptions={{ color: "#44c2a7" }}
              />
              <StaticImage
                tw="light:hidden"
                alt=""
                src="../images/banner/dark mode/wave.png"
                placeholder="tracedSVG"
                tracedSVGOptions={{ color: "#44c2a7" }}
              />
            </Parallax>
          </div>
          {/* LOGO  */}
          <div tw="absolute left-10 top-40">
            <Parallax
              shouldAlwaysCompleteAnimation
              translateY={[0, 60]}
              opacity={[2, -2.5]}
            >
              <StaticImage
                tw="dark:hidden"
                alt=""
                src="../images/banner/light mode/big logo.png"
                placeholder="blurred"
                blurredOptions={{ width: 120 }}
              />
              <StaticImage
                tw="light:hidden"
                alt=""
                src="../images/banner/dark mode/big logo.png"
                placeholder="blurred"
                blurredOptions={{ width: 120 }}
              />
            </Parallax>
          </div>
          {/* CUBE RIGHT */}
          <div tw="absolute right-20 top-20">
            <Parallax
              shouldAlwaysCompleteAnimation
              translateY={[0, 400]}
              opacity={[1, 0]}
              rotate={[0, 500]}
            >
              <StaticImage
                tw="dark:hidden"
                alt=""
                src="../images/banner/light mode/cube 1.png"
                placeholder="tracedSVG"
                tracedSVGOptions={{ color: "#52b0af" }}
              />
              <StaticImage
                tw="light:hidden"
                alt=""
                src="../images/banner/dark mode/cube 2.png"
                placeholder="tracedSVG"
                tracedSVGOptions={{ color: "#d78bad" }}
              />
            </Parallax>
          </div>
          {/* CUBE LEFT */}
          <div tw="absolute top-96 left-10">
            <Parallax
              shouldAlwaysCompleteAnimation
              translateY={[0, 180]}
              rotate={[120, -120]}
              opacity={[2, 0]}
            >
              <StaticImage
                tw="dark:hidden"
                alt=""
                src="../images/banner/light mode/cube 2.png"
                placeholder="tracedSVG"
                tracedSVGOptions={{ color: "#c158f5" }}
              />
              <StaticImage
                tw="light:hidden"
                alt=""
                src="../images/banner/dark mode/cube.png"
                placeholder="tracedSVG"
                tracedSVGOptions={{ color: "#5ac093" }}
              />
            </Parallax>
          </div>
          {/* STARS LEFT */}
          <div tw=" absolute left-36 top-10">
            <Parallax
              shouldAlwaysCompleteAnimation
              translateY={[0, -40]}
              opacity={[2, 0]}
            >
              <StaticImage
                tw="dark:hidden ml-10 opacity-40"
                alt=""
                src="../images/banner/light mode/green stars.png"
                placeholder="none"
                // tracedSVGOptions={{ color: "#0cb673", threahold: 1 }}
              />
              <StaticImage
                tw="light:hidden opacity-80"
                alt=""
                src="../images/banner/dark mode/stars.png"
                placeholder="none"
              />
            </Parallax>
          </div>
          {/* STAR RIGHT */}
          <div tw="absolute right-0 top-96">
            <Parallax
              shouldAlwaysCompleteAnimation
              translateY={[0, -60]}
              opacity={[2, 0]}
            >
              <StaticImage
                tw="dark:hidden opacity-40"
                alt=""
                src="../images/banner/light mode/green star.png"
                placeholder="none"
              />
              <StaticImage
                tw="light:hidden opacity-80"
                alt=""
                src="../images/banner/dark mode/star.png"
                placeholder="none"
              />
            </Parallax>
          </div>
          {/* TEXT */}
          <div tw="absolute left-10 top-[32rem] md:top-44 md:left-2/4">
            <Text {...i18n} />
            {/* <StaticImage
              tw="dark:hidden"
              height={240}
              alt=""
              src="../images/banner/light mode/text.png"
              placeholder="tracedSVG"
              tracedSVGOptions={{ color: "rgba(0,0,0,0.3)" }}
            />
            <StaticImage
              tw="light:hidden "
              height={240}
              alt=""
              src="../images/banner/dark mode/text.png"
              placeholder="tracedSVG"
              tracedSVGOptions={{ color: "rgba(0,0,0,0.3)" }}
            /> */}
          </div>
        </div>
      </TwContainer>
    </div>
  );
}

export default function LandingArtwork({ i18n }) {
  return (
    <ParallaxProvider>
      <LandingArtworkInner {...{ i18n }} />
    </ParallaxProvider>
  );
}
