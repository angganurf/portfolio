import React, { useEffect } from "react";
import Image from "next/image";
import fetcher from "@lib/fetcher";
import useSWR from "swr";
import { About } from "@prisma/client";
import Link from "next/link";
import SkeletonCard from "@components/SkeletonCard";
import InterviewMentions from "./InterviewMentions";
import Companies from "@components/Companies";

import tweetImage1 from "../../../public/pablo.jpg";
import tweetImage2 from "../../../public/rogie.jpg";
import anggaImage from "../../../public/angga.jpg";
import loveImage from "../../../public/love.svg";

export default function AboutPage() {
  const { data, error } = useSWR<{ abouts: About }>("/api/about", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <SkeletonCard />;

  return (
    <>
      <div>
        <div className="gap-3 relative inline-grid pt-3 pb-10 leading-[0] max-md:p-4">
          <span
            className="rounded-2xl flex"
            style={{
              boxShadow:
                "6px 6px 12px -6px rgb(0,0,0,.1),24px 24px 30px -6px rgb(0,0,0,.2)",
            }}
          >
            <span className="rounded-xl inline-block overflow-hidden relative max-w-full opacity-100 border-0 p-0 m-0">
              <span className="rounded-xl box-border block max-w-full opacity-100 border-0 p-0 m-0">
                <Image
                  width={708}
                  height={424}
                  alt="Gradient BG"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272016%27%20height=%271208%27/%3e"
                  className="rounded-xl block max-w-full opacity-100 border-0 p-0 m-0"
                />
              </span>

              <Image
                src={`${data?.abouts.image}`}
                width={708}
                height={424}
                alt="About Angga nurf"
                blurDataURL={`${data?.abouts.blurDataUrl}`}
                placeholder="blur"
                className="rounded-xl absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
                unoptimized
              />
            </span>
          </span>
          <h5 className="text-center pt-3 uppercase text-[12px] tracking-[2px] font-semibold text-gray-500 opacity-50 max-md:text-[11px] max-md:tracking-[-0.18px]">
            What&apos;s on my desk
          </h5>
        </div>
      </div>
      <div className="max-w-[500px] m-auto">
        <p className="text-[16px] my-3 px-4 leading-[150%] tracking-[-0.25px] max-md:text-[15px] max-md:tracking[-0.18px]">
          {data?.abouts.about}
        </p>
        <h2 className="mt-[54px] font-semibold px-4 text-[14px] m-0 uppercase tracking-[2px] text-gray-500 opacity-70 max-md:text-[12px]">
          CURRENT
        </h2>
        <p className="text-[16px]  my-3 px-4 leading-[150%] tracking-[-0.25px] max-md:text-[15px] max-md:tracking[-0.18px]">
          {data?.abouts.current}
        </p>
        <h2 className="mt-[54px] font-semibold px-4 text-[14px] m-0 uppercase tracking-[2px] text-gray-500 opacity-70 max-md:text-[12px]">
          Contact & Social Media Links
        </h2>
        <p className="text-[16px]  my-3 px-4 leading-[150%] tracking-[-0.25px] max-md:text-[15px] max-md:tracking[-0.18px]">
          You can find me on everywhere with handle {""}
          <Link
            className="font-semibold transition-all hover:text-blue-600"
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_GO_LINK}`}
          >
            {process.env.NEXT_PUBLIC_GO_HANDLE}
          </Link>
          .{""} Also see all social links here {""}
          <Link
            className="font-semibold transition-all hover:text-blue-600"
            target="_blank"
            href="/links"
          >
            angganurf.com/links
          </Link>
        </p>
        <p className="text-[16px]  my-3 px-4 leading-[150%] tracking-[-0.25px] max-md:text-[15px] max-md:tracking[-0.18px]">
          For partnerships, collaborations, sponsorships, commissions, events,
          you can reach out to me at {""}
          <Link
            className="font-semibold transition-all hover:text-blue-600"
            target="_blank"
            href="mailto:angganurfaizal190300@gmail.com?subject=Saying Hello!!!"
          >
            hi@angganurf.com
          </Link>
          {""} or {""}
          <Link
            className="font-semibold transition-all hover:text-blue-600 "
            target="_blank"
            href={`${process.env.NEXT_PUBLIC_X_LINK}`}
          >
            tweet.
          </Link>
        </p>
        <p className="text-[14px] font-medium opacity-50 my-3 px-4 leading-[150%] tracking-[-0.25px] max-md:tracking[-0.18px]">
          PS: I&apos;ll reply back to email in 1-2 working days.
        </p>
        <h2 className="mt-[54px] font-semibold px-4 text-[14px] m-0 uppercase tracking-[2px] text-gray-500 opacity-70 max-md:text-[12px]">
          Interviews and Mentions
        </h2>

        <InterviewMentions />
      </div>
      <div className="webkit-box-align-center items-center">
        <div className="grid-2 relative inline-grid gap-3 pt-3 pb-10 leading-[0] max-md:p-4">
          <span className="shadow-2">
            <span className="span-1">
              <span className="span-2">
                <Image
                  width={348}
                  height={221}
                  alt="Gradient BG"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27616%27%20height=%27392%27/%3e"
                  className="max-w-full max-md:w-auto"
                />
              </span>
              <Image
                src={tweetImage2}
                alt="Tweet from @rogie"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAZEAADAQEBAAAAAAAAAAAAAAAAAQISA0H/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8ArXCaTxN5mfEgAB//2Q=="
                placeholder="blur"
                className="rounded-xl absolute inset-0 box-border p-0 border-none m-auto block min-w-full max-w-full min-h-full max-h-full"
              />
            </span>
          </span>
          <span className="shadow-2">
            <span className="span-1">
              <span className="span-2">
                <Image
                  width={348}
                  height={221}
                  alt="Gradient BG"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27616%27%20height=%27392%27/%3e"
                  className="max-w-full max-md:w-auto"
                />
              </span>
              <Image
                src={tweetImage1}
                alt="Tweet from Pablo"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAaEAADAQADAAAAAAAAAAAAAAAAAQIDBBJS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK3x8nmpUX1jypAAH//Z"
                placeholder="blur"
                className="rounded-xl absolute inset-0 box-border p-0 border-none m-auto block min-w-full max-w-full min-h-full max-h-full"
              />
            </span>
          </span>
        </div>
      </div>
      <Companies />
      <div className="gap-3 mt-10 flex flex-col webkit-box-align-center items-center mb-5">
        <div
          className="h-[120px] w-[120px] relative rounded-[50%]"
          style={{ boxShadow: "rgba(255, 0, 0, 0.5) 0px 21px 24px -14px" }}
        >
          <span className="span-1">
            <span className="span-2">
              <Image
                width={120}
                height={120}
                alt="Gradient BG"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27300%27%20height=%27300%27/%3e"
              />
            </span>
            <Image
              src={anggaImage}
              alt="Angga nurfaisal Icon"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEUDAwNiYmLZ2dkxMTG/v78lJSWvr6////8SEhLn5+f39/empqadnZ14eHiCgoKAgICGhoZAQEA+Pj7/S0QeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nBXGQRKAIAwEwQESNgEU9f+PtehTI2UpJiGt9bR6MjP9HSin9S8Mqdr2lox+94ZXLqIEOEFw/EDgAZEe95RrAAAAAElFTkSuQmCC"
              placeholder="blur"
              className="rounded-full absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
            />
          </span>
        </div>
        <Image
          src={loveImage}
          alt="Love with Angganurf"
          className="dark:invert invert-0 mt-5 h-12 border-0"
          unoptimized
        />
      </div>
    </>
  );
}
