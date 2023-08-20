import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Inter } from "next/font/google";
import Texture from "../Texture";

type IProps = {
  children: ReactNode;
};
const inter = Inter({ subsets: ["latin"] });
export default function Layout({ children }: IProps) {
  return (
    <>
      <main
        className={`${inter.className} relative min-h-screen 
        before:content-[''] before:absolute before:inset-0 before:z-[-100] 
        before:bg-[url(/assets/img/header-gradient.svg),_url(/assets/img/footer-gradient.svg)] before:bg-[length:1400px] before:bg-no-repeat before:bg-position-xy`}
      >
        <div className="pt-6 w-full relative z-[1]">
          <div className="relative webkit1 md:w-[708px] w-full max-md:px-2">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
        <Texture />
      </main>
    </>
  );
}
