import Link from "next/link";
import React from "react";

type IProps = {
  name?: string;
  url: string;
  className?: string;
  onClick: () => void;
};

export default function ListsNavbar({ name, url, className, onClick }: IProps) {
  return (
    <li>
      <Link
        className={`block leading-5 py-0 text-base tracking-[-0.25px] cursor-pointer
        max-md:text-lg
        max-md:my-1 hover:opacity-70 transition-all ${className}`}
        href={url}
        onClick={onClick}
      >
        {name}
      </Link>
    </li>
  );
}
