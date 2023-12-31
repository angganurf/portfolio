import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function NameCard() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <h1>
        {currentTheme === "light" ? (
          <Image
            src="/angganurfaisal.png"
            width={180}
            height={0}
            alt="angga nurfaisal"
            className="w-[70.5%]"
          />
        ) : (
          <Image
            src="/angganurfaisal-white.png"
            width={180}
            height={0}
            alt="angga nurfaisal"
            className="w-[70.5%]"
          />
        )}
      </h1>
      <Link
        className="flex py-[6px] font-semibold text-base text-[rgba(84,99,128,0.6)] dark:text-[rgba(114,120,136,.6)] max-md:text-[15px] tracking-[-0.28px]"
        href={`${process.env.NEXT_PUBLIC_X_LINK}`}
        target="_blank"
      >
        {`${process.env.NEXT_PUBLIC_X_HANDLE}`}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="scale-75"
          viewBox="0 0 20 20"
        >
          <path d="M5.83366 5C5.37343 5 5.00033 5.3731 5.00033 5.83333C5.00033 6.29357 5.37343 6.66667 5.83366 6.66667V5ZM14.167 5.83333H15.0003C15.0003 5.3731 14.6272 5 14.167 5V5.83333ZM13.3337 14.1667C13.3337 14.6269 13.7068 15 14.167 15C14.6272 15 15.0003 14.6269 15.0003 14.1667H13.3337ZM4.41108 14.4108C4.08563 14.7362 4.08563 15.2638 4.41108 15.5893C4.73651 15.9147 5.26415 15.9147 5.58958 15.5893L4.41108 14.4108ZM5.83366 6.66667H14.167V5H5.83366V6.66667ZM13.3337 5.83333V14.1667H15.0003V5.83333H13.3337ZM13.5777 5.24408L4.41108 14.4108L5.58958 15.5893L14.7562 6.42258L13.5777 5.24408Z"></path>
        </svg>
      </Link>
    </>
  );
}
