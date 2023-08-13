import Lists from "@components/Companies/Lists";
import React from "react";

export default function Marquee() {
  return (
    <>
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
    </>
  );
}
