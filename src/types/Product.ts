export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  rating: number;
  stock: number;
  category: string;
  discountPercentage?: number;
  brand?: string;
  thumbnail?: string;
  deleteAction?: string;
}
