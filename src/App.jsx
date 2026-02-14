import {useState, useMemo, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {products} from "./data/products";
import ProductCard from "./components/ProductCard";
import {LayoutGrid, List, Grid2X2, Sun, Moon} from "lucide-react";

const phoneNumber = "+5491123855226";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [dark, setDark] = useState(false);
  const [view, setView] = useState("cards"); // cards | list | compact

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

  const categories = ["Todos", ...new Set(products.map((p) => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "Todos" || product.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  const globalMessage = encodeURIComponent(
    "Hola! Estoy viendo tu página de venta por mudanza 😊",
  );

  return (
    <div className="min-h-screen bg-light dark:bg-primary text-primary dark:text-light transition-colors duration-300">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold dark:text-secondary">
              Herbaria - Catálogo
            </h1>
            <button
              onClick={() => setDark(!dark)}
              className="
    p-2 rounded-full
    border border-primary dark:border-secondary
    text-primary dark:text-secondary
    transition
    hover:bg-primary hover:text-secondary
    dark:hover:bg-secondary dark:hover:text-primary
  "
            >
              {dark ? (
                <Sun size={18} strokeWidth={2} />
              ) : (
                <Moon size={18} strokeWidth={2} />
              )}
            </button>
          </div>

          <motion.input
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            type="text"
            placeholder="Buscar artículo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-2xl border border-primary/20 dark:border-secondary/20 bg-light dark:bg-primary dark:text-secondary focus:outline-none"
          />

          <div className="flex gap-2 overflow-x-auto mb-4 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-2.5 py-0.5 rounded-full text-[11px] tracking-wide secondaryspace-nowrap transition
    ${
      category === cat
        ? "bg-primary text-secondary dark:bg-secondary dark:text-primary"
        : "border border-primary/30 dark:border-secondary/30 dark:text-secondary"
    }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="md:hidden flex justify-end gap-6 mb-6">
            <button
              onClick={() => setView("cards")}
              className={`p-2 rounded-full transition ${
                view === "cards"
                  ? "bg-primary text-secondary dark:bg-secondary dark:text-primary"
                  : "text-primary/40 dark:text-secondary/40"
              }`}
            >
              <LayoutGrid size={20} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-full transition ${
                view === "list"
                  ? "bg-primary text-secondary dark:bg-secondary dark:text-primary"
                  : "text-primary/40 dark:text-secondary/40"
              }`}
            >
              <List size={20} />
            </button>

            <button
              onClick={() => setView("compact")}
              className={`p-2 rounded-full transition ${
                view === "compact"
                  ? "bg-primary text-secondary dark:bg-secondary dark:text-primary"
                  : "text-primary/40 dark:text-secondary/40"
              }`}
            >
              <Grid2X2 size={20} />
            </button>
          </div>

          <div
            className={`
              ${
                view === "compact"
                  ? "grid grid-cols-2 gap-3"
                  : view === "cards"
                    ? "grid grid-cols-1 gap-6"
                    : "flex flex-col gap-4"
              }
            `}
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} view={view} />
              ))}
            </AnimatePresence>
          </div>
        </div>
        <a
          href={`https://wa.me/${phoneNumber}?text=${globalMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 border border-primary dark:border-secondary w-14 h-14 rounded-full flex items-center justify-center text-primary dark:text-secondary hover:bg-primary hover:text-secondary dark:hover:bg-secondary dark:hover:text-primary transition"
        >
          💬
        </a>
      </div>
    </div>
  );
}
