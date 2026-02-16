import {useState, useMemo} from "react";
import {motion} from "framer-motion";
import {ChevronDown} from "lucide-react";
import {Product} from "@/types/product";
import {PHONE_NUMBER} from "../constants/whatsapp";
import {COLOR_MAP} from "@/constants/colors";

interface ProductCardProps {
  product: Product;
  view?: string;
}

export default function ProductCard({product}: ProductCardProps) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedPack, setSelectedPack] = useState(product.packs[0]);

  const fullName = `${product.name}`;
  const fullTitle = `Pack de ${selectedPack.qty} unidades`;

  const images = product.image;

  const groupedImages = useMemo(() => {
    return images.reduce((acc, img) => {
      if (!acc[img.color]) acc[img.color] = [];
      acc[img.color].push(img);
      return acc;
    }, {});
  }, [images]);

  const colorKeys = Object.keys(groupedImages);
  const allColors = ["todos", ...colorKeys];

  const [selectedColor, setSelectedColor] = useState("todos");

  const filteredImages =
    selectedColor === "todos" ? images : groupedImages[selectedColor];

  const message = encodeURIComponent(
    `Hola! 👋
Estoy interesada en:
🛍️ ${fullName}
📦 Pack x ${selectedPack.qty}
💲 $${selectedPack.price.toLocaleString("es-AR")}
Color: ${selectedColor}
¿Sigue disponible?`,
  );

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
        <div
          className="relative cursor-pointer"
          onClick={() => {
            setCurrentImage(0);
            setOpen(true);
          }}
        >
          <div className="aspect-square w-full relative">
            <motion.img
              key={filteredImages[currentImage].src}
              src={filteredImages[currentImage].src}
              alt={product.name}
              initial={{opacity: 0.4}}
              animate={{opacity: 1}}
              transition={{duration: 0.3}}
              className="w-full h-full object-cover rounded-xl"
            />
            {filteredImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                {filteredImages.map((_, i) => (
                  <span
                    key={i}
                    className={`
          w-2 h-2 rounded-full transition
          ${i === currentImage ? "bg-primary scale-125" : "bg-primary/30"}
        `}
                  />
                ))}
              </div>
            )}

            {filteredImages.length > 1 && (
              <>
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
              </>
            )}
          </div>

          {product.offer && (
            <span className="absolute top-3 right-3 border border-tertiary rounded-full text-xs px-2 py-1 uppercase tracking-widest bg-light text-tertiary">
              Oferta
            </span>
          )}
        </div>

        {colorKeys.length > 1 && (
          <div className="px-5 pt-3">
            <label className="text-xs uppercase tracking-wide">Color</label>

            <div className="relative mt-1">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border"
                style={{
                  background:
                    selectedColor === "todos"
                      ? "linear-gradient(45deg,#e6d8c3,#f3d037,#e8a1b0,#6b8e23)"
                      : COLOR_MAP[selectedColor],
                }}
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
  border border-primary/30 dark:border-secondary/30
  rounded-xl
  text-sm
  bg-transparent
  focus:border-primary dark:focus:border-secondary
  outline-none
"
                >
                  {allColors.map((color) => (
                    <option
                      key={color}
                      value={color}
                      style={{
                        backgroundColor: COLOR_MAP[color],
                        color: "#000",
                      }}
                    >
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
    text-primary/90 dark:text-secondary/80
  "
                />
              </div>
            </div>
          </div>
        )}

        {product.packs.length > 1 && (
          <div className="px-5 pt-3">
            <label className="text-xs uppercase tracking-wide">Cantidad</label>

            <div className="relative w-full mt-1">
              <select
                value={selectedPack.qty}
                onChange={(e) =>
                  setSelectedPack(
                    product.packs.find((p) => p.qty === Number(e.target.value)),
                  )
                }
                className="
  w-full
  appearance-none
  pl-4 pr-12 py-2
  border border-primary/30 dark:border-secondary/30
  rounded-xl
  text-sm
  bg-transparent
  focus:border-primary dark:focus:border-secondary
  outline-none
"
              >
                {product.packs.map((pack) => (
                  <option key={pack.qty} value={pack.qty}>
                    Pack x {pack.qty}
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
    text-primary/90 dark:text-secondary/80
  "
              />
            </div>
          </div>
        )}

        <div
          className={`
            ${"p-5"}
            space-y-1 
          `}
        >
          <h2 className="font-bold text-xl">{fullName}</h2>
          <h3 className="font-medium text-lg">{fullTitle}</h3>

          {/* <p className="text-sm">{fullTitle}</p> */}
          <p className="font-semibold text-lg">
            ${selectedPack.price.toLocaleString("es-AR")}
          </p>

          <div className="text-sm">
            {product.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <p className="text-sm text-tertiary dark:text-accent pb-4">
            {product.conditions}
          </p>

          {product.status !== "sold" && (
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${message}`}
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
        <div className="fixed inset-0 bg-primary/50 flex items-center justify-center z-50 dark:bg-dark/95">
          {filteredImages.length > 1 && (
            <>
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
            </>
          )}

          <img
            src={filteredImages[currentImage].src}
            alt={fullName}
            className="max-h-[85%] max-w-[90%] object-contain"
          />

          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 -z-10"
          />
        </div>
      )}
    </>
  );
}
