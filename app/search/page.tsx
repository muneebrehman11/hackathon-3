// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";
// import Image from "next/image";

// type Product = {
//   _id: string;
//   title: string;
//   imageUrl: string;
//   price: number;
//   dicountPercentage: number;
//   isNew: boolean;
// };

// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("q") || "";
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await client.fetch<Product[]>(
//           `*[_type == "product" && title match $query] {
//             _id,
//             title,
//             price,
//             "imageUrl": productImage.asset->url,
//             dicountPercentage,
//             isNew
//           }`,
//           { query: `${query}*` } as Record<string, unknown>// Explicitly cast params as QueryParams
//         );
//         setProducts(res);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setProducts([]); // Set products to an empty array in case of error
//       }
//     };

//     if (query) {
//       fetchProducts();
//     }
//   }, [query]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Search Results for `&quot;`{query}`&quot;`</h1>
//       {products.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {products.map((product) => (
//             <Link href={`/shop/${product._id}`} key={product._id}>
//               <div className="max-w-[239px] text-center leading-8 cursor-pointer my-8 object-contain">
//                 <div className="w-[239px] h-[250px] overflow-hidden relative">
//                   {product.isNew && (
//                     <button className="bg-green-500 hover:bg-opacity-90 inline-block absolute left-1 top-1 w-14 bg-opacity-70 rounded-sm text-white">
//                       New
//                     </button>
//                   )}
//                   <Image
//                     src={product.imageUrl}
//                     alt={product.title}
//                     width={239}
//                     height={300}
//                     className="hover:scale-110 hover:shadow-md active:scale-100 duration-500"
//                   />
//                 </div>
//                 <div className="my-5">
//                   <p className="font-bold font-mono text-lg hover:text-red-600">
//                     {product.title}
//                   </p>
//                   <p className="font-semibold text-slate-500">{"Our top products"}</p>
//                   <p className="font-bold space-x-2">
//                     <span className="text-slate-400 line-through">{`$${product.price}`}</span>
//                     <span className="text-green-600">{`$${product.dicountPercentage}`}</span>
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// }







// deep seek 
"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

type Product = {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  dicountPercentage: number;
  isNew: boolean;
};

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await client.fetch<Product[]>(
          `*[_type == "product" && title match $query] {
            _id,
            title,
            price,
            "imageUrl": productImage.asset->url,
            dicountPercentage,
            isNew
          }`,
          { query: `${query}*` } as Record<string, unknown> // Explicitly cast params as QueryParams
        );
        setProducts(res);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // Set products to an empty array in case of error
      }
    };

    if (query) {
      fetchProducts();
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Search Results for &quot;{query}&quot;</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link href={`/shop/${product._id}`} key={product._id}>
              <div className="max-w-[239px] text-center leading-8 cursor-pointer my-8 object-contain">
                <div className="w-[239px] h-[250px] overflow-hidden relative">
                  {product.isNew && (
                    <button className="bg-green-500 hover:bg-opacity-90 inline-block absolute left-1 top-1 w-14 bg-opacity-70 rounded-sm text-white">
                      New
                    </button>
                  )}
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={239}
                    height={300}
                    className="hover:scale-110 hover:shadow-md active:scale-100 duration-500"
                  />
                </div>
                <div className="my-5">
                  <p className="font-bold font-mono text-lg hover:text-red-600">
                    {product.title}
                  </p>
                  <p className="font-semibold text-slate-500">{"Our top products"}</p>
                  <p className="font-bold space-x-2">
                    <span className="text-slate-400 line-through">{`$${product.price}`}</span>
                    <span className="text-green-600">{`$${product.dicountPercentage}`}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}