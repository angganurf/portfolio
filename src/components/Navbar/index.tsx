import Dropdown from "@components/Dropdown";
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
        <li>
          <Link
            className="font-bold ml-2 block leading-5 px-2.5 py-0 text-base tracking-[-0.25px] bg-clip-text
                  max-md:text-lg
                  max-md:my-1 hover:opacity-70 transition-all gradient-retro-2"
            href="/nft"
            onClick={onClick}
          >
            nft
          </Link>
        </li>

        <li>
          <Link
            className={`block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer
              max-md:text-lg
              max-md:my-1 hover:opacity-70 transition-all`}
            href="/work"
            onClick={onClick}
          >
            work
          </Link>
        </li>
        <li>
          <Link
            className={`block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer
              max-md:text-lg
              max-md:my-1 hover:opacity-70 transition-all`}
            href="/timeline"
            onClick={onClick}
          >
            timeline
          </Link>
        </li>
        <li>
          <Link
            className={`block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer
              max-md:text-lg
              max-md:my-1 hover:opacity-70 transition-all`}
            href="/about"
            onClick={onClick}
          >
            about
          </Link>
        </li>

        <li>
          <Dropdown />
        </li>
      </ul>
    </>
  );
};

export default Navbar;
