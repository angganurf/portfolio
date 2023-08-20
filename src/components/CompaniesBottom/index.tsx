import Link from "next/link";
import React from "react";
import Lists from "./Lists";

export default function CompaniesBottom() {
  return (
    <div className="my-20 mx-0 max-md:my-10 max-md:mx-4">
      <div className="p-4 relative mb-[54px]">
        <Link
          href="/work"
          className="mt-6 block cursor-pointer max-md:mt-4 companies"
        >
          <h3
            className="gradient-nft max-md:w-[200px] max-md:tracking-[-0.32px]"
            style={{
              transform: "translate(-50%, 5px) scale(0.95)",
              backgroundColor: "#566CEC",
            }}
          >
            crafted for many startup and web3 brands
          </h3>
          <Lists />
        </Link>
      </div>
    </div>
  );
}
