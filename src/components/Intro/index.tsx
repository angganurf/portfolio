import Link from "next/link";
import React from "react";

export default function Intro() {
  return (
    <div>
      <p className="text-xl leading-[140%] font-normal my-4 text-gray-700 dark:text-white max-md:text-[18px] max-md:tracking-[-0.28px] ">
        With 5 years of experience as a skilled Full Stack Web Developer and
        accomplished Graphic Designer, I bring a passion for crafting seamless
        digital experiences. Explore my journey of merging creativity with
        functionality to build innovative solutions.
      </p>
      <h4 className="font-medium text-lg text-[rgba(74,87,111,.6)] dark:text-[rgba(114,120,136,.6)] tracking-[-0.2px] max-md:text-base">
        Building what I love at
        <Link
          href="#"
          className="font-semibold bg-clip-text gradient-ret gradient-retro-2 "
        >
          {" "}
          @fsstudio
        </Link>
      </h4>
    </div>
  );
}
