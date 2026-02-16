import type {Product} from "@/types/product";

const getDeliveryDate = (days: number) => {
  const today = new Date();
  today.setDate(today.getDate() + days);

  return today.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const products: Product[] = [
  {
    id: 1,
    name: "Flor de Lienzo",
    packs: [
      {qty: 4, price: 19000},
      {qty: 6, price: 29000},
      {qty: 8, price: 39000},
      {qty: 12, price: 58000},
    ],
    title: "Flores de Lienzo",
    description: [
      "Diámetro cada flor: 10 cm",
      "Largo total (incluye tallo): 30 cm",
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
    category: "flores lienzo",
    status: "available",
    offer: false,
  },
  {
    id: 2,
    name: "Flor de Arpillera",
    packs: [
      {qty: 4, price: 19000},
      {qty: 6, price: 29000},
      {qty: 8, price: 39000},
      {qty: 12, price: 58000},
    ],
    title: "Flores de Arpillera",
    description: [
      "Diámetro cada flor: 10 cm",
      "Largo total (incluye tallo): 30 cm",
    ],
    conditions: `Entrega estimada: ${getDeliveryDate(3)} (incluye 3 días de producción)`,
    image: [
      {src: "/assets/arpillera/arpillera-01.jpeg", color: "arpillera"},
      {src: "/assets/arpillera/arpillera-02.jpeg", color: "arpillera"},
      {src: "/assets/arpillera/arpillera-03.jpeg", color: "arpillera"},
    ],
    category: "flores lienzo",
    status: "available",
    offer: false,
  },
  {
    id: 3,
    name: "Flores Difusoras",
    packs: [
      {qty: 6, price: 18000},
      {qty: 8, price: 23000},
      {qty: 10, price: 29000},
      {qty: 12, price: 34000},
    ],
    title: "Flores difusoras",
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
    category: "flores difusoras",
    status: "available",
    offer: false,
  },
  {
    id: 4,
    name: "Flores Difusoras Chicas",
    packs: [
      {qty: 4, price: 6000},
      {qty: 6, price: 9000},
      {qty: 8, price: 12000},
      {qty: 10, price: 15000},
      {qty: 12, price: 18000},
    ],
    title: "Flores difusoras",
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
    category: "flores difusoras",
    status: "available",
    offer: false,
  },
  {
    id: 5,
    name: "Flores Ceremonia - 15 años",
    packs: [
      {qty: 15, price: 65000},
      {qty: 25, price: 117500},
    ],
    title: "Flores ceremonia - 15 años",
    description: ["Diámetro cada flor: ", "Largo total: "],
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
    id: 6,
    name: "Flores artificiales",
    packs: [
      {qty: 10, price: 29000},
      {qty: 20, price: 58000},
    ],
    title: "Flores de tela cerradas",
    description: ["Diámetro cada flor: ", "Largo total: 30cm"],
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
    ],
    category: "flores artificiales",
    status: "available",
    offer: false,
  },
];
