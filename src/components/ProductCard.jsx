import {useState} from "react";
import {motion} from "framer-motion";

const phoneNumber = "5491162625807";

export default function ProductCard({product, view}) {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <motion.div
        layout
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.3}}
        className={`
          border border-black/10 dark:border-white/10
          rounded-2xl overflow-hidden
          ${isList ? "flex gap-4 p-3 items-center" : ""}
        `}
      >
        {/* Imagen */}
        <div
          className={`relative cursor-pointer ${
            isList ? "w-24 h-24 flex-shrink-0" : ""
          }`}
          onClick={() => setOpen(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            className={`
              object-cover
              ${isList ? "w-24 h-24 rounded-xl" : ""}
              ${isCompact ? "w-full h-40" : ""}
              ${!isList && !isCompact ? "w-full h-64" : ""}
            `}
          />

          {product.offer && (
            <span className="absolute top-3 right-3 border border-black dark:border-white text-xs px-2 py-1 uppercase tracking-widest bg-white dark:bg-black">
              Oferta
            </span>
          )}
        </div>

        {/* Contenido */}
        <div
          className={`
            ${isList ? "flex-1" : "p-5"}
            ${isCompact ? "p-3" : ""}
            space-y-2
          `}
        >
          <h2 className="text-black dark:text-white font-medium">
            {product.name}
          </h2>

          {/* Descripción NO en compact */}
          {!isCompact && (
            <p className="text-sm text-black/60 dark:text-white/60">
              {product.description}
            </p>
          )}

          <p className="font-semibold text-black dark:text-white">
            ${product.price.toLocaleString("es-AR")}
          </p>

          {/* Botón NO en compact */}
          {!isCompact && product.status !== "sold" && (
            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-black dark:border-white py-2 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 text-sm"
            >
              Consultar
            </a>
          )}
        </div>
      </motion.div>

      {/* Modal imagen */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-white/95 dark:bg-black/95 flex items-center justify-center z-50"
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[85%] rounded-xl"
          />
        </div>
      )}
    </>
  );
}
