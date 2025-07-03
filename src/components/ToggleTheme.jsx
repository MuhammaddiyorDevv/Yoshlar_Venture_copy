import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const dark = !isDark;

    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setIsDark(dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-yellow-300 dark:text-black transition"
    >
      {isDark ? " Light Mode" : " Dark Mode"}
    </button>
  );
}
