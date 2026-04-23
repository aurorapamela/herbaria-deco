import {v4 as uuid} from "uuid";
import {Product} from "@/types/product";

const getDeliveryDate = (days: number) => {
  const today = new Date();
  today.setDate(today.getDate() + days);

  return today.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export type ProductBase = Omit<Product, "id">;

const productsData: ProductBase[] = [
  {
    name: "Flor de Lienzo",
    packs: [
      {qty: 4, price: 19000},
      {qty: 6, price: 29000},
      {qty: 8, price: 39000},
      {qty: 12, price: 58000},
    ],
    retailPrice: 3800,
    wholesalePrice: 3300,
    title: "Flores de Lienzo",
    description: [
      "Diámetro cada flor: 10 cm",
      "Largo total (incluye tallo): 40 cm",
    ],
    conditions: `Entrega estimada: ${getDeliveryDate(3)} (incluye 3 días de producción)`,
    image: [
      {src: "/assets/lienzo/lienzo-1.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-3.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-4.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-5.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-9.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-10.jpeg", color: "natural"},
    ],
    category: "lienzo",
    status: "available",
    offer: false,
  },
  {
    name: "Flor de Arpillera",
    packs: [
      {qty: 4, price: 19000},
      {qty: 6, price: 29000},
      {qty: 8, price: 39000},
      {qty: 12, price: 58000},
    ],
    retailPrice: 3800,
    wholesalePrice: 3300,
    title: "Flores de Arpillera",
    description: [
      "Diámetro cada flor: 10 cm",
      "Largo total (incluye tallo): 40 cm",
    ],
    conditions: `Entrega estimada: ${getDeliveryDate(3)} (incluye 3 días de producción)`,
    image: [
      {src: "/assets/arpillera/arpillera-01.jpeg", color: "arpillera"},
      {src: "/assets/arpillera/arpillera-02.jpeg", color: "arpillera"},
      {src: "/assets/arpillera/arpillera-03.jpeg", color: "arpillera"},
    ],
    category: "arpillera",
    status: "available",
    offer: false,
  },
  {
    name: "Flor de Gasa",
    packs: [
      {qty: 4, price: 19000},
      {qty: 6, price: 29000},
      {qty: 8, price: 39000},
      {qty: 12, price: 58000},
    ],
    retailPrice: 3800,
    wholesalePrice: 3300,
    title: "Flores de Gasa",
    description: [
      "Diámetro cada flor: 10 cm",
      "Largo total (incluye tallo): 40 cm",
    ],
    conditions: `Entrega estimada: ${getDeliveryDate(3)} (incluye 3 días de producción)`,
    image: [
      {src: "/assets/gasa/gasa-03.jpeg", color: "gasa"},
      {src: "/assets/gasa/gasa-01.jpeg", color: "gasa"},
      {src: "/assets/gasa/gasa-02.jpeg", color: "gasa"},
      {src: "/assets/gasa/gasa-04.jpeg", color: "gasa"},
    ],
    category: "gasa",
    status: "available",
    offer: false,
  },
  {
    name: "Difusoras Margaritas",
    packs: [
      {qty: 4, price: 18600},
      {qty: 6, price: 28000},
      {qty: 8, price: 37500},
      {qty: 10, price: 46500},
      {qty: 12, price: 55000},
    ],
    retailPrice: 4000,
    wholesalePrice: 3500,
    title: "Margaritas eternas",
    description: ["Diámetro cada flor: ", "Largo total: "],
    conditions: `Entrega estimada: ${getDeliveryDate(5)} (incluye 5 días de producción)`,
    image: [
      {src: "/assets/difusoras-margarita/margaritas-02.jpeg", color: "blanco"},
      {src: "/assets/difusoras-margarita/margaritas-01.jpeg", color: "blanco"},
      {src: "/assets/difusoras-margarita/margaritas-03.jpeg", color: "blanco"},
    ],
    category: "difusoras",
    status: "available",
    offer: false,
  },
  {
    name: "Hortensia",
    packs: [
      {qty: 4, price: 23000},
      {qty: 8, price: 46000},
    ],
    retailPrice: 3800,
    wholesalePrice: 3300,
    title: "Flor Hortensia de tela",
    description: [
      "Diámetro cada flor: 11 cm",
      "Largo total (incluye tallo): 30 cm",
    ],
    conditions: `Entrega estimada: ${getDeliveryDate(3)} (incluye 3 días de producción)`,
    image: [
      {
        src: "/assets/hortensia/hortensia-02.jpeg",
        color: "lila",
      },
      {
        src: "/assets/hortensia/hortensia-03.jpeg",
        color: "lila",
      },
      {
        src: "/assets/hortensia/hortensia-04.jpeg",
        color: "lila",
      },
      {
        src: "/assets/hortensia/hortensia-05.jpeg",
        color: "lila",
      },
      {
        src: "/assets/hortensia/hortensia-06.jpeg",
        color: "fucsia",
      },
      {
        src: "/assets/hortensia/hortensia-07.jpeg",
        color: "fucsia",
      },
    ],
    category: "flores hortensia",
    status: "available",
    offer: false,
  },
  {
    name: "Flor de Arpillera Color",
    packs: [
      {qty: 4, price: 22000},
      {qty: 6, price: 32000},
      {qty: 8, price: 42000},
      {qty: 12, price: 57600},
    ],
    retailPrice: 4000,
    wholesalePrice: 3500,
    title: "Flores de Arpillera de color personalizado",
    description: [
      "Diámetro cada flor: 10 cm",
      "Largo total (incluye tallo): 40 cm",
    ],
    conditions: `Entrega estimada: ${getDeliveryDate(7)} (incluye 7 días de producción)`,
    image: [
      {
        src: "/assets/arpillera-color/bordo-05.jpeg",
        color: "bordo",
      },
      {
        src: "/assets/arpillera-color/bordo-02.jpeg",
        color: "bordo",
      },
      {
        src: "/assets/arpillera-color/bordo-03.jpeg",
        color: "bordo",
      },
      {
        src: "/assets/arpillera-color/bordo-01.jpeg",
        color: "bordo",
      },
      {
        src: "/assets/arpillera-color/roja-01.jpeg",
        color: "rojo",
      },
      {
        src: "/assets/arpillera-color/roja-02.jpeg",
        color: "rojo",
      },
      {
        src: "/assets/arpillera-color/roja-03.jpeg",
        color: "rojo",
      },
      {
        src: "/assets/arpillera-color/roja-04.jpeg",
        color: "rojo",
      },
      {
        src: "/assets/arpillera-color/roja-05.jpeg",
        color: "rojo",
      },
    ],
    category: "arpillera",
    status: "available",
    offer: false,
  },
  {
    name: "Difusoras Simples",
    packs: [
      {qty: 6, price: 18000},
      {qty: 8, price: 23000},
      {qty: 10, price: 29000},
      {qty: 12, price: 34000},
    ],
    retailPrice: 2700,
    wholesalePrice: 2200,
    title: "Flores difusoras simples",
    description: ["Diámetro cada flor: 10cm", "Largo total: 20 cm"],
    conditions: `Entrega estimada: ${getDeliveryDate(3)} (incluye 3 días de producción)`,
    image: [
      {src: "/assets/difusora/difusoras-33.jpeg", color: "natural"},
      {src: "/assets/difusora/difusoras-04.jpeg", color: "natural"},
      {src: "/assets/difusora/difusoras-27.jpeg", color: "coral"},
      {src: "/assets/difusora/difusoras-31.jpeg", color: "verde"},
      {src: "/assets/difusora/difusoras-32.jpeg", color: "rosa"},
      {src: "/assets/difusora/difusoras-30.jpeg", color: "negro"},
      {src: "/assets/difusora/difusoras-34.jpeg", color: "rosa"},
    ],
    category: "difusoras",
    status: "available",
    offer: false,
  },
  {
    name: "Difusoras con Follaje interno",
    packs: [
      {qty: 6, price: 18000},
      {qty: 8, price: 23000},
      {qty: 10, price: 29000},
      {qty: 12, price: 34000},
    ],
    retailPrice: 3000,
    wholesalePrice: 2500,
    title: "Flores difusoras con follaje interno",
    description: ["Diámetro cada flor: 10cm", "Largo total: 20 cm"],
    conditions: `Entrega estimada: ${getDeliveryDate(3)} (incluye 3 días de producción)`,
    image: [
      {
        src: "/assets/difusora-follaje/difusora-follaje-01.jpeg",
        color: "natural",
      },
      {
        src: "/assets/difusora-follaje/difusora-follaje-02.jpeg",
        color: "marron",
      },
    ],
    category: "difusoras",
    status: "available",
    offer: false,
  },
  {
    name: "Difusoras",
    packs: [
      {qty: 4, price: 6000},
      {qty: 6, price: 9000},
      {qty: 8, price: 12000},
      {qty: 10, price: 15000},
      {qty: 12, price: 18000},
    ],
    retailPrice: 1600,
    wholesalePrice: 1400,
    title: "Flores difusoras chicas",
    description: ["Diámetro cada flor: ", "Largo total: "],
    conditions: `Entrega estimada: ${getDeliveryDate(3)} (incluye 3 días de producción)`,
    image: [
      {src: "/assets/difusora-s/difusoras-s-0.jpeg", color: "natural"},
      {src: "/assets/difusora-s/difusoras-s-1.jpeg", color: "rosa"},
      {src: "/assets/difusora-s/difusoras-s-2.jpeg", color: "beige"},
      {src: "/assets/difusora-s/difusoras-s-3.jpeg", color: "blanco"},
      {src: "/assets/difusora-s/difusoras-s-4.jpeg", color: "gris"},
      {src: "/assets/difusora-s/difusoras-s-5.jpeg", color: "terracota"},
    ],
    category: "difusoras",
    status: "available",
    offer: false,
  },
  {
    name: "Flores Ceremonia - 15 años",
    packs: [
      {qty: 15, price: 65000},
      {qty: 25, price: 117500},
    ],
    retailPrice: 4000,
    wholesalePrice: 3500,
    title: "Flores ceremonia - 15 años",
    description: ["Diámetro cada flor: ", "Largo total: 40 cm"],
    conditions: `Entrega estimada: ${getDeliveryDate(5)} (incluye 5 días de producción)`,
    image: [
      {
        src: "/assets/ceremonia-quince/ceremonia-amarilla-04.jpeg",
        color: "amarillo",
      },
      {
        src: "/assets/ceremonia-quince/ceremonia-amarilla-02.jpeg",
        color: "amarillo",
      },
      {
        src: "/assets/ceremonia-quince/ceremonia-amarilla-03.jpeg",
        color: "amarillo",
      },
      {
        src: "/assets/ceremonia-quince/ceremonia-amarilla-01.jpeg",
        color: "amarillo",
      },
      {
        src: "/assets/ceremonia-quince/ceremonia-amarilla-05.jpeg",
        color: "amarillo",
      },
      {
        src: "/assets/ceremonia-quince/ceremonia-amarilla-06.jpeg",
        color: "amarillo",
      },
      {
        src: "/assets/ceremonia-quince/ceremonia-amarilla-07.jpeg",
        color: "amarillo",
      },
    ],
    category: "flores ceremonia",
    status: "available",
    offer: false,
  },
  {
    name: "Rosas cerradas",
    packs: [
      {qty: 10, price: 29000},
      {qty: 20, price: 58000},
    ],
    retailPrice: 3700,
    wholesalePrice: 3200,
    title: "Flores de tela cerradas",
    description: ["Diámetro cada flor: 7cm", "Largo total: 40cm"],
    conditions: `Entrega estimada: ${getDeliveryDate(5)} (incluye 5 días de producción)`,
    image: [
      {
        src: "/assets/cerradas/cerradas-01.jpeg",
        color: "arpillera",
      },
      {
        src: "/assets/cerradas/cerradas-02.jpeg",
        color: "natural",
      },
      {
        src: "/assets/cerradas/cerradas-03.jpeg",
        color: "arpillera",
      },
      {
        src: "/assets/cerradas/cerradas-04.jpeg",
        color: "arpillera",
      },
      {
        src: "/assets/cerradas/cerradas-05.jpeg",
        color: "natural",
      },
      {
        src: "/assets/cerradas/cerradas-06.jpeg",
        color: "natural",
      },
    ],
    category: "rosa cerrada",
    status: "available",
    offer: false,
  },
  {
    name: "Difusoras Cordón",
    packs: [
      {qty: 10, price: 29000},
      {qty: 20, price: 58000},
    ],
    retailPrice: 3100,
    wholesalePrice: 2700,
    title: "Difusoras de cordón",
    description: ["Diámetro cada flor: 10 cm", "Largo total de cordón: 15 cm"],
    conditions: `Entrega estimada: ${getDeliveryDate(5)} (incluye 5 días de producción)`,
    image: [
      {
        src: "/assets/cordon/cordon-01.jpeg",
        color: "beige",
      },
      {
        src: "/assets/cordon/cordon-02.jpeg",
        color: "beige",
      },
      {
        src: "/assets/cordon/cordon-03.jpeg",
        color: "salmon",
      },
      {
        src: "/assets/cordon/cordon-04.jpeg",
        color: "salmon",
      },
      {
        src: "/assets/cordon/cordon-05.jpeg",
        color: "natural",
      },
      {
        src: "/assets/cordon/cordon-06.jpeg",
        color: "natural",
      },
      {
        src: "/assets/cordon/cordon-07.jpeg",
        color: "blanco",
      },
      {
        src: "/assets/cordon/cordon-08.jpeg",
        color: "blanco",
      },
      {
        src: "/assets/cordon/cordon-09.jpeg",
        color: "rosa",
      },
      {
        src: "/assets/cordon/cordon-10.jpeg",
        color: "rosa",
      },
    ],
    category: "difusoras",
    status: "available",
    offer: false,
  },
];

export const products: Product[] = productsData.map((product) => ({
  ...product,
  id: uuid(),
}));
