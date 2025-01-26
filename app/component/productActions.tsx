// components/ProductActions.tsx
'use client';

import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';

type ProductActionsProps = {
  product: {
    _id: string;
    title: string;
    price: number;
    imageUrl: string;
  };
};

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(product._id);

  const handleAddToCart = () => {
    console.log('Adding product:', product); // For debugging
    addToCart({
      id: product._id,
      title: product.title,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
    });
  };

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist({
        id: product._id,
        title: product.title,
        price: product.price,
        imageUrl: product.imageUrl,
      });
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleAddToCart}
        className="border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer"
        title="Add to Cart"
      >
        <ShoppingCart />
      </button>
      <button
        onClick={handleWishlistClick}
        className="border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer"
        title="Add to Wishlist"
      >
        <Heart className={isWishlisted ? 'fill-red-500 text-red-500' : ''} />
      </button>
    </div>
  );
}