import React from 'react';

import phoenix from '../assets/images/phoenix.svg';

const { useEffect, useRef, useState } = React;

const useScroll = () => {
  const requestId = useRef(0);
  const [w, setW] = useState(0);
  const [h, setH] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      cancelAnimationFrame(requestId.current);
      requestId.current = requestAnimationFrame(() => {
        setW(window.innerWidth);
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

  return { w, h, y };
};

const Phoenix = () => {
  const { w, h, y } = useScroll();
  if (h < y - 500) {
    return null;
  }
  const ratio = (w / h) * 400 - 200;
  const start = h - ratio;
  const pos = start - Math.floor(y / 4);
  return (
    <div className="phoenix" style={{ marginTop: `${pos}px`, opacity: y / 100 }}>
      <img src={phoenix} alt="Phoenix" />
    </div>
  );
};

export default Phoenix;
