import React from "react";
import "twin.macro";
import Md from "./markdownDynamic";
import Link from "./link";
import VideoFrame from "./videoFrame";

import { h4 as H4 } from "./linkedHeaders";

export default function GenericVideos({ items }) {
  return (
    <div tw="space-y-16">
      {items.map(({ key, title, description, link, youtube, timestamp }) => (
        <div key={key}>
          <H4 tw="text-lg">{title}</H4>
          <Md>{description}</Md>
          <VideoFrame title={title} youtube={youtube} timestamp={timestamp} />
          <div tw="flex items-center justify-center">
            <Link
              to={link}
              tw="!text-shade-light !no-underline -mt-px bg-shade-lightest rounded-b-lg w-auto px-4 py-1 hover:bg-shade-lighter hover:!text-shade-neutral"
            >
              {link}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
