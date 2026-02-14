import {useState, useMemo} from "react";
import {motion} from "framer-motion";
import {ChevronDown} from "lucide-react";

const phoneNumber = "5491162625807";

export default function ProductCard({product, view}) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = product.image;

  const groupedImages = useMemo(() => {
    return images.reduce((acc, img) => {
      if (!acc[img.color]) acc[img.color] = [];
      acc[img.color].push(img);
      return acc;
    }, {});
  }, [images]);

  const colorKeys = Object.keys(groupedImages);
  const [selectedColor, setSelectedColor] = useState(colorKeys[0]);

  const filteredImages = groupedImages[selectedColor];

  const message = encodeURIComponent(
    `Hola! 👋
Estoy interesada en:
🛍️ ${product.name}
💲 $${product.price.toLocaleString("es-AR")}
Color: ${selectedColor}
¿Sigue disponible?`,
  );

  const isList = view === "list";
  const isCompact = view === "compact";

  return (
    <>
      <motion.div
        layout
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.3}}
        className="border border-primary/10 dark:border-secondary/10 rounded-2xl overflow-hidden"
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
                src={filteredImages[currentImage].src}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage((prev) =>
                    prev === 0 ? filteredImages.length - 1 : prev - 1,
                  );
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-light/80 dark:bg-primary/80 rounded-full px-2"
              >
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage((prev) =>
                    prev === filteredImages.length - 1 ? 0 : prev + 1,
                  );
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-light/80 dark:bg-primary/80 rounded-full px-2"
              >
                ›
              </button>
            </div>

            {product.offer && (
              <span className="absolute top-3 right-3 border border-tertiary rounded-full text-xs px-2 py-1 uppercase tracking-widest bg-light text-tertiary">
                Oferta
              </span>
            )}
          </div>
        )}

        <div className="px-5 pt-3">
          <label className="text-xs uppercase tracking-wide opacity-50">
            Color
          </label>

          <div className="relative mt-1">
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border"
              style={{backgroundColor: selectedColor}}
            />
            <div className="relative w-full">
              <select
                value={selectedColor}
                onChange={(e) => {
                  setSelectedColor(e.target.value);
                  setCurrentImage(0);
                }}
                className="
      w-full
      appearance-none
      pl-8 pr-12 py-2
      border border-primary/20
      rounded-xl
      text-sm
      bg-transparent
      focus:border-primary
      outline-none
    "
              >
                {colorKeys.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={16}
                className="
      pointer-events-none
      absolute
      right-4
      top-1/2
      -translate-y-1/2
      text-primary/90
    "
              />
            </div>
          </div>
        </div>

        <div
          className={`
            ${isList ? "w-full p-5 flex flex-col justify-center" : "p-5"}
            ${isCompact ? "p-3" : ""}
            space-y-2
          `}
        >
          <h2 className="font-medium text-lg">{product.name}</h2>

          <p className="text-sm opacity-60">{product.title}</p>

          <div className="text-sm opacity-60">
            {product.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <p className="text-sm">{product.conditions}</p>

          <p className="font-semibold pb-2">
            ${product.price.toLocaleString("es-AR")}
          </p>

          {!isCompact && product.status !== "sold" && (
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border py-2 rounded-full hover:bg-primary hover:text-secondary transition text-sm"
            >
              Consultar
            </a>
          )}
        </div>
      </motion.div>

      {open && (
        <div className="fixed inset-0 bg-secondary/95 flex items-center justify-center z-50">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage((prev) =>
                prev === 0 ? filteredImages.length - 1 : prev - 1,
              );
            }}
            className="absolute left-6 text-3xl"
          >
            ‹
          </button>

          <img
            src={filteredImages[currentImage].src}
            alt={product.name}
            className="max-h-[85%] max-w-[90%] object-contain"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage((prev) =>
                prev === filteredImages.length - 1 ? 0 : prev + 1,
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
