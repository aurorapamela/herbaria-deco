const getDeliveryDate = () => {
  const today = new Date();
  today.setDate(today.getDate() + 3);

  return today.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const products = [
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
    conditions: `Entrega estimada: ${getDeliveryDate()} (incluye 3 días de producción)`,
    image: [
      {src: "/assets/lienzo/lienzo-1.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-2.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-3.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-4.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-5.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-9.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-10.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-11.jpeg", color: "natural"},
      {src: "/assets/lienzo/lienzo-blanca-1.jpeg", color: "blanco"},
      {src: "/assets/lienzo/lienzo-blanca-2.jpeg", color: "blanco"},
      {src: "/assets/lienzo/lienzo-blanca-3.jpeg", color: "blanco"},
    ],
    category: "Flores lienzo",
    status: "available",
    offer: false,
  },
  {
    id: 2,
    name: "Flores Difusoras",
    packs: [
      {qty: 4, price: 19000},
      {qty: 6, price: 29000},
      {qty: 8, price: 39000},
      {qty: 12, price: 58000},
    ],
    title: "Flores difusoras",
    description: ["Diámetro cada flor: ", "Largo total: 20 cm"],
    conditions: `Entrega estimada: ${getDeliveryDate()} (incluye 3 días de producción)`,
    image: [
      {src: "/assets/difusora/difusoras-01.jpeg", color: "natural"},
      {src: "/assets/difusora/difusoras-09.jpeg", color: "natural"},
      {src: "/assets/difusora/difusoras-18.jpeg", color: "beige"},
      {src: "/assets/difusora/difusoras-29.jpeg", color: "amarillo"},
    ],
    category: "Flores difusoras",
    status: "available",
    offer: false,
  },
];
