import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return <div className="dark:bg-black bg-white"></div>;
}
