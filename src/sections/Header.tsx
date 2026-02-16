import {motion} from "framer-motion";
import {Moon, Sun} from "lucide-react";
import Logo from "@/assets/logo-desktop.svg?react";

interface HeaderProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
  setSearch: (v: string) => void;
}

export default function Header({
  dark,
  setDark,
  search,
  setSearch,
}: HeaderProps) {
  return (
    <header
      className="
fixed top-0 inset-x-0 z-50
bg-light/90 dark:bg-primary/90
backdrop-blur
border-b border-primary/10 dark:border-secondary/10
"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Search desktop */}
          <motion.input
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
hidden md:block
w-full max-w-xs
px-3 py-2 rounded-xl
border border-primary/20 dark:border-secondary/20
bg-transparent text-sm
focus:outline-none
"
          />

          {/* Logo */}
          <div className="justify-self-start md:justify-self-center">
            <Logo className="h-6 md:h-8 text-primary dark:text-secondary" />
          </div>

          {/* Dark toggle */}
          <div className="justify-self-end">
            <button
              onClick={() => setDark(!dark)}
              className="
p-2 rounded-full
border border-primary dark:border-secondary
text-primary dark:text-secondary
hover:bg-primary hover:text-secondary
dark:hover:bg-secondary dark:hover:text-primary
transition
"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Search mobile */}
        <div className="mt-3 md:hidden">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar..."
            className="
w-full px-4 py-2 rounded-xl
border border-primary/20 dark:border-secondary/20
bg-transparent text-sm
focus:outline-none
"
          />
        </div>
      </div>
    </header>
  );
}
