export interface ProductImage {
  src: string;
  color: string;
}

export interface ProductPack {
  qty: number;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  title: string;
  packs: ProductPack[];
  description: string[];
  conditions: string;
  image: ProductImage[];
  category: string;
  status: "available" | "sold";
  offer: boolean;
}
