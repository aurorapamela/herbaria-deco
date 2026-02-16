import {Instagram} from "lucide-react";

export default function FollowUs() {
  return (
    <section className="mt-8 py-8 dark:bg-primary bg-secondary">
      <div className="max-w-md mx-auto px-4 text-center">
        <a
          href="https://instagram.com/herbaria.deco"
          target="_blank"
          rel="noopener noreferrer"
          className="
inline-flex items-center gap-2
text-primary dark:text-secondary
hover:opacity-70 transition
"
        >
          <Instagram size={18} strokeWidth={1.5} />
          <span className="font-medium">@herbaria.deco</span>
        </a>
        <p className="uppercase tracking-widest text-xs text-primary/60 dark:text-secondary/60">
          Seguinos
        </p>
      </div>
    </section>
  );
}
