import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function SkeletonTimeline() {
  const { systemTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div
      className={`cursor-pointer m-auto w-full animate-pulse relative card flex webkit-box-pack-center justify-center`}
    >
      <div
        className={`w-1 m-0 h-60 mr-3 rounded-xl max-md:!w-1 max-md:!h-52 max-md:mr-2 ${
          currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
        }`}
      />
      <div className="max-md:ml-3 max-md:mr-2 max-md:mb-0 mt-2">
        <div
          className={`w-96 bottom-5 h-4 rounded-md ${
            currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
          }`}
        />
        <div
          className={`bottom-5 h-48 rounded-md mt-2 ${
            currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
          }`}
        />
      </div>
    </div>
  );
}
