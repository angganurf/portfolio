import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Companies from "@containers/Companies";

export default function Lists() {
  const { systemTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return <Companies currentThemes={`${currentTheme}`} />;
}
