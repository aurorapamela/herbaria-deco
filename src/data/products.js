export const products = [
  {
    id: 1,
    name: "Heladera",
    price: 250000,
    description: "Heladera Electrolux",
    image: [
      `${import.meta.env.BASE_URL}assets/cello.jpeg`,
      `${import.meta.env.BASE_URL}assets/cello-2.jpeg`,
      `${import.meta.env.BASE_URL}assets/cello-3.jpeg`,
    ],
    category: "Electrodoméstico",
    status: "available",
    offer: false,
  },
  {
    id: 2,
    name: "Lavarropas",
    price: 235000,
    description: "Lavarropas Drean.",
    image: [
      `${import.meta.env.BASE_URL}assets/cello.jpeg`,
      `${import.meta.env.BASE_URL}assets/cello.jpeg`,
      `${import.meta.env.BASE_URL}assets/cello.jpeg`,
    ],
    category: "Electrodoméstico",
    status: "available",
    offer: false,
  },
  {
    id: 3,
    name: "Violoncello",
    price: 1500000,
    description: "Violoncello Cremona 4/4",
    images: [
      `${import.meta.env.BASE_URL}assets/cello.jpeg`,
      `${import.meta.env.BASE_URL}assets/cello-2.jpeg`,
      `${import.meta.env.BASE_URL}assets/cello-3.jpeg`,
    ],
    category: "Instrumento",
    status: "available",
    offer: false,
  },
];
