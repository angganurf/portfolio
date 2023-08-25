import React, { ReactNode } from "react";
import Image from "next/image";

type IProps = {
  children: ReactNode;
  width?: number;
  height?: number;
  src?: string;
  className?: string;
  classNameImg?: string;
  alt?: string;
};

export default function ImageSpan({
  children,
  width,
  height,
  src,
  className,
  classNameImg,
  alt,
}: IProps) {
  return (
    <span className={`${className}`}>
      <span className="span-1">
        <span className="span-2">
          <Image
            width={width}
            height={height}
            alt={`${alt}`}
            src={`${src}`}
            className={`span-img ${classNameImg}`}
          />
        </span>

        {children}
      </span>
    </span>
  );
}
