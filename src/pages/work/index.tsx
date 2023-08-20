import React from "react";
import WorksPage from "@components/WorksPage";
import PageTitle from "@components/PageTitle";
import { NextSeo } from "next-seo";

export default function Work() {
  const updateMeta = {
    title: "Works",
    description:
      "It has been an absolute pleasure to put my heart and soul into these projects. While you're here, browse these projects.",
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
          <WorksPage />
        </div>
      </div>
    </>
  );
}
