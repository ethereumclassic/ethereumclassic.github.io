import React from 'react';

import phoenix from '../assets/images/phoenix.svg';

const { useEffect, useRef, useState } = React;

const useScroll = () => {
  const requestId = useRef(0);
  const [h, setH] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      cancelAnimationFrame(requestId.current);
      requestId.current = requestAnimationFrame(() => {
        setH(window.innerHeight);
        setY(window.scrollY || document.documentElement.scrollTop);
      });
    };
    window.addEventListener('resize', scrollHandler);
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('resize', scrollHandler);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return { h, y };
};

const Phoenix = () => {
  const { h, y } = useScroll();
  if (h < y - 500) {
    return null;
  }
  const start = h - h / 3;
  const pos = start - Math.floor(y / 4);
  return (
    <div className="phoenix" style={{ marginTop: `${pos}px`, opacity: y / 100 }}>
      <img src={phoenix} alt="Phoenix" />
    </div>
  );
};

export default Phoenix;
