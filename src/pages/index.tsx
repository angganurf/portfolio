import Avatar from "@components/Avatar";
import Companies from "@components/Companies";
import Contact from "@components/Contact";
import CurrenProjects from "@components/CurrentProjects";
import Intro from "@components/Intro";
import NameCard from "@components/NameCard";

export default function Home() {
  return (
    <>
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
      <CurrenProjects />
      <Contact />
    </>
  );
}
