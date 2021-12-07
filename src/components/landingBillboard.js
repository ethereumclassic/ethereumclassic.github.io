import React, { useState } from "react";
import "twin.macro";
import { useIntervalWhen } from "rooks";
import { StaticImage } from "gatsby-plugin-image";
import { shuffle } from "lodash";
import useScroll from "../utils/useScroll";
import Icon from "./icon";

function RandomWords({ words }) {
  const shuffled = words.slice(0, 1).concat(shuffle(words.slice(1)));
  const [{ i, arr }, setState] = useState({ i: 0, arr: shuffled });
  useIntervalWhen(() => {
    setState({ arr, i: i === arr.length - 1 ? 0 : i + 1 });
  }, 800);
  return (
    <span tw="font-extrabold text-4xl md:text-5xl lg:text-6xl whitespace-nowrap tracking-tight">
      {arr[i]}{" "}
    </span>
  );
}

function Lass() {
  const { y, h, w } = useScroll();
  const ratio = h / w;
  const start = -10;
  const pos = start - Math.floor(y / (ratio * 2));
  const mt = isNaN(pos) ? start : pos;
  return (
    <div css={{ marginTop: `${mt}px` }}>
      <Icon icon="etc" tw="text-backdrop-light mx-32 md:ml-0 opacity-75" />
      {/* <StaticImage
        alt=""
        src="../images/lass3.png"
        placeholder="tracedSVG"
        tracedSVGOptions={{ color: "rgba(0,0,0,0.3)" }}
      /> */}
    </div>
  );
}

export default function LandingBillboard({ text, randomWords }) {
  return (
    <div tw="bg-gradient-to-r overflow-hidden select-none h-[40rem] max-h-[70vh] sm:h-[30rem] md:h-[40rem] lg:h-[50rem] xl:h-[70vh] from-primary-light to-primary-dark dark:from-primary-lighter dark:to-backdrop-dark">
      <div tw="max-w-7xl mx-auto h-full px-6 grid grid-cols-12 items-center gap-10">
        <div tw="h-full flex items-center col-span-full sm:col-span-7 text-primary-lighter sm:overflow-hidden">
          {/* <Lass /> */}
          <Icon icon="etc" tw="text-backdrop-light m-10 lg:mt-0 opacity-75" />
        </div>
        <div tw="flex flex-col text-3xl lg:text-5xl uppercase font-light leading-tight tracking-widest col-span-full text-center row-start-1 pt-5 sm:text-left sm:pt-0 sm:col-span-5 sm:row-start-auto text-primary-lightest dark:text-primary-darkest">
          {text.split("%%").map((str) =>
            str === "$$" ? (
              <RandomWords key={str} words={Object.values(randomWords)} />
            ) : (
              <span key={str} tw="opacity-70 whitespace-nowrap">
                {str.trim()}{" "}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
