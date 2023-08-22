import Link from "next/link";
import React from "react";

type IProps = {
  url: string;
  name: string;
  date: string;
  description: string;
  img?: string;
  tag?: string;
  txtColor?: string;
  bgColor?: string;
};

export default function TimelineCard({
  url,
  name,
  date,
  description,
  img,
  tag,
  txtColor,
  bgColor,
}: IProps) {
  return (
    <div className="cursor-pointer m-auto w-full relative">
      <Link
        href={url}
        className="flex webkit-box-pack-center justify-center max-md:flex-col"
        target="_blank"
      >
        <div className="max-w-[100px] mr-[20px] mt-[-4px] max-md:translate-y-[4px]">
          <p className="text-right text-[14px] font-bold max-md:text-[12px] max-md:text-left max-md:ml-28px]">
            {date}
          </p>
        </div>
        <div className="timeline-card-wrap">
          <div className="relative">
            <div className="timeline-card-second">
              <div>
                <div
                  className={`bg-[${bgColor}] text-[${txtColor}] relative inline-grid text-[11px] font-bold leading-[14px] px-6px py-1 rounded-[9px] mr-[9px] max-md:text-[10px] `}
                >
                  {tag}
                </div>
                <h3 className="text-[18px] my-[8px]">{name}</h3>
                <p className="text-[15px] leading-[140%] tracking-[-0.18px] mb-[12px] opacity-90 max-md:[text-14px] max-md:tracking-[-0.15px]">
                  {description}
                </p>
              </div>
              <div className="flex rounded-[12px]"></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
