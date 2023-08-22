import AboutPage from "@components/AboutPage";
import PageTitle from "@components/PageTitle";
import { NextSeo } from "next-seo";
import React from "react";

export default function index() {
  const updateMeta = {
    title: "About",
    description:
      "Little about me. Also, It’s not that hard to find my contact just search angganurf.",
  };
  return (
    <>
      <NextSeo {...updateMeta} />
      <div className="py-3 px-0 mt-10 max-md:mt-4">
        <PageTitle
          title={updateMeta.title}
          description={updateMeta.description}
        />
        <AboutPage />
      </div>
    </>
  );
}
