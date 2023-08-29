import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "@components/PageTitle";
import { NextSeo } from "next-seo";
import { convertToArticleList, getAllArticles } from "@lib/notion";
import SkeletonCard from "@components/SkeletonCard";

import { useTheme } from "next-themes";
import { GetStaticProps } from "next";
import { ArticleList } from "@components/ArticleList";

//@ts-ignore
export default function Blog({ featuredArticle, articles, tags }) {
  const updateMeta = {
    title: "Blogs",
    description:
      "Occasionally, I share case study & my process. You can read it here. Most of my posts are published on Medium or as Twitter threads.",
  };

  return (
    <>
      <NextSeo {...updateMeta} />
      <div className="py-3 px-0 mt-10 max-md:mt-4">
        <PageTitle
          title={updateMeta.title}
          description={updateMeta.description}
        />
        <div
          className="relative grid grid-cols-3 gap-[14px] p-1
  max-md:grid-cols-1 max-md:gap-[10px]"
        >
          <ArticleList articles={articles} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getAllArticles(process.env.NOTION_DATABASE);
  const { articles, tags } = convertToArticleList(data);

  let blogArticles = articles;
  if (!preview || preview === undefined) {
    blogArticles = blogArticles.filter(
      (article: { isPublic: boolean }) => article.isPublic === true
    );
  }

  const featuredArticle = blogArticles[0];

  return {
    props: {
      featuredArticle,
      articles: blogArticles.slice(1),
      tags,
    },
    revalidate: 30,
  };
};
