import React from "react";
import PageTitle from "@components/PageTitle";
import { NextSeo } from "next-seo";
import TimelinePage from "@components/TimelinePage";
import SocialLinksPage from "@components/SocialLinksPage";

export default function index() {
  const updateMeta = {
    title: "Timeline",
    description:
      "The linear view of some milestones and notable moments that happened so far. And you can always find more information on Twitter and LinkedIn.",
  };
  return (
    <>
      <NextSeo {...updateMeta} />
      <div className="py-3 px-0 mt-10 max-md:mt-4">
        <PageTitle
          title={updateMeta.title}
          description={updateMeta.description}
        />
        <SocialLinksPage />
        <div
          className="relative grid grid-cols-3 gap-[14px] p-1
  max-md:grid-cols-1 max-md:gap-[10px]"
        >
          <TimelinePage />
        </div>
      </div>
    </>
  );
}
