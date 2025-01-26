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
  const productsPerPage = 8; // Adjust the number of products per page
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
    <div className="container mx-auto px-4 place-items-center">
      <h1 className="text-3xl font-bold my-8 text-center">Bestseller Products</h1>
      <p className="text-gray-600 mb-8 text-center">
        Problems trying to resolve the conflict between.
      </p>

      <div className="mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {currentProducts.map((data: Product) => (
          <Link href={`/shop/${data._id}`} key={data._id}>
            <div className="max-w-[239px] text-center leading-8 cursor-pointer hover:scale-105 hover:shadow-md active:scale-100 duration-500 my-8 object-contain">
              <div className="w-[239px] h-[300px] overflow-hidden relative">
                <button
                  className={`bg-green-500 hover:bg-opacity-90 inline-block absolute left-1 top-1 w-14 bg-opacity-70 rounded-sm text-white ${data.isNew ? "" : "hidden"
                    }`}
                >
                  new
                </button>
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  width={239}
                  height={300}
                />
              </div>
              <div className="my-5">
                <p className="font-bold font-mono text-lg hover:text-red-600">
                  {data.title}
                </p>
                <p className="font-semibold text-slate-500 cursor-none">
                  {"our top products"}
                </p>
                <p className="font-bold space-x-2">
                  <span className="text-slate-400 line-through">
                    {`$${data.price}`}
                  </span>
                  <span className="text-green-600">
                    {`$${data.dicountPercentage}`}
                  </span>
                </p>
              </div>
              <div className="flex gap-2 justify-center pb-8">
                <div className="w-[20px] h-[20px] rounded-full bg-blue-400 cursor-pointer hover:border-2 border-blue-600"></div>
                <div className="w-[20px] h-[20px] rounded-full bg-green-400 cursor-pointer hover:border-2 border-green-600"></div>
                <div className="w-[20px] h-[20px] rounded-full bg-orange-400 cursor-pointer hover:border-2 border-orange-600"></div>
                <div className="w-[20px] h-[20px] rounded-full bg-black cursor-pointer hover:border-black"></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="p-4 bg-gray-100 rounded-md shadow mt-5">
        <div className="flex items-center justify-center rounded-md gap-2">
          <button
            className="px-4 py-2 text-gray-400 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            First
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`w-10 h-10 ${currentPage === index + 1
                ? "text-white bg-blue-500"
                : "text-blue-500 hover:text-white hover:bg-blue-500"
                } border border-gray-300 rounded-md focus:outline-none`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 text-blue-500 bg-white border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            Last
          </button>
        </div>
      </div>
      {/* =================xxxxxxxxxxxxxxx=================== */}
      {/* <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={() => {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
            window.scrollTo({ top:200, behavior: "smooth" }); // Scroll to the top of the page
          }}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => {
              setCurrentPage(i + 1);
              window.scrollTo({ top: 10, behavior: "smooth" }); // Scroll to the top of the page
            }}
            className={`px-4 py-2 rounded ${currentPage === i + 1
              ? "bg-blue-500 text-white"
              : "bg-gray-300 hover:bg-gray-400"
              }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            window.scrollTo({ top: 10, behavior: "smooth" }); // Scroll to the top of the page
          }}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
       </div>  */}
    </div>
  );
};

export default BestSeller;


