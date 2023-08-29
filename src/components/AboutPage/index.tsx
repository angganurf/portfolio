import React, { useEffect } from "react";
import Image from "next/legacy/image";
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
import ImageSpan from "@components/ImageSpan";
import TitleAndParagraph from "@components/TitleAndParagraph";

export default function AboutPage() {
  const { data, error } = useSWR<{ abouts: About }>("/api/about", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <SkeletonCard />;

  return (
    <>
      <div>
        <div className="gap-3 relative inline-grid pt-3 pb-10 leading-[0] max-md:p-4">
          <div className="shadow-2 rounded-xl">
            <Image
              className="rounded-xl absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
              src={`${data?.abouts.image}`}
              placeholder="blur"
              blurDataURL={`${data?.abouts.image}`}
              width={708}
              height={424}
              alt="About Angga nurf"
              unoptimized
            />
          </div>

          <h5 className="text-center pt-3 uppercase text-[12px] tracking-[2px] font-semibold text-gray-500 opacity-50 max-md:text-[11px] max-md:tracking-[-0.18px]">
            What&apos;s on my desk
          </h5>
        </div>
      </div>
      <div className="max-w-[500px] m-auto">
        <TitleAndParagraph paragraph={`${data?.abouts.about}`} />

        <TitleAndParagraph
          title="CURRENT"
          paragraph={`${data?.abouts.current}`}
          classNameTittle="mt-[54px]"
        />

        <TitleAndParagraph
          title="Contact & Social Media Links"
          classNameTittle="mt-[54px]"
        >
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
        </TitleAndParagraph>
        <TitleAndParagraph>
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
        </TitleAndParagraph>

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
          <div className="shadow-2 rounded-xl">
            <Image
              src={tweetImage2}
              alt="Tweet from @kristina"
              blurDataURL={`${tweetImage2}`}
              placeholder="blur"
              className="rounded-xl absolute inset-0 box-border p-0 border-none m-auto block min-w-full max-w-full min-h-full max-h-full"
            />
          </div>
          <div className="shadow-2 rounded-xl">
            <Image
              src={tweetImage1}
              alt="Tweet from @Erick"
              blurDataURL={`${tweetImage1}`}
              placeholder="blur"
              className="rounded-xl absolute inset-0 box-border p-0 border-none m-auto block min-w-full max-w-full min-h-full max-h-full"
            />
          </div>
        </div>
      </div>
      <Companies />
      <div className="gap-3 mt-10 flex flex-col webkit-box-align-center items-center mb-5">
        <div
          className="h-[120px] w-[120px] relative rounded-[50%]"
          style={{ boxShadow: "rgba(255, 0, 0, 0.5) 0px 21px 24px -14px" }}
        >
          <Image
            src={anggaImage}
            alt="Angga nurfaisal Icon"
            blurDataURL={`${anggaImage}`}
            placeholder="blur"
            className="rounded-full absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
          />
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
