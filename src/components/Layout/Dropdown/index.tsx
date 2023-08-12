import { Menu, Transition } from "@headlessui/react";
import { Pages } from "@interfaces/pages";
import { getPages } from "@services/pages";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import useAsyncEffect from "use-async-effect";

export default function index() {
  const [page, setIsPage] = useState<Pages[]>([]);

  const fetchPages = async () => {
    const { result } = await getPages();
    setIsPage(result);
  };

  useAsyncEffect(() => {
    fetchPages();
  }, []);
  return (
    <>
      <Menu as="div">
        <Menu.Button
          className="flex border-none cursor-pointer w-full font-medium leading-5 px-2.5 py-0 text-base webkit-box-align-center items-center tracking-[.25px] bg-none"
          type="button"
          aria-haspopup="menu"
          aria-expanded="true"
        >
          more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chevron-down r ml-0.5 mt-0.5 scale-50"
          >
            <path d="M7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292894 1.70711C-0.0976309 1.31658 -0.0976308 0.683416 0.292894 0.292892C0.683418 -0.0976321 1.31658 -0.0976321 1.70711 0.292892L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.097631 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711Z"></path>
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`flex absolute right-0 left-auto text-[0.875rem] z-[9999] w-[8rem] list-none rounded-[0.5rem] flex-col gap-y-3 mt-4 bg-slate-50 shadow-sm py-3 transition-all overflow-hidden`}
          >
            {page.slice(5, 6).map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <Link
                    className={`${
                      active
                        ? "bg-slate-50 text-black cursor-pointer"
                        : "opacity-70"
                    } items-left  px-4 dark:text-black `}
                    href={item.slug}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
