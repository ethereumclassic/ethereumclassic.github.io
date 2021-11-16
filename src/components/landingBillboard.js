import React from "react";
import "twin.macro";

import lass from "../images/lass3.png";

export default function LandingBillboard({ text, randomWords }) {
  return (
    <div
      tw="bg-gradient-to-r from-green-300 to-green-600 overflow-hidden dark:from-green-700 dark:to-gray-900"
      css={{ height: `70vh` }}
    >
      <div tw="max-w-7xl mx-auto h-full px-6 grid grid-cols-2 items-center">
        <div tw="h-full overflow-hidden">
          {/* TODO replace with static image search */}
          <img src={lass} alt="lass" tw="my-10" />
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
}
