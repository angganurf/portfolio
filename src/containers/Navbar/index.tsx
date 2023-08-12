import Dropdown from "@components/Layout/Dropdown";
import { Pages } from "@interfaces/pages";
import { getPages } from "@services/pages";
import Link from "next/link";
import { useState } from "react";
import useAsyncEffect from "use-async-effect";

type IProps = {
  className: string;
};
export const Navbar = ({ className }: IProps) => {
  const [page, setIsPage] = useState<Pages[]>([]);

  const fetchPages = async () => {
    const { result } = await getPages();
    setIsPage(result);
  };

  useAsyncEffect(() => {
    fetchPages();
  }, []);

  return (
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
    `}
    >
      {page.slice(0, 5).map((item) => (
        <li key={item.id}>
          {item.highlight == "Yes" ? (
            <Link
              className="font-bold ml-2 block leading-5 px-2.5 py-0 text-base tracking-[-0.25px] text-[#a64af1]
              max-md:text-lg
              max-md:my-1
              "
              href={item.slug}
            >
              {item.name}
            </Link>
          ) : (
            <Link
              className="block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer
              max-md:text-lg
              max-md:my-1
              "
              href={item.slug}
            >
              {item.name}
            </Link>
          )}
        </li>
      ))}
      <>
        <li>
          <Dropdown />
        </li>
      </>
    </ul>
  );
};

export default Navbar;
