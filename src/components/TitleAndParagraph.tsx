import React, { ReactNode } from "react";

type IProps = {
  title?: string;
  paragraph?: string;
  classNameTittle?: string;
  classNameParagraph?: string;
  children?: ReactNode;
};

export default function TitleAndParagraph({
  title,
  paragraph,
  classNameTittle,
  classNameParagraph,
  children,
}: IProps) {
  return (
    <>
      <h2
        className={`font-semibold px-4 text-[14px] m-0 uppercase tracking-[2px] text-gray-500 opacity-70 max-md:text-[12px] ${classNameTittle}`}
      >
        {title}
      </h2>
      <p
        className={`text-[16px] my-3 px-4 leading-[150%] tracking-[-0.25px] max-md:text-[15px] max-md:tracking[-0.18px] ${classNameParagraph}`}
      >
        {paragraph}
        {children}
      </p>
    </>
  );
}
