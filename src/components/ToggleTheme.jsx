import { useEffect } from "react";

export default function ToggleTheme() {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-yellow-300 dark:text-black transition"
    >
      Dark Mode
    </button>
  );
}
