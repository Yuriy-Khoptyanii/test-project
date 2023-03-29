export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  images: string[];
  rating: string;
  stock: string;
  category: string;
  discountPercentage?: string;
  brand?: string;
  thumbnail?: string;
  deleteAction?: string;
}
