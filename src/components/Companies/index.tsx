import Link from "next/link";
import React from "react";
import Lists from "./Lists";

export default function Companies() {
  return (
    <div className="relative">
      <Link className="companies block" href="/about">
        <h3
          className="gradient-sky-2"
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
            <div className="marquee">
              <ul className="flex list-none webkit-box-align-center items-center transition-all">
                <Lists />
              </ul>
            </div>
            <div className="marquee" aria-hidden="true">
              <ul className="flex list-none webkit-box-align-center items-center transition-all">
                <Lists />
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
