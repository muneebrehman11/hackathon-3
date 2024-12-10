
// components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  image: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
  colors: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ image, department, originalPrice, discountedPrice, colors }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img  className="w-full" src={image} alt="Product img " />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{department}</div>
        <p className="text-gray-700 text-base">
          Original Price: <span className="line-through">{originalPrice}</span>
        </p>
        <p className="text-gray-900 text-xl font-bold">{discountedPrice}</p>
        <div className="flex mt-2">
          {colors.map((color, index) => (
            <span key={index} className={`h-6 w-6 rounded-full bg-${color}-500 mr-2`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
