
// // app/cart/page.tsx
// 'use client';

// import { useCart } from '@/app/context/CartContext';
// import Image from 'next/image';
// import { Minus, Plus, Trash2 } from 'lucide-react';

// export default function CartPage() {
//   const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

//   if (cart.length === 0) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-[60vh]">
//         <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
//         <p>Add some products to your cart to see them here.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="lg:w-2/3">
//           {cart.map((item) => (
//             <div key={item.id} className="flex items-center gap-4 border-b py-4">
//               <Image
//                 src={item.imageUrl}
//                 alt={item.title}
//                 width={100}
//                 height={100}
//                 className="object-cover"
//               />
//               <div className="flex-1">
//                 <h3 className="font-semibold">{item.title}</h3>
//                 <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     className="p-1 hover:bg-gray-100 rounded"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="w-8 text-center">{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="p-1 hover:bg-gray-100 rounded"
//                   >
//                     <Plus size={16} />
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="ml-4 text-red-500 hover:text-red-600"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </div>
//               </div>
//               <div className="font-semibold">
//                 ${(item.price * item.quantity).toFixed(2)}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="lg:w-1/3">
//           <div className="bg-gray-50 p-6 rounded-lg">
//             <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//             <div className="flex justify-between mb-4">
//               <span>Subtotal</span>
//               <span>${totalPrice.toFixed(2)}</span>
//             </div>
//             <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
//               Proceed to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// app/cart/page.tsx
'use client';

import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  // Add console.log for debugging
  console.log('Cart page rendering with cart:', cart);

  if (!cart || cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="mb-4">Add some products to your cart to see them here.</p>
        <Link href="/shop" className="text-blue-500 hover:text-blue-600">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart ({cart.length} items)</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b py-4">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={100}
                height={100}
                className="object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold mb-4">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}