import {useEffect, useState} from "react";
import {ChevronUp} from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
fixed bottom-20 right-4 z-40
w-8 h-8 rounded-full
flex items-center justify-center
dark:border border-secondary/30  
bg-secondary/70 dark:bg-light/50
text-primary/50 dark:text-primary
shadow-md
hover:scale-105 transition
"
    >
      <ChevronUp size={16} />
    </button>
  );
}
