
'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

type ProductAddToCartProps = {
  product: {
    _id: string;
    title: string;
    price: number;
    imageUrl: string;
  };
};

export default function ProductAddToCart({ product }: ProductAddToCartProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log('Adding product to cart:', product); // Debug log
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer"
    >
      <ShoppingCart />
    </button>
  );
}