import React from "react";
import tw from "twin.macro";

import VideoFrame from "./videoFrame";
import Md from "./markdownDynamic";

export default function VideosModalContent({
  item: { title, youtube, description },
}) {
  return (
    <>
      <VideoFrame youtube={youtube} autoplay />
      <div tw="space-y-2 mt-4">
        <div tw="text-lg">{title}</div>
        {description && <Md styleLinks>{description}</Md>}
      </div>
    </>
  );
}
