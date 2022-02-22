import { useEffect, useRef, useState } from "react";

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
    window.addEventListener("resize", scrollHandler);
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("resize", scrollHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return { w, h, y };
};

export default useScroll;
