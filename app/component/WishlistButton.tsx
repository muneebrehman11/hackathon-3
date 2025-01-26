
'use client';

import { Heart } from 'lucide-react';
import { useWishlist } from '@/app/context/WishlistContext';

type WishlistButtonProps = {
    product: {
        _id: string;
        title: string;
        price: number;
        imageUrl: string;
    };
};

export default function WishlistButton({ product }: WishlistButtonProps) {
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const isWishlisted = isInWishlist(product._id);

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
        <button
            onClick={handleWishlistClick}
            className="border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer"
        >
            <Heart
                className={isWishlisted ? 'fill-red-500 text-red-500' : ''}
            />
        </button>
    );
}