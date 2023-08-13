import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function Lists() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <li>
        <img
          src="/assets/img/companies/figma.png"
          alt="Figma"
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
      <li>
        <img
          src="/assets/img/companies/producthunt.png"
          alt="Product Hunt"
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
      <li>
        <img
          src="/assets/img/companies/gaga.png"
          alt="Gaga"
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
      <li>
        <img
          src="/assets/img/companies/abdz.png"
          alt="Abdz"
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
      <li>
        <img
          src="/assets/img/companies/dribble.png"
          alt="Dribble"
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
      <li>
        <img
          src="/assets/img/companies/adobe.png"
          alt="Adobe"
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
      <li>
        <img
          src="/assets/img/companies/lapa.png"
          alt="Lapa"
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
      <li>
        <img
          src="/assets/img/companies/one-page-love.png"
          alt="One Page Love"
          className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
        />
      </li>
    </>
  );
}
