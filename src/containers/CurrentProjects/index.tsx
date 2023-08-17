import { useEffect, useState } from "react";
import { Works } from "@interfaces/works";
import { getWorks } from "@services/works";
import useAsyncEffect from "use-async-effect";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import SkeletonCard from "@components/SkeletonCard";

export const CurrenProjects = () => {
  const [works, setIsWorks] = useState<Works[]>([]);
  const [loading, setIsLoading] = useState(true);
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const fetchWorks = async () => {
    const { result } = await getWorks();
    if (result) {
      setTimeout(() => {
        setIsLoading(false);
        setIsWorks(result);
      });
    }
  };

  useAsyncEffect(() => {
    fetchWorks();
  }, []);
  let skeletonCard = [0, 1, 2, 3, 5, 6];
  return (
    <>
      {loading ? (
        skeletonCard.map((index: number) => <SkeletonCard key={index} />)
      ) : (
        <>
          {works
            .filter((item) => item.featured === "Yes")
            .map((item) => (
              <Link
                href={`${item.url}`}
                target="_blank"
                rel="norefere"
                key={item.id}
              >
                <div
                  className={`mb-3 relative cursor-pointer p-3 rounded-3xl max-md:flex max-md:justify-start max-md:webkit-box-align-center max-md:items-center max-md:rounded-[20px] ${
                    currentTheme === "light" ? "workcard" : "workcardDark"
                  } `}
                >
                  <div className="w-full relative rounded-xl max-md:!w-24">
                    <span className="rounded-xl max-md:!w-24">
                      <span className="rounded-xl max-md:!w-24">
                        <Image
                          width={200}
                          height={200}
                          alt="Gradient BG"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27400%27%20height=%27400%27/%3e"
                          className="rounded-xl"
                        />
                      </span>
                      <Image
                        src={`/assets/img/works/${item.thumbnail}`}
                        width={100}
                        height={100}
                        alt={item.title}
                        className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full rounded-xl"
                      />
                    </span>
                    {item.status ? (
                      <div
                        className={`absolute top-2 left-2 font-bold leading-[14px] text-[10px] py-[1px] px-[6px] rounded-lg inline-flex uppercase text-white ${
                          item.status === "UPDATE"
                            ? "bg-pink-400"
                            : "bg-green-700"
                        } max-md:top-[6px] max-md:left-[6px] max-md:text-[9px] max-md:px-1 `}
                      >
                        {item.status}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="flex flex-col mt-[6px] max-md:ml-3 max-md:mr-2 max-md:mb-0">
                    <h3 className="text-base font-bold tracking-[-0.4px] webkit-box-align-center items-center flex mb-1 mx-0 max-md:mt-0 max-md:text-[15px] max-md:tracking-[-0.18px]">
                      {item.title}
                    </h3>
                    <p className="text-[15px] m-0 opacity-60 tracking-[-0.25px] font-normal leading-[140%] max-md:text-sm max-md:tracking-[-0.15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </>
      )}
    </>
  );
};

export default CurrenProjects;
