import PageTitle from "@components/PageTitle";
import SkeletonTitle from "@components/SkeletonCard/SkeletonTitle";
import AllWorks from "@containers/Works";
import { Pages } from "@interfaces/pages";
import { getPages } from "@services/pages";
import React, { useEffect, useState } from "react";

export default function WorksPage() {
  const [pageWork, setIsPageWork] = useState<Pages[]>([]);
  const [loading, setIsLoading] = useState(true);

  const fetchPageWork = async () => {
    const { result } = await getPages();
    if (result) {
      setTimeout(() => {
        setIsLoading(false);
        setIsPageWork(result);
      });
    }
  };

  useEffect(() => {
    fetchPageWork();
  }, []);

  return (
    <div className="py-3 px-0 mt-10 max-md:mt-4">
      {loading ? (
        <SkeletonTitle />
      ) : (
        <>
          {pageWork
            .filter((item) => item.id === 2)
            .map((item) => (
              <PageTitle
                key={item.id}
                className=""
                title={item.meta_title}
                description={item.description}
              />
            ))}
        </>
      )}

      <div
        className="relative grid grid-cols-3 gap-[14px] p-1
      max-md:grid-cols-1 max-md:gap-[10px]"
      >
        <AllWorks />
      </div>
    </div>
  );
}
