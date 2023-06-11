"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

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
          src={resolvedTheme === "light" ? "./icon-moon.svg" : "./icon-sun.svg"}
          alt={resolvedTheme === "light" ? "Dark Mode" : "Light Mode"}
          width={32}
          height={32}
        />
      </button>
    </div>
  );
}

export default ThemeChanger;
