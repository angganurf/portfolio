import Dropdown from "@components/Layout/Dropdown";
import SkeletonNavbar from "@components/SkeletonCard/SkeletonNavbar";
import { Pages } from "@interfaces/pages";
import { getPages } from "@services/pages";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useAsyncEffect from "use-async-effect";

type IProps = {
  className: string;
};
export const Navbar = ({ className }: IProps) => {
  const [page, setIsPage] = useState<Pages[]>([]);
  const [loading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchPages = async () => {
    const { result } = await getPages();
    if (result) {
      setTimeout(() => {
        setIsLoading(false);
        setIsPage(result);
      });
    }
  };

  useAsyncEffect(() => {
    fetchPages();
  }, []);
  return (
    <>
      {loading ? (
        <SkeletonNavbar />
      ) : (
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
    `}
        >
          {page.slice(0, 5).map((item) => (
            <li key={item.id}>
              {item.highlight == "Yes" ? (
                <Link
                  className="font-bold ml-2 block leading-5 px-2.5 py-0 text-base tracking-[-0.25px] bg-clip-text
                  max-md:text-lg
                  max-md:my-1 hover:opacity-70 transition-all gradient-retro-2"
                  href={item.slug}
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  className={`block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer
              max-md:text-lg
              max-md:my-1 hover:opacity-70 transition-all`}
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
      )}
    </>
  );
};

export default Navbar;
