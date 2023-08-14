import Marquee from "@components/Marquee";
import Link from "next/link";
import React from "react";

export default function Companies() {
  return (
    <div className="relative">
      <Link className="companies block" href="/about">
        <h3
          className="absolute m-0 text-base font-semibold z-[1] left-[50%]  transition-all tracking-[-0.5px] opacity-0 leading-[120%] items-center bg-clip-text gradient-sky-2"
          style={{
            top: "calc(50% - 15px)",
            transform: "translate(-50%, 5px) scale(0.95)",
            backgroundColor: "#566CEC",
          }}
        >
          Featured by
        </h3>
        <div className="w-full relative overflow-visible mt-5 h-[50px] flex webkit-box-align-center items-center webkit-mask-image">
          <div className="gradient-bg"></div>
          <div className="marquee-container">
            <Marquee />
          </div>
        </div>
      </Link>
    </div>
  );
}
