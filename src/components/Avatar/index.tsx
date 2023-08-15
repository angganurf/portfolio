import React from "react";

export default function Avatar() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        fill="#000"
        stroke="#000"
        className="avatar-shape"
      >
        <clipPath
          id="hex"
          clipPathUnits="objectBoundingBox"
          transform="scale(0.005)"
        >
          <path d="M193.248 73.9547C185.95 57.6268 177.44 41.9442 167.798 27.0561L164.688 22.3002C160.859 16.3899 155.841 11.4612 149.998 7.87254C144.155 4.28382 137.633 2.12515 130.908 1.5534L125.448 1.08526C108.508 -0.361754 91.4873 -0.361754 74.5479 1.08526L69.0879 1.5534C62.3625 2.12515 55.8413 4.28382 49.9981 7.87254C44.155 11.4612 39.1367 16.3899 35.3079 22.3002L32.1979 27.0986C22.5561 41.9868 14.0458 57.6693 6.74789 73.9972L4.39789 79.2531C1.50233 85.7356 0 92.8227 0 100C0 107.177 1.50233 114.264 4.39789 120.747L6.74789 126.003C14.0458 142.331 22.5561 158.014 32.1979 172.901L35.3079 177.7C39.1367 183.61 44.155 188.539 49.9981 192.128C55.8413 195.717 62.3625 197.875 69.0879 198.447L74.5479 198.915C91.4873 200.362 108.508 200.362 125.448 198.915L130.908 198.447C137.638 197.868 144.163 195.7 150.006 192.099C155.85 188.499 160.865 183.558 164.688 177.636L167.798 172.838C177.44 157.95 185.95 142.267 193.248 125.939L195.598 120.683C198.493 114.2 199.996 107.114 199.996 99.9362C199.996 92.7589 198.493 85.6718 195.598 79.1893L193.248 73.9547Z"></path>
        </clipPath>
      </svg>
      <div className="h-[90px] w-[90px] relative mb-3">
        <div
          className="h-full w-full"
          style={{ filter: "drop-shadow(0px 1px 2px rgba(48,52,77,.1)" }}
        >
          <div
            className="h-full w-full absolute bg-white dark:bg-black"
            style={{
              clipPath: "url(#hex)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
          <div
            className="absolute bg-white dark:bg-black"
            style={{
              width: "calc(100% - 6px)",
              height: "calc(100% -6px)",
              clipPath: "url(#hex)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
          <img
            src="/assets/img/avatar.png"
            className="absolute bg-white dark:bg-black"
            style={{
              clipPath: "url(#hex)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "calc(100% - 6px)",
              height: "calc(100% -6px)",
            }}
          ></img>
        </div>
      </div>
    </>
  );
}
