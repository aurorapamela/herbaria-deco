import Footer from "@/sections/Footer";
import ProductGrid from "@/sections/ProductGrid";
import {useDarkMode} from "@/hooks/useDarkMode";

export default function App() {
  const {dark, setDark} = useDarkMode();

  return (
    <div className="min-h-screen flex flex-col bg-light dark:bg-primary text-primary dark:text-light">
      <ProductGrid dark={dark} setDark={setDark} />
      <Footer dark={dark} />
    </div>
  );
}
