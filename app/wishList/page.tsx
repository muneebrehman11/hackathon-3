
// app/wishlist/page.tsx
'use client';

import { useWishlist } from '@/app/context/WishlistContext';
import Image from 'next/image';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
        <p>Add some products to your wishlist to see them here.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">My Wishlist</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item, i) => (
          <div key={i} className="border rounded-lg p-4 flex flex-col">
            <Link href={`/shop/${item.id}`}>
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={300}
                height={300}
                className="object-cover w-full h-48 mb-4"
              />
            </Link>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
            <div className="flex justify-between mt-auto">
              <button
                onClick={() => {
                  addToCart({ ...item, quantity: 1 });
                  removeFromWishlist(item.id);
                }}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                <ShoppingCart size={18} />
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-red-500 hover:text-red-600 p-2"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}