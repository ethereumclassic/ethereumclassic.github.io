/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';

const VideoFrame = ({ title, src, youtube, timestamp }) => {
  const [play, setPlay] = useState(false);
  const thumb = `https://img.youtube.com/vi/${youtube}/hqdefault.jpg`;
  if (!play) {
    return (
      <div className="video-frame not-playing" onClick={() => setPlay(true)}>
        <div className="play">
          <i className="fas fa-play" />
        </div>
        <div className="preview" style={{ backgroundImage: `url("${thumb}")` }} />
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
    <iframe
      className="video-frame"
      title={title}
      src={link}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default VideoFrame;
