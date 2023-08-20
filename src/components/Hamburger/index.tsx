import React, { ReactNode } from "react";

type IProps = {
  onClick: () => void;
  children: ReactNode;
};
export default function Hamburger({ onClick, children }: IProps) {
  return (
    <div
      className="space-y-1 p-0 flex md:hidden ml-[12px] cursor-pointer z-20"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
