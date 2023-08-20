import SkeletonCard from "@components/SkeletonCard";
import fetcher from "@lib/fetcher";
import { Timeline } from "@prisma/client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function TimelinePage() {
  const { systemTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const { data, error } = useSWR<{ work: Timeline[] }>(
    "/api/timeline?limit=10",
    fetcher
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  let skeletonCard = [0, 1, 2, 3, 5, 6];
  if (error) return <div>failed to load</div>;
  if (!data)
    return skeletonCard.map((index: number) => <SkeletonCard key={index} />);

  return (
    <div className="pt-[60px] max-md:pt-[16px]">
      <div></div>
    </div>
  );
}
