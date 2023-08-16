import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";

export default function About() {
  const router = useRouter();
  const updateMeta = {
    title: `${router.query.slug}`,
    description:
      "A design wizard voyaging into the metaverse. I tell the story through my design and illustrations. I spent most of my time designing for brands and making design resources and tools.",
  };
  if (router.query.slug === "about") {
    return (
      <>
        <NextSeo {...updateMeta} />
        <div>hello about</div>
      </>
    );
  }
  return (
    <>
      <NextSeo {...updateMeta} />
      <div>{router.query.slug}</div>
    </>
  );
}
