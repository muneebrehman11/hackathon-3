
"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type Product = {
  imageUrl: string;
  price: number;
  tags: string[];
  dicountPercentage: number;
  description: string;
  isNew: boolean;
  _id: string;
  title: string;
};

const BestSeller: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await client.fetch(
        `*[_type == "product" ] {
          _id,
          title,
          price,
          "imageUrl": productImage.asset->url,
          tags,
          dicountPercentage,
          description,
          isNew
        }`
      );
      setProducts(res);
    };

    fetchProducts();
  }, []);

  // Calculate the products to display for the current page
  const startIdx = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(startIdx, startIdx + productsPerPage);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8 text-center">Bestseller Products</h1>
      <p className="text-gray-600 mb-8 text-center">
        Problems trying to resolve the conflict between.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map((product: Product) => (
          <Link href={`/shop/${product._id}`} key={product._id}>
            <div className="text-center bg-white shadow-md rounded-lg p-4 hover:scale-105 duration-300">
              <div className="relative w-full h-[300px] overflow-hidden rounded-md">
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-sm">
                    New
                  </span>
                )}
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
                <p className="text-sm text-gray-500">Our top products</p>
                <div className="mt-2 flex justify-center gap-2">
                  <span className="text-gray-400 line-through">${product.price}</span>
                  <span className="text-green-600 font-semibold">
                    ${product.dicountPercentage}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 justify-center mt-4">
                <div className="w-5 h-5 rounded-full bg-blue-400 hover:border-2 border-blue-600"></div>
                <div className="w-5 h-5 rounded-full bg-green-400 hover:border-2 border-green-600"></div>
                <div className="w-5 h-5 rounded-full bg-orange-400 hover:border-2 border-orange-600"></div>
                <div className="w-5 h-5 rounded-full bg-black hover:border-black"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {/* <div className="flex justify-center items-center gap-4 mt-8">
        <button
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          First
        </button>
        <button
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          if (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2) {
            return (
              <button
                key={pageNumber}
                className={`px-4 py-2 text-sm font-medium rounded ${
                  pageNumber === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                }`}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          }
          return null;
        })}
        <button
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
        <button
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
        >
          Last
        </button>
      </div> */}
      <div className="p-4 bg-gray-100 rounded-md shadow mt-5 mx-4 sm:mx-8">
        <div className="flex flex-wrap items-center justify-center gap-2 xs:flex-wrap xs:justify-center xs:gap-4">
          {/* First Button */}
          <button
            className="px-4 py-2 text-gray-400 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            First
          </button>

          {/* Previous Button */}
          <button
            className="px-4 py-2 text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          {/* Pagination Buttons with Ellipsis */}
          {currentPage > 3 && <span className="px-2">...</span>}
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            if (pageNumber >= currentPage - 2 && pageNumber <= currentPage + 2) {
              return (
                <button
                  key={index}
                  className={`w-10 h-10 ${currentPage === pageNumber
                    ? "text-white bg-blue-500"
                    : "text-blue-500 hover:text-white hover:bg-blue-500"
                    } border border-gray-300 rounded-md focus:outline-none`}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            }
            return null;
          })}
          {currentPage < totalPages - 2 && <span className="px-2">...</span>}

          {/* Next Button */}
          <button
            className="px-4 py-2 text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>

          {/* Last Button */}
          <button
            className="px-4 py-2 text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            Last
          </button>
        </div>
      </div>

    </div>
  );
};

export default BestSeller;
