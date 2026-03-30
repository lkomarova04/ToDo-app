import { useState, useEffect } from "react";

const useThemeLocalStorage = () => {
  const [theme, setTheme] = useState<"" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved as "" | "dark";

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "" : "dark"));
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return {toggleTheme};
};

export default useThemeLocalStorage;
