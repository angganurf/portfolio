import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function SkeletonCard() {
  const { systemTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <div
        className={`mb-3 relative p-3 animate-pulse rounded-3xl max-md:flex max-md:justify-start max-md:webkit-box-align-center max-md:items-center max-md:rounded-[20px]`}
      >
        <div
          className={` m-0 h-52 relative rounded-xl max-md:!w-24 max-md:!h-24 ${
            currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
          }`}
        />
        <div className="max-md:ml-3 max-md:mr-2 max-md:mb-0 mt-2">
          <div
            className={`w-24 bottom-5 h-5 rounded-md ${
              currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
            }`}
          />
          <div
            className={`bottom-5 h-4 rounded-md mt-2 max-md:!w-60 ${
              currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
            }`}
          />
        </div>
      </div>
    </>
  );
}
