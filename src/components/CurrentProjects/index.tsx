import AllWorks from "@containers/Works";
import Link from "next/link";
import React from "react";

export default function CurrenProjects() {
  return (
    <div className="py-[16px] mt-[40px] max-md:mt-4">
      <div className="flex webkit-box-align-center items-center webkit-box-pack-justify justify-between">
        <h2 className="px-4 py-0 text-sm m-0 uppercase tracking-[2px] text-[rgba(74,87,111,.6)] opacity-70 dark:text-[rgba(114,120,136,.6)] font-bold max-md:text-xs">
          Current Projects
        </h2>
        <div className="flex">
          <Link
            href="/work"
            className="gradient-sky-2 text-xs leading-3 font-semibold capitalize px-4"
          >
            All Works ▸
          </Link>
        </div>
      </div>
      <div
        className="relative grid grid-cols-3 gap-[14px] p-1
      max-md:grid-cols-1 max-md:gap-[10px]"
      >
        <AllWorks />
      </div>
    </div>
  );
}
