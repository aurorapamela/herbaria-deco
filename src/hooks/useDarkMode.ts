import {useEffect, useState} from "react";

export function useDarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") setDark(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("darkMode", String(dark));
  }, [dark]);

  return {dark, setDark};
}
