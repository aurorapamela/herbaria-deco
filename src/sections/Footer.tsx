import {motion, useScroll, useTransform} from "framer-motion";
import {InstagramIcon, MessageCircle} from "lucide-react";
import {GLOBAL_MESSAGE, PHONE_NUMBER} from "../constants/whatsapp";

interface FooterProps {
  dark: boolean;
}

export default function Footer({dark}: FooterProps) {
  const {scrollY} = useScroll();
  const rotateOnScroll = useTransform(scrollY, [0, 300], [0, 6]);

  return (
    <footer className="mt-8 border-t border-primary/20 dark:border-secondary/20 py-6">
      <div className="max-w-md mx-auto px-4 flex flex-col items-center gap-2 text-xs text-primary/70 dark:text-secondary/70">
        <motion.img
          src={dark ? "/leaf-light.svg" : "/leaf-dark.svg"}
          alt="Herbaria"
          className="w-6 opacity-90 select-none"
          style={{rotate: rotateOnScroll}}
          animate={{scale: [1, 1.05, 1]}}
          whileHover={{
            rotate: 10,
            scale: 1.2,
          }}
          transition={{
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        <p>© {new Date().getFullYear()} Herbaria Deco</p>

        <p className="text-center">
          Hecho a mano · Producción artesanal · Lanús · Buenos Aires
        </p>

        <div className="flex gap-5 pt-2">
          <a
            href="https://instagram.com/herbaria.deco"
            target="_blank"
            rel="noopener noreferrer"
            className="
      p-2 rounded-full
      border border-primary/30 dark:border-secondary/30
      text-primary dark:text-secondary
      hover:bg-primary hover:text-secondary
      dark:hover:bg-secondary dark:hover:text-primary
      transition
    "
          >
            <InstagramIcon size={16} strokeWidth={1.5} />
          </a>
          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${GLOBAL_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
      p-2 rounded-full
      border border-primary/30 dark:border-secondary/30
      text-primary dark:text-secondary
      hover:bg-primary hover:text-secondary
      dark:hover:bg-secondary dark:hover:text-primary
      transition
    "
          >
            <MessageCircle size={16} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
