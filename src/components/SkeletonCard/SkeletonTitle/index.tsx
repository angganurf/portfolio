import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function SkeletonTitle() {
  const { systemTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div
      className={`text-center max-w-[500px] mt-5 mb-3 animate-pulse m-auto p-6 flex flex-col webkit-box-align-center items-center max-md:mt-4`}
    >
      <div
        className={`flex w-20 m-0 h-6 relative rounded-xl  ${
          currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
        }`}
      />
      <div
        className={`bottom-5 w-80 h-3 rounded-md mt-3 max-md:!w-60 ${
          currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
        }`}
      />
      <div
        className={`bottom-5 w-72 h-3 rounded-md mt-3 max-md:!w-60 ${
          currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
        }`}
      />
      <div
        className={`bottom-5 w-52 h-3 rounded-md mt-3 max-md:!w-60 ${
          currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
        }`}
      />
      <div className="flex webkit-box-pack-center justify-center webkit-box-align-center items-center my-4 mx-0 max-md:scale-[0.8]">
        <div
          className={`bottom-5 w-72 h-2 rounded-md mt-3 max-md:!w-60 ${
            currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
          }`}
        />
      </div>
    </div>
  );
}
