import { useState, useEffect } from "react";

const useScreenSize = (breakpoint: number = 640): boolean => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false); // Default for SSR

  useEffect(() => {
    // Early return for non-browser environments
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const updateScreenSize = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);

    // Initialize the value on mount
    setIsLargeScreen(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, [breakpoint]);

  return isLargeScreen;
};

export default useScreenSize;
