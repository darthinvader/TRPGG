import { useEffect, useState } from "react";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export const useIsMobile = () => {
  return useWindowDimensions().width < 768;
};

export const useIsTablet = () => {
  return useWindowDimensions().width < 1024;
};

export const useIsDesktop = () => {
  return useWindowDimensions().width >= 1024;
};
