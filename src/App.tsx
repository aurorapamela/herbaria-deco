import LeafFollower from "@/components/LeafFollower";
import {useState, useEffect} from "react";
import Footer from "@/sections/Footer";
import ProductGrid from "@/sections/ProductGrid";

export default function App() {
  const [dark, setDark] = useState(false);

  // Persist dark mode
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") setDark(true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", dark);
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col bg-light dark:bg-primary text-primary dark:text-light">
      <LeafFollower />
      <ProductGrid dark={dark} setDark={setDark} />
      <Footer dark={dark} />
    </div>
  );
}
