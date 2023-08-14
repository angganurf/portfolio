import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
export default function Logo() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Link className="leading-[0]" href="/">
      {currentTheme === "light" ? (
        <Image
          src="/angganurf.png"
          width={100}
          height={0}
          alt="angga nurfaisal"
        />
      ) : (
        <Image
          src="/angganurf-white.png"
          width={100}
          height={0}
          alt="angga nurfaisal"
        />
      )}
    </Link>
  );
}
