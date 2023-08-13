import Link from "next/link";
import React from "react";

export default function Intro() {
  return (
    <div>
      <p className="text-xl leading-[140%] font-normal my-4 text-gray-700 dark:text-white max-md:text-[18px] max-md:tracking-[-0.28px] ">
        A design wizard voyaging into the metaverse. I tell the story through my
        design and illustrations. I spent most of my time designing for brands
        and making design resources and tools.
      </p>
      <h4 className="font-medium text-lg text-[rgba(74,87,111,.6)] dark:text-[rgba(114,120,136,.6)] tracking-[-0.2px] max-md:text-base">
        Building what I love at
        <Link
          href="#"
          className="font-semibold bg-clip-text"
          style={{
            backgroundSize: "100%",
            WebkitTextFillColor: "transparent",
            backgroundRepeat: "repeat",
            backgroundColor: "#566CEC",
            backgroundImage:
              "linear-gradient(90.42deg,#4AB1F1 0.58%,#566CEC 37.22%,#D749AF 73.87%,#FF7C51 112.26%)",
          }}
        >
          {" "}
          @fsstudio
        </Link>
      </h4>
    </div>
  );
}
