import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Contact() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div
      className={`p-3 ${
        currentTheme === "light" ? "hover-bg" : "hover-bg-dark"
      } flex rounded-3xl mt-[60px] mx-4 mb-1 
    webkit-box-align-center items-center`}
    >
      <div className="p-8 z-[2] max-md:p-3">
        <h2 className="font-bold gradient-retro-2 inline-block text-5xl tracking-[-1px]">
          Say hi!
        </h2>
        <div className="flex mt-3">
          <Link
            href="mailto:angganurf@gmail.com?subject=Saying Hello!!!"
            className="gradient-retro-2 mr-6 text-lg tracking-[-0.32px] font-medium flex webkit-box-align-center items-center max-md:text-base"
          >
            <svg
              width="16"
              height="16"
              fill="#566CEC"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 24 24"
              className="email-icon mr-[6px] max-md:w-[14px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.2 2C1.41665 2 0 3.48152 0 5.25V18.75C0 20.5185 1.41665 22 3.2 22H20.8C22.5834 22 24 20.5185 24 18.75V5.25C24 3.48152 22.5834 2 20.8 2H3.2ZM2.57921 4.18358C2.76312 4.06664 2.97707 4 3.2 4H20.8C21.0226 4 21.2363 4.06645 21.42 4.1831L11.9993 11.7197L2.57921 4.18358ZM2 6.28146V18.75C2 19.4565 2.56335 20 3.2 20H20.8C21.4366 20 22 19.4565 22 18.75V6.28037L12.624 13.7812C12.2588 14.0733 11.7398 14.0733 11.3746 13.7812L2 6.28146Z"></path>
            </svg>
            {process.env.NEXT_PUBLIC_EMAIL}
          </Link>
          <Link
            href="mailto:angganurf@gmail.com?subject=Saying Hello!!!"
            className="gradient-retro-2 mr-6 text-lg tracking-[-0.32px] font-medium flex webkit-box-align-center items-center max-md:text-base"
          >
            <svg
              width="16"
              height="16"
              fill="#566CEC"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 300 300"
              version="1.1"
              className="mr-[6px] max-md:w-[14px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"></path>
            </svg>
            {process.env.NEXT_PUBLIC_NAME}
          </Link>
        </div>
        <p className="text-xl font-normal leading-[140%] my-5 mx-0 tracking-[-0.3px] opacity-80 max-w-[340px] max-md:text-base max-md:pr-5">
          Want to create something awesome? Or, you have any query? Drop an
          email or tweet.
        </p>
        <div className="text-left justify-start m-0 flex webkit-box-pack-center">
          <ul className="flex">
            <li className="m-0">
              <Link
                href=""
                className="rounded-[18px] flex webkit-box-align-center items-center font-medium text-base leading-[20px] relative design-pur hover:opacity-80 transition-all"
              >
                Send Design Proposal
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-right z-[1]">
        <Image
          src="/assets/img/elements/chat.png"
          width={1000}
          height={1000}
          alt="Chat"
          className="transform-chat max-md:hidden"
        />
      </div>
    </div>
  );
}
