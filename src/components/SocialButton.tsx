import Link from "next/link";
import React from "react";
type IProps = {
  url: string;
  name: string;
  children: React.ReactNode;
  className?: string;
};
export default function SocialButton({
  url,
  name,
  children,
  className,
}: IProps) {
  return (
    <li className="m-[6px]">
      <Link href={url} className={className} target="_blank">
        {children}
        {name}
      </Link>
    </li>
  );
}
