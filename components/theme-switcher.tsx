"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import sunIcon from "../public/icon-sun.svg";
import moonIcon from "../public/icon-moon.svg";

function ThemeChanger() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="absolute right-4 top-8 lg:right-12">
      {/* The current theme is: {theme} */}
      <button type="button" onClick={toggleTheme}>
        <span className="sr-only">
          {resolvedTheme === "light" ? "Dark Mode" : "Light Mode"}
        </span>
        <Image
          src={resolvedTheme === "light" ? moonIcon : sunIcon}
          alt={resolvedTheme === "light" ? "Dark Mode" : "Light Mode"}
        />
      </button>
    </div>
  );
}

export default ThemeChanger;
