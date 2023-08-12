import Dropdown from "@components/Layout/Dropdown";
import { Pages } from "@interfaces/pages";
import { getPages } from "@services/pages";
import Link from "next/link";
import { useState } from "react";
import useAsyncEffect from "use-async-effect";

export const Navbar = () => {
  const [loading, setIsLoading] = useState(false);
  const [page, setIsPage] = useState<Pages[]>([]);

  const fetchPages = async () => {
    const { result } = await getPages();
    setIsPage(result);
  };

  useAsyncEffect(() => {
    fetchPages();
  }, []);

  return (
    <ul className="m-0 flex flex-row font-medium">
      {page.slice(0, 5).map((item) => (
        <li key={item.id}>
          {item.highlight == "Yes" ? (
            <Link
              className="font-bold ml-2 block leading-5 px-2.5 py-0 text-base tracking-[-0.25px] text-[#a64af1]"
              href={item.slug}
            >
              {item.name}
            </Link>
          ) : (
            <Link
              className="block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer"
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
