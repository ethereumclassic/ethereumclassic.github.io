import React from 'react';

const Video = ({ url }) => {
  return (
    <iframe
      className="video"
      width="900"
      height="428"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default Video;
