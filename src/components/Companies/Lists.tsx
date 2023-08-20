import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SkeletonCompanies from "@components/SkeletonCard/SkeletonCompanies";
import fetcher from "@lib/fetcher";
import { Companies } from "@prisma/client";
import useSWR from "swr";

export default function Lists() {
  const { systemTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const { data, error } = useSWR<{ companie: Companies[] }>(
    "/api/companies?limit=8",
    fetcher
  );
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  if (error) return <div>failed to load</div>;
  if (!data) return <SkeletonCompanies />;

  return (
    <>
      {data?.companie
        .filter((item) => item.type === "top")
        .map((item) => (
          <li key={item.id}>
            <Image
              width={100}
              height={100}
              src={`${item.icon}`}
              alt={`${item.name}`}
              className={`${currentTheme === "light" ? "invert-0" : "invert"}`}
            />
          </li>
        ))}
    </>
  );
}
