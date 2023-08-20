import Avatar from "@components/Avatar";
import Companies from "@components/Companies";
import CompaniesBottom from "@components/CompaniesBottom";
import Contact from "@components/Contact";
import FeaturedWork from "@components/FeaturedWork";
import Intro from "@components/Intro";
import NameCard from "@components/NameCard";
import { NextSeo } from "next-seo";

export default function Home() {
  const updateMeta = {
    title: "Homepage",
    description:
      "A design wizard voyaging into the metaverse. I tell the story through my design and illustrations. I spent most of my time designing for brands and making design resources and tools.",
  };
  return (
    <>
      <NextSeo {...updateMeta} />
      <div className="py-4 mt-10 max-md:mt-8">
        <div className="px-4 pt-4 pb-0 max-md:py-1 max-md:px-4">
          <div className="flex flex-row webkit-box-align-center items-center">
            <Avatar />
            <div className="flex flex-col ml-4">
              <NameCard />
            </div>
          </div>
          <Intro />
          <Companies />
        </div>
      </div>
      <FeaturedWork />
      <Contact />
      <CompaniesBottom />
    </>
  );
}
