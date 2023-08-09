import Link from "next/link";
import React from "react";

export default function Lists() {
  return (
    <ul className="m-0 flex flex-row font-medium">
      <li>
        <Link
          className="font-bold pl-5 block leading-5 px-2.5 py-0 text-base tracking-[-0.25px] text-[#a64af1]"
          href="/nft"
        >
          nft
        </Link>
      </li>
      <li>
        <Link
          className="block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer"
          href="/work"
        >
          work
        </Link>
      </li>
      <li>
        <Link
          className="block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer"
          href="/timeline"
        >
          timeline
        </Link>
      </li>
      <li>
        <Link
          className="block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer"
          href="/about"
        >
          about
        </Link>
      </li>
      <li>
        <Link
          className="block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer"
          href="/story"
        >
          story
        </Link>
      </li>
      <li>
        <button
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
        </button>
      </li>
    </ul>
  );
}
