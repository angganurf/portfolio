import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Dropdown from ".";

export default function s() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <Dropdown />
    </>
  );
}
