import SkeletonTitle from "@components/SkeletonCard/SkeletonTitle";
import fetcher from "@lib/fetcher";
import { InterviewMentions } from "@prisma/client";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

export default function InterviewMentions() {
  const { data, error } = useSWR<{ interviewMentions: InterviewMentions[] }>(
    "/api/interview-mentions?limit=10",
    fetcher
  );

  let skeletonCard = [0, 1, 2, 3, 5, 6];
  if (error) return <div>failed to load</div>;
  if (!data)
    return skeletonCard.map((index: number) => <SkeletonTitle key={index} />);

  return (
    <>
      <div className="flex flex-col mb-6 mt-3 max-md:mb-4">
        {data.interviewMentions.map((item) => (
          <div className="px-4 mb-2" key={item.id}>
            <Link
              className="link-interview hover:text-blue-500"
              href={`${item.url}`}
            >
              {item.title} {""} ↗
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
