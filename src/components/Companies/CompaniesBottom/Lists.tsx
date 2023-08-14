import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Lists() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <ul className="comBottom">
      <li className="leading-[0] py-0 px-1 max-md:m-5">
        <Image
          src="/assets/img/companies/zomato.png"
          alt="Zomato"
          width={100}
          height={22}
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
      <li className="leading-[0] py-0 px-1 max-md:m-5">
        <Image
          src="/assets/img/companies/eversend.png"
          alt="Zomato"
          width={104}
          height={22}
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
      <li className="leading-[0] py-0 px-1 max-md:m-5">
        <Image
          src="/assets/img/companies/stickermule.png"
          alt="Zomato"
          width={143}
          height={22}
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
      <li className="leading-[0] py-0 px-1 max-md:m-5">
        <Image
          src="/assets/img/companies/learnapp.png"
          alt="Zomato"
          width={96}
          height={22}
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
      <li className="leading-[0] py-0 px-1 max-md:m-5">
        <Image
          src="/assets/img/companies/feedly.png"
          alt="Zomato"
          width={66}
          height={22}
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
    </ul>
  );
}
