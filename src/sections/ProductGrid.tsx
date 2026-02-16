import ProductCard from "@/components/ProductCard";
import {AnimatePresence, motion} from "framer-motion";
import {MessageCircle} from "lucide-react";
import {SetStateAction, useMemo, useState} from "react";
import {products} from "../data/products";
import {GLOBAL_MESSAGE, PHONE_NUMBER} from "../constants/whatsapp";
import Header from "./Header";

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
    <div>
      <div className="pt-32 px-4">
        <Header
          dark={dark}
          setDark={setDark}
          search={search}
          setSearch={setSearch}
        />
        <div className="grid grid-cols-2 gap-2 mb-4 md:flex md:overflow-x-auto md:pb-2">
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
