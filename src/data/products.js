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
      "/assets/lienzo/lienzo-1.jpeg",
      "/assets/lienzo/lienzo-2.jpeg",
      "/assets/lienzo/lienzo-3.jpeg",
      "/assets/lienzo/lienzo-4.jpeg",
      "/assets/lienzo/lienzo-5.jpeg",
      "/assets/lienzo/lienzo-9.jpeg",
      "/assets/lienzo/lienzo-10.jpeg",
      "/assets/lienzo/lienzo-11.jpeg",
      "/assets/lienzo/lienzo-12.jpeg",
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
      "/assets/difusora/difusoras-03.jpeg",
      "/assets/difusora/difusoras-01.jpeg",
      "/assets/difusora/difusoras-02.jpeg",
      "/assets/difusora/difusoras-04.jpeg",
      "/assets/difusora/difusoras-07.jpeg",
      "/assets/difusora/difusoras-08.jpeg",
      "/assets/difusora/difusoras-09.jpeg",
      "/assets/difusora/difusoras-10.jpeg",
      "/assets/difusora/difusoras-11.jpeg",
      "/assets/difusora/difusoras-12.jpeg",
      "/assets/difusora/difusoras-13.jpeg",
      "/assets/difusora/difusoras-14.jpeg",
      "/assets/difusora/difusoras-15.jpeg",
      "/assets/difusora/difusoras-16.jpeg",
      "/assets/difusora/difusoras-17.jpeg",
      "/assets/difusora/difusoras-18.jpeg",
      "/assets/difusora/difusoras-19.jpeg",
      "/assets/difusora/difusoras-20.jpeg",
      "/assets/difusora/difusoras-21.jpeg",
      "/assets/difusora/difusoras-22.jpeg",
      "/assets/difusora/difusoras-24.jpeg",
      "/assets/difusora/difusoras-25.jpeg",
      "/assets/difusora/difusoras-26.jpeg",
      "/assets/difusora/difusoras-27.jpeg",
      "/assets/difusora/difusoras-28.jpeg",
      "/assets/difusora/difusoras-29.jpeg",
      "/assets/difusora/difusoras-colores.jpeg",
    ],
    category: "Flores difusoras",
    status: "available",
    offer: false,
  },
];
