// "use client";

// import Link from "next/link";
// import Image from "next/image";

// import { useState, useEffect } from "react";
// import { useSearch } from "@/app/context/SearchContext"; // Import the useSearch hook
// import { client } from "@/sanity/lib/client";
// import { ChevronRight } from "lucide-react";

// type Product = {
//   _id: string;
//   title: string;
//   imageUrl: string;
//   price: number;
//   dicountPercentage: number;
//   isNew: boolean;
// };

// export default function Shop() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const { filteredProducts, setProducts } = useSearch(); // Use the search context
//   const productsPerPage = 12;

//   const fetchProducts = async () => {
//     const res = await client.fetch(`*[_type == "product"] {
//       _id,
//       title,
//       price,
//       "imageUrl": productImage.asset->url,
//       dicountPercentage,
//       isNew
//     }`);
//     setProducts(res); 
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const safeFilteredProducts = filteredProducts || [];

//   const totalPages = Math.ceil(safeFilteredProducts.length / productsPerPage);
//   const displayedProducts = safeFilteredProducts.slice(
//     (currentPage - 1) * productsPerPage,
//     currentPage * productsPerPage
//   );

//   return (
//     <section>
//       {/* Header Section */}
//       <div className="flex justify-between px-10 sm:px-[270px] max-w-screen-2xl mx-auto mt-5">
//         <h1 className="font-bold text-2xl">Shop</h1>
//         <div className="flex items-center gap-2">
//           <button className="text-[14px] font-bold">Home</button>
//           <ChevronRight className="text-[#BDBDBD]" />
//           <button className="text-[14px] font-bold text-[#BDBDBD]">Shop</button>
//         </div>
//       </div>

//       {/* Products Section */}
//       <div className="mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
//         {displayedProducts.map((data: Product) => (
//           <Link href={`/shop/${data._id}`} key={data._id}>
//             <div className="max-w-[239px] text-center leading-8 cursor-pointer my-8 object-contain">
//               <div className="w-[239px] h-[250px] overflow-hidden relative">
//                 {data.isNew && (
//                   <button className="bg-green-500 hover:bg-opacity-90 inline-block absolute left-1 top-1 w-14 bg-opacity-70 rounded-sm text-white">
//                     New
//                   </button>
//                 )}
//                 <Image
//                   src={data.imageUrl}
//                   alt={data.title}
//                   width={239}
//                   height={300}
//                   className="hover:scale-110 hover:shadow-md active:scale-100 duration-500"
//                 />
//               </div>
//               <div className="my-5">
//                 <p className="font-bold font-mono text-lg hover:text-red-600">
//                   {data.title}
//                 </p>
//                 <p className="font-semibold text-slate-500">{"Our top products"}</p>
//                 <p className="font-bold space-x-2">
//                   <span className="text-slate-400 line-through">{`$${data.price}`}</span>
//                   <span className="text-green-600">{`$${data.dicountPercentage}`}</span>
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="p-4 bg-gray-100 rounded-md shadow mt-5">
//         <div className="flex items-center justify-center rounded-md gap-2">
//           <button
//             className="px-4 py-2 text-gray-400 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage(1)}
//           >
//             First
//           </button>
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               className={`w-10 h-10 ${currentPage === index + 1
//                   ? "text-white bg-blue-500"
//                   : "text-blue-500 hover:text-white hover:bg-blue-500"
//                 } border border-gray-300 rounded-md focus:outline-none`}
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button
//             className="px-4 py-2 text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage(totalPages)}
//           >
//             Last
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }















// fixed

// "use client";

// import Link from "next/link";
// import Image from "next/image";

// import { useState, useEffect } from "react";
// import { useSearch } from "@/app/context/SearchContext"; // Import the useSearch hook
// import { client } from "@/sanity/lib/client";
// import { ChevronRight } from "lucide-react";

// type Product = {
//   _id: string;
//   title: string;
//   imageUrl: string;
//   price: number;
//   dicountPercentage: number;
//   isNew: boolean;
// };

// export default function Shop() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const { filteredProducts, setProducts } = useSearch(); // Use the search context
//   const productsPerPage = 12;

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await client.fetch(`*[_type == "product"] {
//         _id,
//         title,
//         price,
//         "imageUrl": productImage.asset->url,
//         dicountPercentage,
//         isNew
//       }`);
//       setProducts(res);
//     };
//     fetchProducts();
//   }, [setProducts]); // Add setProducts to the dependency array to resolve the warning

//   const safeFilteredProducts: Product[] = filteredProducts || [];

//   const totalPages = Math.ceil(safeFilteredProducts.length / productsPerPage);
//   const displayedProducts = safeFilteredProducts.slice(
//     (currentPage - 1) * productsPerPage,
//     currentPage * productsPerPage
//   );

//   return (
//     <section>
//       {/* Header Section */}
//       <div className="flex justify-between px-10 sm:px-[270px] max-w-screen-2xl mx-auto mt-5">
//         <h1 className="font-bold text-2xl">Shop</h1>
//         <div className="flex items-center gap-2">
//           <button className="text-[14px] font-bold">Home</button>
//           <ChevronRight className="text-[#BDBDBD]" />
//           <button className="text-[14px] font-bold text-[#BDBDBD]">Shop</button>
//         </div>
//       </div>

//       {/* Products Section */}
//       <div className="mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
//         {displayedProducts.map((data: Product) => (
//           <Link href={`/shop/${data._id}`} key={data._id}>
//             <div className="max-w-[239px] text-center leading-8 cursor-pointer my-8 object-contain">
//               <div className="w-[239px] h-[250px] overflow-hidden relative">
//                 {data.isNew && (
//                   <button className="bg-green-500 hover:bg-opacity-90 inline-block absolute left-1 top-1 w-14 bg-opacity-70 rounded-sm text-white">
//                     New
//                   </button>
//                 )}
//                 <Image
//                   src={data.imageUrl}
//                   alt={data.title}
//                   width={239}
//                   height={300}
//                   className="hover:scale-110 hover:shadow-md active:scale-100 duration-500"
//                 />
//               </div>
//               <div className="my-5">
//                 <p className="font-bold font-mono text-lg hover:text-red-600">
//                   {data.title}
//                 </p>
//                 <p className="font-semibold text-slate-500">{"Our top products"}</p>
//                 <p className="font-bold space-x-2">
//                   <span className="text-slate-400 line-through">{`$${data.price}`}</span>
//                   <span className="text-green-600">{`$${data.dicountPercentage}`}</span>
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       {/* Pagination */}
//       {/* <div className="p-4 bg-gray-100 rounded-md shadow mt-5">
//         <div className="flex items-center justify-center rounded-md gap-2">
//           <button
//             className="px-4 py-2 text-gray-400 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage(1)}
//           >
//             First
//           </button>
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               className={`w-10 h-10 ${currentPage === index + 1
//                   ? "text-white bg-blue-500"
//                   : "text-blue-500 hover:text-white hover:bg-blue-500"
//                 } border border-gray-300 rounded-md focus:outline-none`}
//               onClick={() => setCurrentPage(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button
//             className="px-4 py-2 text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
//             disabled={currentPage === totalPages}
//             onClick={() => setCurrentPage(totalPages)}
//           >
//             Last
//           </button>
//         </div>
//       </div> */}
// <div className="p-4 bg-gray-100 rounded-md shadow mt-5 mx-4 sm:mx-8">
//   <div className="flex flex-wrap items-center justify-center gap-2 xs:flex-wrap xs:justify-center xs:gap-4">
//     {/* First Button */}
//     <button
//       className="px-4 py-2 text-gray-400 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
//       disabled={currentPage === 1}
//       onClick={() => setCurrentPage(1)}
//     >
//       First
//     </button>

//     {/* Previous Button */}
//     <button
//       className="px-4 py-2 text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
//       disabled={currentPage === 1}
//       onClick={() => setCurrentPage(currentPage - 1)}
//     >
//       Previous
//     </button>

//     {/* Pagination Buttons with Ellipsis */}
//     {currentPage > 3 && <span className="px-2">...</span>}
//     {Array.from({ length: totalPages }, (_, index) => {
//       const pageNumber = index + 1;
//       if (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2) {
//         return (
//           <button
//             key={index}
//             className={`w-10 h-10 ${
//               currentPage === pageNumber
//                 ? "text-white bg-blue-500"
//                 : "text-blue-500 hover:text-white hover:bg-blue-500"
//             } border border-gray-300 rounded-md focus:outline-none`}
//             onClick={() => setCurrentPage(pageNumber)}
//           >
//             {pageNumber}
//           </button>
//         );
//       }
//       return null;
//     })}
//     {currentPage < totalPages - 2 && <span className="px-2">...</span>}

//     {/* Next Button */}
//     <button
//       className="px-4 py-2 text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
//       disabled={currentPage === totalPages}
//       onClick={() => setCurrentPage(currentPage + 1)}
//     >
//       Next
//     </button>

//     {/* Last Button */}
//     <button
//       className="px-4 py-2 text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
//       disabled={currentPage === totalPages}
//       onClick={() => setCurrentPage(totalPages)}
//     >
//       Last
//     </button>
//   </div>
// </div>


//     </section>
//   );
// }







"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearch } from "@/app/context/SearchContext"; // Import the useSearch hook
import { client } from "@/sanity/lib/client";
import { ChevronRight } from "lucide-react";

type Product = {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  dicountPercentage: number;
  isNew: boolean;
};

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredProducts, setProducts } = useSearch(); // Use the search context
  const productsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await client.fetch(`*[_type == "product"] {
        _id,
        title,
        price,
        "imageUrl": productImage.asset->url,
        dicountPercentage,
        isNew
      }`);
      setProducts(res);
    };
    fetchProducts();
  }, [setProducts]);

  const safeFilteredProducts: Product[] = filteredProducts || [];

  const totalPages = Math.ceil(safeFilteredProducts.length / productsPerPage);
  const displayedProducts = safeFilteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <section className="px-4 sm:px-8">
      {/* Header Section */}
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto mt-5">
        <h1 className="font-bold text-xl sm:text-2xl">Shop</h1>
        <div className="flex items-center gap-2 text-sm">
          <button className="font-bold">Home</button>
          <ChevronRight className="text-gray-400" />
          <button className="font-bold text-gray-400">Shop</button>
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {displayedProducts.map((data: Product) => (
          <Link href={`/shop/${data._id}`} key={data._id}>
            <div className="text-center cursor-pointer">
              <div className="w-full h-[200px] sm:h-[250px] relative overflow-hidden rounded-lg">
                {data.isNew && (
                  <button className="absolute top-2 left-2 bg-green-500 text-white text-sm px-2 py-1 rounded">
                    New
                  </button>
                )}
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  width={240}
                  height={300}
                  className="w-full h-full object-cover hover:scale-110 duration-300"
                />
              </div>
              <div className="mt-4">
                <p className="font-bold text-base sm:text-lg hover:text-red-600">
                  {data.title}
                </p>
                <p className="text-sm text-gray-500">{"Our top products"}</p>
                <p className="font-bold text-sm space-x-2">
                  <span className="line-through text-gray-400">{`$${data.price}`}</span>
                  <span className="text-green-600">{`$${data.dicountPercentage}`}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        <button
          className="px-3 py-1 text-sm text-gray-400 bg-white border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          First
        </button>
        <button
          className="px-3 py-1 text-sm text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-3 py-1 text-sm ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "text-blue-500 hover:bg-blue-500 hover:text-white"
            } border border-gray-300 rounded-md`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 text-sm text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
        <button
          className="px-3 py-1 text-sm text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
        >
          Last
        </button>
      </div>
    </section>
  );
}
