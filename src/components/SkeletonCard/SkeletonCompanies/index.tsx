import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function SkeletonCompanies() {
  const { systemTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <div className="ml-2 flex relative animate-pulse ">
        {...Array(10)
          .fill(2)
          .map((index: number) => (
            <div
              key={index}
              className={`flex w-28 m-0 h-3 mr-10 relative rounded-xl  ${
                currentTheme === "light" ? "skeletonCard" : "skeletonDarkCard"
              }`}
            />
          ))}
      </div>
    </>
  );
}
