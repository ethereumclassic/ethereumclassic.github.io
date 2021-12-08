import React, { useState } from "react";
import "twin.macro";
import { useIntervalWhen } from "rooks";
// import { StaticImage } from "gatsby-plugin-image";
import { shuffle } from "lodash";
// import useScroll from "../utils/useScroll";
import Icon from "./icon";
import TwContainer from "./twContainer";

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

// function Lass() {
//   const { y, h, w } = useScroll();
//   const ratio = h / w;
//   const start = -10;
//   const pos = start - Math.floor(y / (ratio * 2));
//   const mt = isNaN(pos) ? start : pos;
//   return (
//     <div css={{ marginTop: `${mt}px` }}>
//       <StaticImage
//         alt=""
//         src="../images/lass3.png"
//         placeholder="tracedSVG"
//         tracedSVGOptions={{ color: "rgba(0,0,0,0.3)" }}
//       />
//     </div>
//   );
// }

export default function LandingBillboard({ text, randomWords }) {
  return (
    <div tw="bg-gradient-to-tr overflow-hidden select-none h-[40rem] max-h-[70vh] sm:h-[30rem] md:h-[40rem] lg:h-[50rem] xl:h-[70vh] from-primary-light to-primary-dark dark:from-primary-lighter dark:to-backdrop-dark">
      <TwContainer tw="h-full">
        <div tw="sm:h-full grid grid-cols-1 sm:grid-cols-12 items-start sm:items-center">
          <div tw="col-span-full sm:col-span-7 overflow-hidden">
            {/* <Lass /> */}
            <Icon
              icon="etc"
              tw="text-backdrop-light opacity-30 mx-28 sm:mx-0 sm:mr-32"
            />
          </div>
          <div tw="col-span-full sm:col-span-5 row-start-1 sm:row-start-auto py-10">
            <div tw="flex flex-col text-3xl lg:text-5xl uppercase font-light leading-tight tracking-widest text-center sm:text-left text-primary-lightest dark:text-primary-darkest">
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
      </TwContainer>
    </div>
  );
}
