import { Companies } from "@interfaces/companies";
import { getCompanie } from "@services/companies";
import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";
import Image from "next/image";
import SkeletonCompanies from "@components/SkeletonCard/SkeletonCompanies";

type IProps = {
  currentThemes: string;
};

export default function Companies({ currentThemes }: IProps) {
  const [companies, setIsCompanies] = useState<Companies[]>([]);
  const [loading, setIsLoading] = useState(true);

  const fetchCompanies = async () => {
    const { result } = await getCompanie();
    if (result) {
      setTimeout(() => {
        setIsLoading(false);
        setIsCompanies(result);
      });
    }
  };

  useAsyncEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonCompanies />
      ) : (
        <>
          {companies.map((item) => (
            <li key={item.id}>
              <Image
                width={100}
                height={100}
                src={`/assets/img/companies/${item.image}`}
                alt={item.name}
                className={`${
                  currentThemes === "light" ? "invert-0" : "invert"
                }`}
              />
            </li>
          ))}
        </>
      )}
    </>
  );
}
