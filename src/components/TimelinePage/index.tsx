import SkeletonCard from "@components/SkeletonCard";
import Image from "next/image";
import fetcher from "@lib/fetcher";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Tag } from "@prisma/client";

export type Timeline = {
  id?: boolean;
  name?: boolean;
  description?: boolean;
  StarterDate?: boolean;
  image?: boolean;
  tags?: Tag[];
  blurDataUrl?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
};
export default function TimelinePage() {
  const { systemTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const { data, error } = useSWR<{ timeline: Timeline[] }>(
    "/api/timeline?limit=10",
    fetcher
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  let skeletonCard = [0, 1, 2, 3, 5, 6];
  if (error) return <div>failed to load</div>;
  if (!data)
    return skeletonCard.map((index: number) => <SkeletonCard key={index} />);

  return (
    <div className="pt-[60px] max-md:p-[16px]">
      <div>
        {data?.timeline.map((item, index) => (
          <div
            className="cursor-pointer m-auto w-full relative card"
            key={index}
          >
            <Link
              href="#"
              className="flex webkit-box-pack-center justify-center max-md:flex-col"
              target="_blank"
            >
              <div className="min-w-[100px] mr-[20px] mt-[-4px] max-md:translate-y-1">
                <p className="text-right text-[14px] font-bold max-md:text-[12px] max-md:text-left max-md:ml-7 text-gray-700 dark:text-white">
                  {item.StarterDate}
                </p>
              </div>
              <div className="timeline-card-wrap wrap border-l-[1px] border-[rgba(34,36,44,.15)] dark:border-[rgba(236,237,238,.15)]">
                <div className="relative">
                  <div
                    className={`timeline-card-second ${
                      currentTheme === "light" ? "workcard" : "workcardDark"
                    }`}
                  >
                    <div>
                      {item.tags?.map((tag) => (
                        <div
                          className={`relative inline-grid text-[11px] font-bold leading-[14px] px-[6px] py-[1px] rounded-[9px] mr-[6px] max-md:text-[10px] `}
                          key={tag.id}
                          style={{
                            color: `${tag.txtColor}`,
                            background: `${tag.bgColor}`,
                          }}
                        >
                          {tag.name}
                        </div>
                      ))}
                      <h3 className="text-[18px] my-[8px] mx-0 font-bold max-md:my-1">
                        {item.name}
                      </h3>
                      <p className="text-[15px] leading-[140%] tracking-[-0.18px] mb-[12px] opacity-90 max-md:text-[14px] max-md:tracking-[-0.15px]">
                        {item.description}
                      </p>
                    </div>
                    {item.image && (
                      <div className="flex rounded-[12px]">
                        <span className="rounded-xl">
                          <Image
                            src={`${item.image}`}
                            alt={`${item.name}`}
                            width={0}
                            height={0}
                            blurDataURL={`${item.blurDataUrl}`}
                            placeholder="blur"
                            className="rounded-xl w-auto"
                            unoptimized
                            layout="responsive"
                          />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
