import { Article } from "@/lib/types";
import Image from "next/legacy/image";
import { handleArticleClicked } from "@/lib/handleArticleClick";
import siteMetadata from "@/data/siteMetadata";
import slugify from "slugify";
import { useIsArticleRead } from "@lib/hooks/useIsArticleRead";
import Link from "next/link";
import fetcher from "@lib/fetcher";
import { Works } from "@prisma/client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import useSWR from "swr";
import SkeletonCard from "./SkeletonCard";

type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  const slug = slugify(article.title).toLowerCase();
  const [hasRead] = useIsArticleRead(slug);
  const { systemTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setIsMounted(true);
    if (article) {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
  }, [article]);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  let skeletonCard = [0, 1, 2, 3, 5, 6];

  return (
    <>
      {loading ? (
        skeletonCard.map((index: number) => <SkeletonCard key={index} />)
      ) : (
        <div
          key={slug}
          onClick={() => handleArticleClicked(slug)}
          rel="norefere"
        >
          <div
            className={`mb-3 relative cursor-pointer p-3 rounded-3xl max-md:flex max-md:justify-start max-md:webkit-box-align-center max-md:articles-center max-md:rounded-[20px] 
          ${currentTheme === "light" ? "workcard" : "workcardDark"}
            `}
          >
            <div className="w-full relative rounded-xl max-md:!w-24">
              <span className="rounded-xl max-md:!w-24">
                <Image
                  className="absolute inset-0 boxborder p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full rounded-xl"
                  src={article.coverImage}
                  placeholder="blur"
                  blurDataURL={article.coverImage}
                  width={200}
                  height={200}
                  alt={"article cover"}
                />
              </span>
              {hasRead ? (
                <div
                  className={`absolute top-2 left-2 font-bold leading-[14px] text-[10px] py-[1px] px-[6px] rounded-lg inline-flex uppercase text-white
                   bg-pink-500 opacity-50
                 max-md:top-[6px] max-md:left-[6px] max-md:text-[9px] max-md:px-1 `}
                >
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5.75 12.8665L8.33995 16.4138C9.15171 17.5256 10.8179 17.504 11.6006 16.3715L18.25 6.75"
                    ></path>
                  </svg>
                  read
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="flex flex-col mt-[6px] max-md:ml-3 max-md:mr-2 max-md:mb-0">
              <h3 className="text-base font-bold tracking-[-0.4px] webkit-box-align-center articles-center flex mb-1 mx-0 max-md:mt-0 max-md:text-[15px] max-md:tracking-[-0.18px]">
                {article.title}
              </h3>
              <p className="text-[12px] m-0 opacity-60 tracking-[-0.25px] font-normal leading-[140%] max-md:text-sm max-md:tracking-[-0.15px] mb-2">
                {new Date(article.publishedDate).toLocaleDateString(
                  siteMetadata.locale,
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}{" "}
              </p>
              <p className="text-[15px] m-0 opacity-60 tracking-[-0.25px] font-normal leading-[140%] max-md:text-sm max-md:tracking-[-0.15px]">
                {article.summary}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
