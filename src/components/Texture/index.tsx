import React from "react";

export default function Texture() {
  return (
    <svg
      id="texture"
      className="fixed top-0 left-0 z-[-99] w-full opacity-25 pointer-events-none translate-y-0 contrast-[120%] brightness-[120%]  dark:brightness-[20%]"
      style={{
        height: "calc(100vh + 200px",
      }}
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency=".8"
          numOctaves="4"
          stitchTiles="stitch"
        ></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)"></rect>
    </svg>
  );
}
