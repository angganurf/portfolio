import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";

export default function index() {
  return (
    <>
      <header className="bg-[rgba(255,255,255,.3)] dark:bg-[rgba(28,22,47,.3)] p-4 rounded-xl flex flex-row webkit-box-pack-justify justify-between">
        <div className="flex items-center webkit-box-align-center">
          <div className="p-0 font-bold">
            <Link className="leading-[0]" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="20"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                className="handle"
                viewBox="0 0 70 20"
              >
                <path
                  d="M38.507 0L38.5056 16H35.2955L35.2969 0H38.507ZM10.8083 11.2895H19.36C19.428 10.904 19.4734 10.5186 19.4734 10.0877C19.4734 6.75453 17.0916 4.10156 13.7345 4.10156C10.1732 4.10156 7.74609 6.70918 7.74609 10.0877C7.74609 13.4663 10.1505 16.0739 13.9613 16.0739C16.1389 16.0739 17.8402 15.1896 18.9063 13.6477L16.5472 12.2872C16.0482 12.9448 15.1409 13.4209 14.0067 13.4209C12.4642 13.4209 11.2166 12.786 10.8083 11.2895ZM10.763 9.02201C11.1032 7.57082 12.1693 6.73185 13.7345 6.73185C14.9594 6.73185 16.1843 7.38942 16.5472 9.02201H10.763ZM0.422379 5.5658C0.760283 4.97469 1.54168 4.63692 2.72435 4.63692H6.568V7.23358H3.21008V16.0002H0V7.36025C0 6.62136 0.0844758 6.15692 0.422379 5.5658ZM53.5975 17.4874H50.6914V19.9996H54.0832C55.7094 19.9152 56.4063 19.3874 56.6175 18.5852C56.8076 17.9941 56.8076 17.783 56.8076 17.2763L56.8076 4.39111H53.5975L53.5975 17.4874ZM47.5 16H43.5085L39.6797 4.3418H43.1432L44.4315 9.04958L45.424 12.8707H45.5508L46.5434 9.07069L47.8316 4.3418H51.3162L47.5 16ZM29.6662 4.53461V5.84517C28.8662 4.84559 27.6663 4.22363 26.0441 4.22363C23.0887 4.22363 20.6444 6.77811 20.6444 10.0878C20.6444 13.3975 23.0887 15.952 26.0441 15.952C27.6663 15.952 28.8662 15.3301 29.6662 14.3305V15.641H32.5327V4.53461H29.6662ZM26.5774 13.2198C24.822 13.2198 23.5109 11.9537 23.5109 10.0878C23.5109 8.22195 24.822 6.95582 26.5774 6.95582C28.3551 6.95582 29.6662 8.22195 29.6662 10.0878C29.6662 11.9537 28.3551 13.2198 26.5774 13.2198ZM60.2641 17.4621V19.9994H67.4633C68.2325 19.9994 68.8478 19.761 69.3093 19.2843C69.7708 18.823 70.0015 18.2002 70.0015 17.416V4.41797H67.0941V9.58558C67.0941 10.6466 66.848 11.477 66.3557 12.0767C65.8635 12.661 65.1713 12.9532 64.279 12.9532C63.4945 12.9532 62.8869 12.7379 62.4562 12.3073C62.0408 11.8768 61.8332 11.2309 61.8332 10.3698V4.41797H58.9258V10.6005C58.9258 11.5385 59.1104 12.3689 59.4796 13.0916C59.8488 13.8143 60.3641 14.3833 61.0256 14.7985C61.7024 15.1983 62.4869 15.3982 63.3791 15.3982C64.0714 15.3982 64.6405 15.3136 65.0867 15.1444C65.5328 14.9753 65.8866 14.76 66.1481 14.4986C66.4096 14.2372 66.6019 13.9758 66.7249 13.7144H67.1403V16.7702C67.1403 17.2315 66.9249 17.4621 66.4942 17.4621H60.2641Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0 17.4883V20.0005H48.817V17.4883H0Z"
                  fill="url(#paint0_linear_1845_11940)"
                ></path>
                <path
                  d="M56.8077 3.14556H53.5977V0H56.8077V3.14556Z"
                  fill="url(#paint1_linear_1845_11940)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_1845_11940"
                    x1="-1.4851"
                    y1="17.089"
                    x2="49"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#309AFC"></stop>
                    <stop offset="0.333333" stop-color="#5754FF"></stop>
                    <stop offset="0.666667" stop-color="#FF51A4"></stop>
                    <stop offset="1" stop-color="#FF7C51"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1845_11940"
                    x1="53.5"
                    y1="3"
                    x2="56.5"
                    y2="6.48752e-08"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0038FF"></stop>
                    <stop offset="0.5" stop-color="#5754FF"></stop>
                    <stop offset="1" stop-color="#FF51A4"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="ml-2 relative">
            <ul className="m-0 flex flex-row font-medium">
              <li>
                <Link
                  className="font-bold pl-5 block leading-5 px-2.5 py-0 text-base tracking-[-0.25px] text-[#a64af1]"
                  href="/nft"
                >
                  nft
                </Link>
              </li>
              <li>
                <Link
                  className="block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer"
                  href="/work"
                >
                  work
                </Link>
              </li>
              <li>
                <Link
                  className="block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer"
                  href="/timeline"
                >
                  timeline
                </Link>
              </li>
              <li>
                <Link
                  className="block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer"
                  href="/about"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  className="block leading-5 mx-2.5 py-0 text-base tracking-[-0.25px] cursor-pointer"
                  href="/story"
                >
                  story
                </Link>
              </li>
              <li>
                <button
                  className="flex border-none cursor-pointer w-full font-medium leading-5 px-2.5 py-0 text-base webkit-box-align-center items-center tracking-[.25px] bg-none"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="true"
                >
                  more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="8"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="chevron-down r ml-0.5 mt-0.5 scale-50"
                  >
                    <path d="M7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292894 1.70711C-0.0976309 1.31658 -0.0976308 0.683416 0.292894 0.292892C0.683418 -0.0976321 1.31658 -0.0976321 1.70711 0.292892L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.097631 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711Z"></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
