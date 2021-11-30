import React, { useState } from "react";
import "twin.macro";
import Icon from "./icon";

const VideoFrame = ({ title, src, youtube, timestamp }) => {
  const [play, setPlay] = useState(false);
  const thumb = `https://img.youtube.com/vi/${youtube}/hqdefault.jpg`;
  if (!play) {
    return (
      <div
        onClick={() => setPlay(true)}
        className="group"
        tw="relative aspect-w-16 aspect-h-9 bg-cover bg-center cursor-pointer shadow-md border-solid border border-shade-lighter rounded-xl overflow-y-hidden"
        style={{ backgroundImage: `url("${thumb}")` }}
      >
        <div tw="inset-0 flex items-center justify-center">
          <div tw="absolute inset-0 bg-shade-lightest opacity-40 group-hover:opacity-20" />
          <Icon
            icon="play"
            tw="h-20 w-20 text-shade-dark z-10 opacity-90 group-hover:text-shade-darkest bg-shade-lightest rounded-full ring-8 ring-shade-lightest"
          />
        </div>
      </div>
    );
  }
  let link = src;
  if (youtube) {
    link = `https://www.youtube.com/embed/${youtube}?autoplay=1`;
  }
  if (timestamp) {
    link = `${link}&start=${timestamp}`;
  }
  return (
    <div tw="aspect-w-16 aspect-h-9 shadow-md bg-shade-lighter rounded-xl overflow-y-hidden">
      <iframe
        title={title}
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoFrame;
