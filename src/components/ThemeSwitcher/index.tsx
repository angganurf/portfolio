import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div>
        {currentTheme === "light" ? (
          <div className="cursor-pointer " onClick={() => setTheme("dark")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="light-mode"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1C11 0.447715 11.4477 0 12 0Z"></path>
              <path d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"></path>
              <path d="M13 21C13 20.4477 12.5523 20 12 20C11.4477 20 11 20.4477 11 21V23C11 23.5523 11.4477 24 12 24C12.5523 24 13 23.5523 13 23V21Z"></path>
              <path d="M3.51289 3.51289C3.90342 3.12237 4.53658 3.12237 4.92711 3.51289L6.34711 4.93289C6.73763 5.32342 6.73763 5.95658 6.34711 6.34711C5.95658 6.73763 5.32342 6.73763 4.93289 6.34711L3.51289 4.92711C3.12237 4.53658 3.12237 3.90342 3.51289 3.51289Z"></path>
              <path d="M19.0671 17.6529C18.6766 17.2624 18.0434 17.2624 17.6529 17.6529C17.2624 18.0434 17.2624 18.6766 17.6529 19.0671L19.0729 20.4871C19.4634 20.8776 20.0966 20.8776 20.4871 20.4871C20.8776 20.0966 20.8776 19.4634 20.4871 19.0729L19.0671 17.6529Z"></path>
              <path d="M0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1C0.447715 13 0 12.5523 0 12Z"></path>
              <path d="M21 11C20.4477 11 20 11.4477 20 12C20 12.5523 20.4477 13 21 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H21Z"></path>
              <path d="M6.34711 17.6529C6.73763 18.0434 6.73763 18.6766 6.34711 19.0671L4.92711 20.4871C4.53658 20.8776 3.90342 20.8776 3.51289 20.4871C3.12237 20.0966 3.12237 19.4634 3.51289 19.0729L4.93289 17.6529C5.32342 17.2624 5.95658 17.2624 6.34711 17.6529Z"></path>
              <path d="M20.4871 4.92711C20.8776 4.53658 20.8776 3.90342 20.4871 3.51289C20.0966 3.12237 19.4634 3.12237 19.0729 3.51289L17.6529 4.93289C17.2624 5.32342 17.2624 5.95658 17.6529 6.34711C18.0434 6.73763 18.6766 6.73763 19.0671 6.34711L20.4871 4.92711Z"></path>
            </svg>
          </div>
        ) : (
          <div className="cursor-pointer" onClick={() => setTheme("light")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="light-mode"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fillRule="nonzero"
                  d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z"
                />
              </g>
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
