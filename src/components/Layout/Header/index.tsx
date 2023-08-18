import Navbar from "@containers/Navbar";
import ThemeSwitcher from "../../ThemeSwitcher";
import SocialIcons from "@components/SocialIcons";
import Logo from "@components/Logo";
import Hamburger from "../Hamburger";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
  document.body.style.overflow = "";
  }, [asPath]);

  const handleButton = () => {
    setShowNav(!showNav);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <header className="bg-[rgba(255,255,255,.3)] dark:bg-[rgba(28,22,47,.3)] p-4 rounded-xl flex flex-row webkit-box-pack-justify justify-between max-md:mx-3 ">
        <div className="flex items-center webkit-box-align-center">
          <div className="p-0 font-bold">
            <Logo />
          </div>
          <div className="ml-2 relative">
            <Navbar
              className={`${
                showNav ? "max-md:right-0" : "max-md:right-[-388px]"
              }`}
            />
          </div>
        </div>
        <div className="flex items-center webkit-box-align-center">
          <div className="flex items-center webkit-box-align-center mr-3 border-r-[1px] border-r-[rgba(48,52,77,.1)] dark:border-r-[rgba(255,255,255,.1)]">
            <SocialIcons />
          </div>
          <div className="flex webkit-box-align-center items-center z-0">
            <ThemeSwitcher />
          </div>
          <Hamburger onClick={() => handleButton()}>
            {!showNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </Hamburger>
        </div>
      </header>
    </>
  );
}
