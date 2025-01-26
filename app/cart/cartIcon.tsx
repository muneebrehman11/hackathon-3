'use client'; 

import { useCart } from "@/app/context/CartContext";
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  const { totalQuantity } = useCart();

  return (
    <div className="relative">
      <ShoppingCart size={24} />
      {totalQuantity > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
