import { IGetWorksResponse } from "@interfaces/api/works";
import { Works } from "@interfaces/works";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import WorksPage from "@components/WorksPage";
import PageTitle from "@components/PageTitle";

interface Props {
  data: IGetWorksResponse;
}

const Worksed: React.FC<Props> = ({ data }) => {
  return (
    <div className="py-3 px-0 mt-10 max-md:mt-4">
      <PageTitle
        title="Works"
        description="It has been an absolute pleasure to put my heart and soul into these projects. While you're here, browse these projects."
      />
      <div
        className="relative grid grid-cols-3 gap-[14px] p-1
  max-md:grid-cols-1 max-md:gap-[10px]"
      >
        {data.result.map((item: Works) => (
          <WorksPage item={item} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/works`
    );
    const responseData = await response.json();
    const data: Props = responseData.data; // Assuming the JSON structure matches

    return {
      props: {
        data,
      },
    };
  } catch (error: unknown) {
    console.error("Error fetching data:", error as Error);
    return {
      props: {
        data: {
          result: [],
          totalPage: 0,
        },
      },
    };
  }
};

export default Worksed;
