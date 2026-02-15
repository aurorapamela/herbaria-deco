import ProductCard from "@/components/ProductCard";
import {AnimatePresence, motion} from "framer-motion";
import {MessageCircle, Moon, Sun} from "lucide-react";
import {useMemo, useState} from "react";
import {products} from "../data/products";
import {GLOBAL_MESSAGE, PHONE_NUMBER} from "../constants/whatsapp";

interface ProductGridProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductGrid({dark, setDark}: ProductGridProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

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

  return (
    <div
    // className="max-w-md mx-auto px-4 py-4"
    >
      <div className="mx-auto px-4 py-4">
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
          className="w-96 mb-4 px-4 py-3 rounded-2xl border border-primary/20 dark:border-secondary/20 bg-light dark:bg-primary dark:text-secondary focus:outline-none"
        />

        <div className="flex gap-2 overflow-x-auto mb-4 pb-2">
          {categories.map((cat: string) => (
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>
      </div>
      <a
        href={`https://wa.me/${PHONE_NUMBER}?text=${GLOBAL_MESSAGE}`}
        target="_blank"
        className="
fixed bottom-4 right-4 z-40
w-12 h-12
rounded-full
flex items-center justify-center
bg-primary text-secondary
dark:bg-secondary dark:text-primary
shadow-lg
"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
