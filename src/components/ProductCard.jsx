import {useState} from "react";
import {motion} from "framer-motion";

const phoneNumber = "5491162625807";

export default function ProductCard({product, view}) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const message = encodeURIComponent(
    `Hola! 👋

Estoy interesada en:

🛍️ ${product.name}
📝 ${product.description}
💲 $${product.price.toLocaleString("es-AR")}

¿Sigue disponible?`,
  );

  const isList = view === "list";
  const isCompact = view === "compact";

  const images = product.image;

  return (
    <>
      <motion.div
        layout
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.3}}
        className={`
          border border-primary/10 dark:border-secondary/10
          rounded-2xl overflow-hidden
        `}
      >
        {!isList && (
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setCurrentImage(0);
              setOpen(true);
            }}
          >
            <div className="aspect-square w-full relative">
              <img
                src={images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl"
              />

              {/* Left */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1,
                  );
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-light/80 dark:bg-primary/80 rounded-full px-2"
              >
                ‹
              </button>

              {/* Right */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1,
                  );
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-light/80 dark:bg-primary/80 rounded-full px-2"
              >
                ›
              </button>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === currentImage ? "bg-primary" : "bg-light/60"
                  }`}
                />
              ))}
            </div>

            {product.offer && (
              <span className="absolute top-3 right-3 border border-tertiary rounded-full dark:border-tertiary text-xs px-2 py-1 uppercase tracking-widest bg-light dark:bg-primary text-tertiary dark:text-secondary">
                Oferta
              </span>
            )}
          </div>
        )}

        <div
          className={`
            ${isList ? "w-full p-5 flex flex-col justify-center" : "p-5"}
            ${isCompact ? "p-3" : ""}
            space-y-2
          `}
        >
          <h2 className="text-primary dark:text-secondary font-medium text-lg">
            {product.name}
          </h2>

          <p className="text-sm text-primary/60 dark:text-secondary/60">
            {product.title}
          </p>

          <div className="text-sm text-primary/60 dark:text-secondary/60">
            {product.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <p className="text-sm text-tertiary dark:text-tertiary/60">
            {product.conditions}
          </p>

          <p className="font-semibold text-primary dark:text-secondary pb-2">
            ${product.price.toLocaleString("es-AR")}
          </p>

          {!isCompact && product.status !== "sold" && (
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-primary dark:border-secondary py-2 rounded-full hover:bg-primary hover:text-secondary dark:hover:bg-secondary dark:hover:text-primary transition duration-300 text-sm"
            >
              Consultar
            </a>
          )}
        </div>
      </motion.div>

      {open && (
        <div className="fixed inset-0 bg-secondary/95 dark:bg-primary/95 flex items-center justify-center z-50">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage((prev) =>
                prev === 0 ? images.length - 1 : prev - 1,
              );
            }}
            className="absolute left-6 text-3xl"
          >
            ‹
          </button>

          <img
            src={images[currentImage]}
            alt={product.name}
            className="max-h-[85%] max-w-[90%] object-contain"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1,
              );
            }}
            className="absolute right-6 text-3xl"
          >
            ›
          </button>

          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 -z-10"
          />
        </div>
      )}
    </>
  );
}
