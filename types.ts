export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  rating: number;
  features: string[];
}

export type Category = "Fans" | "Geysers" | "roomHeaters";

export interface Slide {
  id: number;
  type: "video" | "image";
  src: string;
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface NavItem {
  label: string;
  path: string;
}
