import { Companies } from "@interfaces/companies";
import { getCompanie } from "@services/companies";
import React, { useState } from "react";
import useAsyncEffect from "use-async-effect";

type IProps = {
  currentThemes: string;
};

export default function Companies({ currentThemes }: IProps) {
  const [companies, setIsCompanies] = useState<Companies[]>([]);

  const fetchCompanies = async () => {
    const { result } = await getCompanie();
    setIsCompanies(result);
  };

  useAsyncEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      {companies.map((item) => (
        <li>
          <img
            src={`/assets/img/companies/${item.image}`}
            alt={item.name}
            className={`${currentThemes === "light" ? "invert-0" : "invert"}`}
          />
        </li>
      ))}
    </>
  );
}
