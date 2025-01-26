
import React from 'react';
import Image from 'next/image';
import { Heart, ShoppingCart, Eye, ChevronRight } from 'lucide-react';

const clientsLogos = [
  { image: "/assets/clien1.png", alt: "clients" },
  { image: "/assets/clien2.png", alt: "clients" },
  { image: "/assets/clien3.png", alt: "clients" },
  { image: "/assets/clien4.png", alt: "clients" },
  { image: "/assets/clien5.png", alt: "clients" },
  { image: "/assets/clien6.png", alt: "clients" },
];

export default function Product() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <div className="flex justify-start py-4 space-x-2">
        <button className="font-bold">Home</button>
        <p>{">"}</p>
        <button className="font-bold text-slate-500">Shop</button>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-28 py-4">
        {/* Left Content - Product Images */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/assets/product-main.jpg"
            alt="product"
            width={506}
            height={540}
            className="w-full h-auto hover:opacity-90"
          />
          <div className="flex gap-4 py-5">
            <Image
              src="/assets/single-product-1-cover-1.jpg"
              alt="product"
              width={100}
              height={75}
              className="w-24 h-18"
            />
            <Image
              src="/assets/product-inner.png"
              alt="product"
              width={100}
              height={75}
              className="w-24 h-18"
            />
          </div>
        </div>

        {/* Right Content - Product Info */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h3 className="text-xl text-slate-600">Floating Phone</h3>
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/Four-Star.png"
              alt="four stars"
              width={130.07}
              height={22}
            />
            <p className="text-slate-600 font-semibold">10 reviews</p>
          </div>
          <p className="font-bold text-2xl">$1,149.90</p>
          <p className="text-slate-600 font-semibold">
            Availability : <span className="text-blue-400 font-bold cursor-pointer">In Stock</span>
          </p>
          <p className="text-gray-400">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
          <hr />
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-400 cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-green-400 cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-orange-400 cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-black cursor-pointer"></div>
          </div>
          <div className="flex gap-2 items-center">
            <button className="px-6 md:px-8 py-2 md:py-3 bg-blue-400 text-white font-medium rounded-lg hover:bg-blue-600 transition">
              Select Options
            </button>
            <div className="border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer">
              <Heart />
            </div>
            <div className="border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer">
              <ShoppingCart />
            </div>
            <div className="border-2 rounded-full p-2 hover:bg-slate-200 cursor-pointer">
              <Eye />
            </div>
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="my-10">
        <ul className="flex justify-center gap-8 text-lg">
          <li>Description</li>
          <li>Additional Information</li>
          <li>Reviews (0)</li>
        </ul>
        <hr />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
        <div>
          <Image
            src="/assets/card-item(1).png"
            alt="img"
            width={332}
            height={392}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/3">
          <h1 className="font-bold text-xl">The Quick Fox Jumps Over</h1>
          <p className="text-sm text-gray-400 mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
        </div>
        <div className="w-full lg:w-1/3">
          <h1 className="font-bold text-xl">The Quick Fox Jumps Over</h1>
          <div className="flex items-center mt-4">
            <ChevronRight />
            <p className="text-gray-700">The quick fox jumps over</p>
          </div>
          <div className="flex items-center mt-2">
            <ChevronRight />
            <p className="text-gray-700">The quick fox jumps over</p>
          </div>
          <div className="flex items-center mt-2">
            <ChevronRight />
            <p className="text-gray-700">The quick fox jumps over</p>
          </div>
          <div className="flex items-center mt-2">
            <ChevronRight />
            <p className="text-gray-700">The quick fox jumps over</p>
          </div>
        </div>
      </div>

      {/* Bestseller Products Section */}
      <div className="bg-[#fafafa] py-10">
        <h1 className="text-2xl font-bold text-center mb-8">BESTSELLER PRODUCTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {/* Product Card 1 */}
          <div className="bg-white hover:shadow-md hover:border rounded">
            <Image
              src="/assets/crockery1.png"
              alt="crokery"
              width={239}
              height={280}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="font-semibold">Graphic Design</h3>
              <p className="text-slate-600 font-semibold text-sm">English department</p>
              <p className="text-slate-400 font-semibold">$12.10 <span className="text-green-600">$8.32</span></p>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="bg-white hover:shadow-md hover:border rounded">
            <Image
              src="/assets/crockery2.png"
              alt="crokery"
              width={239}
              height={280}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="font-semibold">Graphic Design</h3>
              <p className="text-slate-600 font-semibold text-sm">English department</p>
              <p className="text-slate-400 font-semibold">$12.10 <span className="text-green-600">$8.32</span></p>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="bg-white hover:shadow-md hover:border rounded">
            <Image
              src="/assets/crockery3.png"
              alt="crokery"
              width={239}
              height={280}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="font-semibold">Graphic Design</h3>
              <p className="text-slate-600 font-semibold text-sm">English department</p>
              <p className="text-slate-400 font-semibold">$12.10 <span className="text-green-600">$8.32</span></p>
            </div>
          </div>
          {/* Product Card 4 */}
          <div className="bg-white hover:shadow-md hover:border rounded">
            <Image
              src="/assets/crockery4.png"
              alt="crokery"
              width={239}
              height={280}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="font-semibold">Graphic Design</h3>
              <p className="text-slate-600 font-semibold text-sm">English department</p>
              <p className="text-slate-400 font-semibold">$12.10 <span className="text-green-600">$8.32</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="flex flex-wrap justify-center gap-8 my-10">
        {clientsLogos.map((cimages, i) => (
          <div key={i}>
            <Image src={cimages.image} alt={cimages.alt} width={100} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
}