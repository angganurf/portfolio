import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function SkeletonNavbar() {
  const { systemTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="ml-2 flex relative animate-pulse max-md:hidden">
      <div
        className={`flex w-8 m-0 h-2.5 mr-3 relative rounded-xl  ${
          currentTheme === "light" ? "skeletonCard" : "bg-[#4C4E5C] "
        }`}
      />
      <div
        className={`flex w-8 m-0 h-2.5 mr-3 relative rounded-xl  ${
          currentTheme === "light" ? "skeletonCard" : "bg-[#4C4E5C] "
        }`}
      />
      <div
        className={`flex w-48 m-0 h-2.5 mr-3 relative rounded-xl  ${
          currentTheme === "light" ? "skeletonCard" : "bg-[#4C4E5C] "
        }`}
      />
      <div
        className={`flex w-8 m-0 h-2.5 mr-3 relative rounded-xl  ${
          currentTheme === "light" ? "skeletonCard" : "bg-[#4C4E5C] "
        }`}
      />
      <div
        className={`flex w-8 m-0 h-2.5 mr-3 relative rounded-xl  ${
          currentTheme === "light" ? "skeletonCard" : "bg-[#4C4E5C] "
        }`}
      />
    </div>
  );
}
