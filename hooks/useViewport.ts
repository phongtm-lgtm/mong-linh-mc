"use client";

import { useEffect, useState } from "react";

export type Viewport = {
  wideNav: boolean;
  isMobile: boolean;
};

export function useViewport(): Viewport {
  const [viewport, setViewport] = useState<Viewport>(() => ({
    wideNav: typeof window !== "undefined" ? window.innerWidth >= 1360 : true,
    isMobile: typeof window !== "undefined" ? window.innerWidth < 760 : false,
  }));

  useEffect(() => {
    const onResize = () =>
      setViewport({
        wideNav: window.innerWidth >= 1360,
        isMobile: window.innerWidth < 760,
      });
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return viewport;
}
