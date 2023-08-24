import Dropdown from "@components/Dropdown";
import ListsNavbar from "@components/ListsNavbar";
import SkeletonNavbar from "@components/SkeletonCard/SkeletonNavbar";

import Link from "next/link";

type IProps = {
  className: string;
  onClick: () => void;
};
export const Navbar = ({ className, onClick }: IProps) => {
  return (
    <>
      <ul
        className={`m-0 flex flex-row font-medium 
              max-md:bg-[#FFF4F6]
                max-md:dark:bg-[rgba(28,22,47,.3)]
                max-md:backdrop-blur-md
                max-md:transition-all
                max-md:shadow-sm
                max-md:flex 
                max-md:flex-col 
                max-md:items-end 
                max-md:fixed
                max-md:w-[250px] 
                ${className} 
                max-md:top-0
                max-md:px-6 max-md:py-24
                max-md:h-[100vh]
                max-md:overflow-hidden
                max-md:gap-2
                max-md:z-10
                scroll-smooth
                closing
    `}
      >
        <ListsNavbar
          name="nft"
          url="/nft"
          onClick={onClick}
          className="bg-clip-text ml-2 font-bold gradient-retro-2 px-2.5"
        />

        <ListsNavbar
          name="work"
          url="/work"
          onClick={onClick}
          className="mx-2.5"
        />

        <ListsNavbar
          name="timeline"
          url="/timeline"
          onClick={onClick}
          className="mx-2.5"
        />
        <ListsNavbar
          name="about"
          url="/about"
          onClick={onClick}
          className="mx-2.5"
        />
        <ListsNavbar
          name="blog"
          url="/blog"
          onClick={onClick}
          className="mx-2.5"
        />
        <ListsNavbar
          name="supporters"
          url="/thanks"
          onClick={onClick}
          className="mx-2.5 hidden max-md:block"
        />
        <ListsNavbar
          name="bookshelf"
          url="/book"
          onClick={onClick}
          className="mx-2.5 hidden max-md:block"
        />
        <ListsNavbar
          name="tech stack"
          url="/stack"
          onClick={onClick}
          className="mx-2.5 hidden max-md:block"
        />
        <ListsNavbar
          name="photos"
          url="https://instagram.com/angganurfaisal"
          onClick={onClick}
          className="mx-2.5 hidden max-md:block"
        />
        <ListsNavbar
          name="links"
          url="/links"
          onClick={onClick}
          className="mx-2.5 hidden max-md:block"
        />
        <Dropdown />
      </ul>
    </>
  );
};

export default Navbar;
