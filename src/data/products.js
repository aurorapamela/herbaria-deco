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
    name: "Flor de Lienzo - Pack x 6 unidades",
    price: 29000,
    title: "Pack de 6 unidades de Flores de Lienzo",
    description: [
      "Diámetro cada flor: 10 cm",
      "Largo total (incluye tallo): 30 cm",
    ],
    conditions: `Entrega estimada: ${getDeliveryDate()} (incluye 3 días de producción)`,
    image: [
      {src: "/assets/lienzo/lienzo-1.jpeg", color: "#E6D8C3"},
      {src: "/assets/lienzo/lienzo-2.jpeg", color: "#E6D8C3"},
      {src: "/assets/lienzo/lienzo-3.jpeg", color: "#E6D8C3"},
      {src: "/assets/lienzo/lienzo-4.jpeg", color: "#E6D8C3"},
      {src: "/assets/lienzo/lienzo-5.jpeg", color: "#E6D8C3"},
      {src: "/assets/lienzo/lienzo-9.jpeg", color: "#E6D8C3"},
      {src: "/assets/lienzo/lienzo-10.jpeg", color: "#E6D8C3"},
      {src: "/assets/lienzo/lienzo-11.jpeg", color: "#E6D8C3"},
      {src: "/assets/lienzo/lienzo-12.jpeg", color: "#E6D8C3"},
    ],
    category: "Flores lienzo",
    status: "available",
    offer: true,
  },
  {
    id: 2,
    name: "Flores Difusoras - Pack x 10 unidades",
    price: 29000,
    title: "Pack de 10 unidades de flores difusoras",
    description: ["Diámetro cada flor: ", "Largo total: 20 cm"],
    conditions: `Entrega estimada: ${getDeliveryDate()} (incluye 3 días de producción)`,
    image: [
      {src: "/assets/difusora/difusoras-01.jpeg", color: "#E6D8C3"},
      {src: "/assets/difusora/difusoras-09.jpeg", color: "#dea8d0"},
      {src: "/assets/difusora/difusoras-18.jpeg", color: "#e8976f"},
      {src: "/assets/difusora/difusoras-18.jpeg", color: "#f3d037"},
    ],
    category: "Flores difusoras",
    status: "available",
    offer: false,
  },
];
